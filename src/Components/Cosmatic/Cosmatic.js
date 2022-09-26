import React from 'react';
import { addToStorage } from '../../Utilities/fakedb';
import { removeFromDb } from '../../Utilities/removedb';
import './Cosmatic.css'

const Cosmatic = (props) => {
    const {name,price,id}= props.cosmatic;
    const addToCart = (id)=>{
        addToStorage(id);
    }

    const addToCartWithParam = () =>{
        addToCart(id)
    }
    const removeFromCart = id =>{
        console.log('removing',id)
        removeFromDb(id);
    }
    return (
        <div className='product'>
            <h2>Buy This:{name}</h2>
            <h4>Only For:{price}</h4>
            <h3>ID:{id}</h3>
            <button onClick={addToCartWithParam}>Add to Cart</button>
            {/* //adding with a arrow function */}
            <button onClick={()=>removeFromCart(id)}>Remove</button>
            
        </div>
    );
};

export default Cosmatic;