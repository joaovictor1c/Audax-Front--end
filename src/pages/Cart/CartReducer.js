

export const CartReducer = (state, action) =>{
  const {shopping, totalPrice, count} = state;
  let product;
  let updatedPrice;
  let updatedCount;
  switch(action.type){  
    case 'ADD_TO_CART':
      const check = shopping.find(product => product.id === action.id);
      
      if(check){
        return state
      }else {
        product = action.product;
        // console.log(product);
        // product['count'] = 1;
        updatedCount = count + 1;
        updatedPrice = totalPrice + product.price;
        return {shopping: [ product, ...shopping], totalPrice: updatedPrice, count: updatedCount};
      }

    case 'REMOVE_TO_CART':
      let decreasePrice;
      console.log(action.totalPrice);
      const newShopping = shopping.filter((item) => item.id !== action.id)
      decreasePrice = totalPrice - action.totalPrice ;
     return{
        totalPrice: decreasePrice,
        shopping: newShopping,
     }
      
      default: 
        return state;

      
  }

}