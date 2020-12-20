import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import  firebase from 'firebase/app';



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      loading: true
    }
    // this.increaseQuantity=this.increaseQuantity.bind(this);    we can bind the function in constructure also
  }

  componentDidMount(){
    firebase.firestore() //getting data from fire store
    .collection('Products')
    .get()
    .then((snapshot)=>{
      console.log(snapshot);

      snapshot.docs.map((doc)=>{
        console.log(doc.data());
      });
      const products=snapshot.docs.map((doc)=>{
        const data=doc.data();

        data['id']=doc.id;
        return data;
      });

      this.setState({
        products:products,
        loading:false

      })
        
      
    });
  }

  handleIncreaseQuantity = (product) => {
    console.log(" the qty gets increased", product);

    const { products } = this.state;
    const index = products.indexOf(product);  //get index of product whose qty need to increase.
    products[index].qty += 1;
    this.setState({
      products: products
    })


  }

  handleDecreaseQuantity = (product) => {

    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty > 0) {
      products[index].qty -= 1;
    }

    this.setState({
      products: products
    })
  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items
    })
  }

  getCartCount=()=>{
    const {products}=this.state;

    let count=0;

    products.forEach((product)=>{
      count += product.qty;
    });


    return count;

  }
  totalAmount=()=>{
    const {products}=this.state;

    let cartTotal=0;
    products.map((product)=>{
      cartTotal=cartTotal+product.qty *product.price;
    });
    return cartTotal;
  }

  render() {
    const {products,loading}=this.state;
    return (
      <div className="App">
        <Navbar  count={this.getCartCount()} />
        
        <Cart 
         
         products={products}
         key={products.id}
        
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDeccreaseQuantity={this.handleDecreaseQuantity}
        onDeleteQuantity={this.handleDeleteProduct}
        
        />
        {loading && <h1> Products Loading...</h1>}
        <div><h2 style={{padding :10}}>Total Amount:-Rs.{this.totalAmount()}</h2></div>
      </div>
    );
  }
}

export default App;
