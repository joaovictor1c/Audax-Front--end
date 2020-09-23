import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  border-radius: 10px;
  /* border: 1px solid #dcdce6; */

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;
    list-style: none;
  } 
  ul li {
    background:grey;
    padding: 24px;
    border-radius: 8px;
    position: relative;
  }
  ul li img {
    display: flex;
    margin: 0 auto;
  }
  ul li strong {
    display: block;
    margin-bottom: 16px;
    color: black;
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
    
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 4px;
    background: green;
    font-size: 14px;
    padding: 6px 12px;
    margin: 0 auto;
    text-decoration: none;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid transparent;
  }
  ul li button:hover {
    opacity: 0.8;
  }
  ul li button:active {
    background-image: none;
    outline: 0;
    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
}
`