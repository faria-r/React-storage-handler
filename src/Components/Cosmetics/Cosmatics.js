import React, { useEffect, useState } from 'react';
import { getTotalPrice } from '../../Utilities/Calculate';
import Cosmatic from '../Cosmatic/Cosmatic';
// import { add } from '../../Utilities/Calculate';
// import add from '../../Utilities/Calculate';

const Cosmatics = () => {
//     const Cosmatics = [
// {id:1,name:'alta',price:200},
// {id:2,name:'nail Polish',price:300},
// {id:3,name:'consiler',price:400},
// {id:4,name:'netbuns',price:500},
// {id:5,name:'pompom',price:600},
//     ];
const [Cosmatics, setcosmatics]= useState([]);
useEffect(()=>{
    fetch('data.json')
    .then(res =>res.json())
    .then(data => setcosmatics(data))
},[])
const total = getTotalPrice(Cosmatics)
    return (
        <div>
            <h2>This is Cosmatic Container</h2>
            <p>money:{total}</p>
           {
Cosmatics.map(cosmatic => <Cosmatic 
    key={Cosmatics.id}
    cosmatic={cosmatic}
    ></Cosmatic>)
           }
        </div>
    );
};

export default Cosmatics;