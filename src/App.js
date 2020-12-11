import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [
        {
          price: 9999,
          title: "Mobile Phone",
          qty: 1,
          img: '',
          id: 1
        },
        {
          price: 999,
          title: "Watch",
          qty: 1,
          img: '',
          id: 2
        },
        {
          price: 35000,
          title: "Laptop",
          qty: 1,
          img: '',
          id: 3
        }
      ]
    }
    // this.increaseQuantity=this.increaseQuantity.bind(this);    we can bind the function in constructure also
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

  render() {
    const {products}=this.state;
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
      </div>
    );
  }
}

export default App;
