import React,{useEffect, useState, useContext} from 'react';
import api from '../../services/api';
import {FaShoppingBag} from "react-icons/fa";
import {Container} from './styles';
import {CartContext} from '../Cart/CartProvider';

function Dashboard() {

  const [products, setProducts] = useState([]);
  const {dispatch} = useContext(CartContext);
  useEffect(() => {
    api
      .get("/api/products", {
      })
      .then(res => {
        setProducts(res.data);
        console.log(res);
      });
  },[]);
  return (
    <Container>
      <ul>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt="img" />
          <strong>{product.name}</strong>
          <p>{product.description}</p>
          <strong>
            {Intl.NumberFormat("strongt-BR", {
              style: "currency",
              currency: "BRL"
            }).format(product.price)}
          </strong>
          <button
            onClick={() => {dispatch({type: 'ADD_TO_CART', id:product.id, product })}}
            type="button"
          >
            Adicionar ao Carrinho
            <FaShoppingBag size={20} color="black" style={{marginLeft:'10px'}}/>
          </button>
        </li>
      ))}
      </ul>
    </Container>
  );
}

export default Dashboard;
