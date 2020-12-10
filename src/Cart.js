
import React from 'react';
import CartItem from './CartItem';


class Cart extends React.Component {
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

    render() {
        const { products } = this.state;
        return (

            <div className='cart'>

                {products.map((product) => {
                    return <CartItem
                        product={product}
                        key={product.id}
                        onIncreaseQuantity={this.handleIncreaseQuantity}
                        onDeccreaseQuantity={this.handleDecreaseQuantity}

                    />


                })}

            </div>
        )
    }

}

export default Cart;