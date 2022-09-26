const removeFromDb = id =>{
const storedCart= localStorage.getItem('shopping-cart');
if(storedCart){
    const shoppingCart = JSON.parse(storedCart);
    if(id in shoppingCart){
delete shoppingCart[id]
localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart)); 
   
    }
}
};
// to delet whole databse 
const deletDatabse = ()=>{
localStorage.removeItem('shoping-cart');
}
export{removeFromDb,deletDatabse};