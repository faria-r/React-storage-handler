const add = (first,second) =>{
    return first + second;
}

const multiply = (first,second) =>{
    return first * second;
}
// to export single function
// export default add;




// const numbers = [20,24,235,65,89];
// const sumreducer = (previous,current) => previous + current;
// const total = numbers.reduce(sumreducer,0)


const items = [
    {id:1,name:'alta',price:200},
 {id:2,name:'nail Polish',price:300},
{id:3,name:'consiler',price:400},{id:4,name:'netbuns',price:500},
{id:5,name:'pompom',price:600}
];

const ItemReducer = (previous,Current) => previous + Current.price;
const itemTotal  = items.reduce(ItemReducer,0);

const getTotalPrice = products =>{
    const reducer = (previous,current) =>previous + current.price;
    const total = products.reduce(reducer,0);
    return total;
}
// to export multiple function;
export {add,multiply,getTotalPrice};