import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: white;
  display: grid;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 0 auto;
  width: 80%;
  border-radius: 10px;
  grid-template-columns: 2fr, 1fr;
  div{
    grid-gap: 24px;
    list-style: none;
    
    h1{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    button {
      display: block;
      margin-top:50px;
      margin: 0 auto;
      
      
      height:40px; 
      width:200px;
      background: #a7e8bd;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#a7e8bd')};
      }
    }
  } 
  ul {
    grid-gap: 24px;
    list-style: none;
  } 
  ul li {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    
  }
  ul li img {
    flex: 1 1;
  }
  ul li strong {
    flex: 8 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul li p {
    color: black;
    line-height: 21px;
    font-size: 16px;
  }
  ul li p + strong {
    margin-top: 32px;
    font-size: 20px;
  }

  ul li button {
    height:50px;
    width:50px;
    margin-top:70px;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  nav {
    display: flex;
    align-items: center;
    button {
      height:40px;
      width:40px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom:70px;
      border:none;
      background-color:white;
    }
  }
  
`