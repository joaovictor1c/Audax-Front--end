import React, { useContext } from 'react';

import {CartContext} from './CartProvider'
import {Container} from './styles'
import {MdDelete} from 'react-icons/md'
import api from '../../services/api'
import history from '../../services/history'

function Cart() {
 
  const {shopping, totalPrice, dispatch} = useContext(CartContext);


  async function handleOrder (){
    try{
      const userID = localStorage.getItem('USERID');
      const token = localStorage.getItem('TOKEN');
      const response = await api.post("/api/orders",{
        user_id: userID,
        totalPrice:totalPrice,
        products:shopping,
      },{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token
        },
      });
      console.log(response);
      history.push('/details');

    }catch(err){
      console.log(err);
    }
  }
  return (
    <Container>
      <ul>
        {shopping.map((product, index) => (
          <li key={product.id}>
            <img src={product.image} alt="img" />
            <strong>{product.name}</strong>
            
            <strong>
              {Intl.NumberFormat("strongt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(product.price)}
            </strong>
            {/* <button type="button" value={count} onChange={(e)=>{ setCount(e.currentTarget.value)}}/> */}
            <nav>
              <button type="button" onClick={() => {dispatch({type: 'REMOVE_TO_CART', id:product.id, totalPrice:product.price })}}>
                  <MdDelete size={30} />
              </button>
            </nav>
           
          </li>
        ))}
      </ul>
      <div>
        { shopping.length > 0 ? 
        <>
          <h1>total:{totalPrice}</h1>
          <button type="button" onClick={() =>{ handleOrder() }}>Comprar</button>
        </>
        : 
        <h1>Não existe produtos no carrinho</h1>}
        
      </div>
    </Container>
    
  ) 
}

export default Cart;