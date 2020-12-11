
import React from 'react';
import CartItem from './CartItem';


const  Cart =(props)=> {
     
        const { products } = props;
        return (

            <div className='cart'>

                {products.map((product) => {
                    return <CartItem
                        product={product}
                        key={product.id}
                        onIncreaseQuantity={props.onIncreaseQuantity}
                        onDeccreaseQuantity={props.onDeccreaseQuantity}
                        onDeleteQuantity={props.onDeleteQuantity}

                    />


                })}

            </div>
        )
    }



export default Cart;