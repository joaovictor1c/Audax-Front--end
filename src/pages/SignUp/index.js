import React,{ useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as Yup from 'yup';
import api from '../../services/api';
import { Form, Input } from '@rocketseat/unform';
import history from '../../services/history';


const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .min(6, 'No minimo 6 caracteres')
    .required('A senha é obrigatória'),
  
});

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setc_password] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [address, setAdress] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");

  async function handleSubmit() {
 
    const data = {
      name,
      email,
      password,
      c_password,
      zipcode,
      district,
      city,
      state,
      address,
      number,
      complement,
    };
    try{
      const response = await api.post("/api/register", data);
      console.log(response)
    }catch(err){
      console.log(err);
    }
  }

  if(zipcode.length === 8 ){
    const data = () =>{
      axios.get(
        `https://viacep.com.br/ws/${zipcode}/json/`
      ).then(e => {
        let dados =e.data;
        setDistrict(dados.bairro);
        setCity(dados.localidade);
        setState(dados.uf);
        setAdress(dados.logradouro);
        setComplement(dados.complemento);
      })
    } 
    data()
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input 
          name="name"
          placeholder="Nome completo" 
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input 

          name="email" 
          type="email" 
          placeholder="Seu e-mail" 
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        
        <Input
          name="c_password" 
          type="password"
          placeholder="Sua senha secreta novamente"
          value={c_password}
          onChange={e => setc_password(e.target.value)}
        />
        <Input
          name="zipcode"      
          placeholder="Seu cep"
          value={zipcode}
          onChange={(e)=>setZipcode(e.target.value)}
        />
        <Input
          name="district"          
          placeholder="Seu bairro"
          value={district}
          onChange={e => setDistrict(e.target.value)}
        />
        <Input
          name="city"         
          placeholder="Sua cidade"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <Input
          name="state"         
          placeholder="UF"
          value={state}
          onChange={e => setState(e.target.value)}
        />
        <Input
          name="address"        
          placeholder="Seu endereço"
          value={address}
          onChange={e => setAdress(e.target.value)}
        />
        <Input
          name="number"
          placeholder="Numero do seu endereço"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
        <Input
          name="complement"
          placeholder="Complemento"
          value={complement}
          onChange={e => setComplement(e.target.value)}
        />
        <button type="submit" onClick={()=> history.push('/')}>Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}

export default SignUp;
