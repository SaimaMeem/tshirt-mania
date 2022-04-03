import React from 'react';
import './Cart.css'
const Cart = ({cart,handleRemoveFromCart}) => {
    console.log(cart);
    return (
        <div className='cart'>
            <h2>This is cart</h2>
            {
                cart.map(tshirt=> <p>{tshirt.name} <button onClick={()=>handleRemoveFromCart(tshirt)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;