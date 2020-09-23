import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import api from '../../services/api';
import history from '../../services/history';
import { Form, Input } from '@rocketseat/unform';


const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

function SignIn() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


  async function handleSubmit(e){
    
    try {
      const response = await api.post("api/login", { email, password});
      console.log(response);
      if(response !== null){
        localStorage.setItem("TOKEN", response.data.token);
        localStorage.setItem("USERID", response.data.user.id);
        history.push('/dashboard');
      }
      
      // history.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {/* <img src={logo} alt="GoBarber" /> */}

      <Form onSubmit={handleSubmit} schema= {schema}>
        <Input 
        name="email"
        type="email"
        placeholder="Seu e-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
        <Input
          value={password}
          onChange={e => setPassword(e.target.value)}
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">{'Acessar'}</button>
        <Link to="/register">Criar uma conta gratuita</Link>
      </Form>
    </>
  );
}

export default SignIn;
