import React from 'react';
class CartItem extends React.Component{
    constructor(){
    super();

        this.state={
            price:9999,
            title:'Mobile Phone',
            qty:1,
            img:''
        }
       // this.increaseQuantity=this.increaseQuantity.bind(this);    we can bind the function in constructure also
    }
    increaseQuantity=()=>{
        console.log("test" ,this);
    }
    render(){
        const {price,title,qty,img}=this.state;  // destructuring
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}></img>

                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}> Rs.{price}</div>
                    <div style={{color:'#777'}}> Quantity:{qty}</div>
                    <div className="cart-item-action">
                        {/*Buttons*/}
                        <img alt="Incraese" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/static/icons/svg/709/709484.svg"
                        onClick={this.increaseQuantity.bind(this)} >   
                        </img>
                        
                        <img alt="Decrease" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/static/icons/svg/659/659892.svg"></img>
                        
                        <img alt="delete" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/static/icons/svg/3096/3096673.svg"></img>


                  </div>

                </div>

            </div>

        );
    }
}


const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}



export default CartItem