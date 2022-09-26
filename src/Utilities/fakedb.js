//use localstorage to manage data.

const addToStorage =(id)=>{
    let shoppingCart;
  //get the shopping cart
  const storedCart = localStorage.getItem('shopping-cart');
  if(storedCart){
shoppingCart= JSON.parse(storedCart);
  }
  else{
shoppingCart = {};
  }
    //add qunatity
    const quantity = shoppingCart[id];
    if(quantity){
const newQuantity = quantity+ 1;
shoppingCart[id]= newQuantity;

// localStorage.setItem(id,newQuantity)
    }
    else{
        // localStorage.setItem(id,1);
        shoppingCart[id]=1;
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart)); 
   
}

export {addToStorage} ;