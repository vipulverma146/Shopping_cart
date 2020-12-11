import React from 'react';

const CartItem = (props) => {
    // increaseQuantity=()=>{
    //     this.setState((prevState)=>{
    //         return{
    //             qty:prevState.qty+1
    //         }
    //     });
    //     // console.log("test" ,this);
    // }
    // decreseQuantity=()=>{
    //     this.setState((prevState)=>{
    //         if(prevState.qty>0){
    //         return{
    //             qty:prevState.qty-1
    //         }
    //     }

    //     });
    // }


    const { price, title, qty } = props.product;  // destructuring

    const { product, onIncreaseQuantity, onDeccreaseQuantity, onDeleteQuantity } = props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={product.img}></img>


            </div>
            <div className="right-block">
                <div style={{ fontSize: 25 }}>{title}</div>
                <div style={{ color: '#777' }}> Rs.{price}</div>
                <div style={{ color: '#777' }}> Quantity:{qty}</div>
                <div className="cart-item-action">
                    {/*Buttons*/}
                    <img alt="Incraese"
                        className="action-icons"
                        src="https://www.flaticon.com/svg/static/icons/svg/709/709484.svg"   // calling function using props when user click's
                        onClick={() => onIncreaseQuantity(product)}

                    />


                    <img alt="Decrease"
                        className="action-icons"
                        src="https://www.flaticon.com/svg/static/icons/svg/659/659892.svg"
                        onClick={() => onDeccreaseQuantity(product)}
                    ></img>

                    <img alt="delete"
                        className="action-icons"
                        src="https://www.flaticon.com/svg/static/icons/svg/3096/3096673.svg"
                        onClick={() => onDeleteQuantity(product.id)}
                    >
                    </img>


                </div>

            </div>




        </div>

    );
}



const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}



export default CartItem