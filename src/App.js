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
    
    .onSnapshot((snapshot)=>{
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
    
    
    
    // products[index].qty += 1;
    // this.setState({
    //   products: products
    // })

    const refDoc=firebase.firestore().collection('Products').doc(products[index].id);

    refDoc.update({
      qty:products[index].qty+1

    })
    .then(()=>{
      console.log("Updated Succesfully");
    })
    .catch((error)=>{
      console.log("Error:",error);
    })


  }

  handleDecreaseQuantity = (product) => {

    const { products } = this.state;
    const index = products.indexOf(product);

    
   if(products[index].qty ===0){
     return;
   }
    // this.setState({
    //   products: products
    // })
    const refDoc=firebase.firestore().collection('Products').doc(products[index].id);

    refDoc.update({

      qty:products[index].qty -1
    })
    .then(()=>{
      console.log("Updated Succesfully");
    })
    .catch((error)=>{
      console.log("Error:",error);
    })

  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    // const items = products.filter((item) => item.id !== id);

    // this.setState({
    //   products: items
    // })

    const refDoc=firebase.firestore().collection('Products').doc(id);

    refDoc.delete()
    .then(()=>{
      console.log("Deleted Succesfully");
    })
    .catch((error)=>{
      console.log("Error:",error);
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

  addProduct=()=>{
    firebase.firestore()
       .collection('Products')
       .add({
         img:'https://static.cilory.com/413480-thickbox_default/monte-carlo-cd-black-sweatshirt.jpg',
         price:1010,
         title:'Sweater',
         qty:2
       })
       .then((refDoc)=>{
         console.log("Product has been added",refDoc);

       })
       .catch((error)=>{
         console.log('Error',error);
       })
      
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
        <button onClick={this.addProduct}> Add Product</button>
        {loading && <h1> Products Loading...</h1>}
        <div><h2 style={{padding :10}}>Total Amount:-Rs.{this.totalAmount()}</h2></div>
      </div>
    );
  }
}

export default App;
