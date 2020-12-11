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
          img: 'https://www.android.com/static/2016/img/one/carousel/nokia_5_3_1x.png',
          id: 1
        },
        {
          price: 999,
          title: "Watch",
          qty: 1,
          img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
          id: 2
        },
        {
          price: 35000,
          title: "Laptop",
          qty: 1,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAi_aJtn0hIrpvmAGk3illu8YMvyFqHkOY3A&usqp=CAU',
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
  totalAmount=()=>{
    const {products}=this.state;

    let cartTotal=0;
    products.map((product)=>{
      cartTotal=cartTotal+product.qty *product.price;
    });
    return cartTotal;
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
        <div><h2 style={{padding :10}}>Total Amount:-Rs.{this.totalAmount()}</h2></div>
      </div>
    );
  }
}

export default App;
