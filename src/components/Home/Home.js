import React, { useState } from 'react';
import useTShirts from '../../hooks/useTShirts';
import './home.css'
import Cart from '../Cart/Cart'
import TShirt from '../TShirt/TShirt';
const Home = () => {
    const [tshirts, setTShirts] = useTShirts([]);
    const [cart, setCart] = useState([]);
    const handleAddToCart = (selectedItem)=>{
        const exists = cart.find(tshirt=> tshirt._id === selectedItem._id);
        if(!exists){
            const newCart = [...cart,selectedItem];
            setCart(newCart);
        }
     
    }
    const handleRemoveFromCart = (selectedItem)=>{
        const rest = cart.filter(tshirt => tshirt._id !== selectedItem._id);
        console.log(rest);
        setCart(rest);
    }
    return (
        <div className='home-container'>
            <div className='tshirt-container'>
            {/* <h3>{tshirts.length}</h3> */}
            {
                tshirts.map(tshirt=> <TShirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart}></TShirt>)
            }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            </div>

        </div>
    );
};

export default Home;