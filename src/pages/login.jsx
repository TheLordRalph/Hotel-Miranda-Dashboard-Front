import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Title, Button, Input } from '../components/styled';
import { LoginContext } from '../App';

import logo from '../resources/Imagenes/logo.png';


const SubTitle = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #799283;
  margin: 0;
  align-self: center;
  margin-bottom: 5px;
`;

export const Login = () => {

  let navigate = useNavigate();
  const { dispatch } = React.useContext(LoginContext)


  function handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let email = formData.get("email");
    let password = formData.get("pass");

    if (email === 'admin@hotelmiranda.com' && password === 'Admin1234') {
      event.currentTarget[1].setAttribute("style", 'color: #799283; border-color: #799283;');
      dispatch({type: 'login', payload: 'Admin'});
      navigate("/dashboard");
    } else {
      event.currentTarget[1].setAttribute("style", 'color: red; border-color: red;');
      event.currentTarget[0].value = "";
      event.currentTarget[1].value = "";
    }
  }

  return (
    <section style={{ height: '100%', display: 'flex', }}>
      <div style={{ backgroundColor: 'white', width: '50%', display: 'flex', borderRadius: '12px', margin: 'auto', boxShadow: '0px 16px 30px rgba(0, 0, 0, 0.14)', }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', width: '50%', padding: '41px 49px', justifyContent: 'space-between', }}>
            <Title margin='0 0 21px 0'>Login</Title>
            <form onSubmit={handleSubmit}>
              <Input type='email' placeholder="Email" name="email" size="2em" />
              <Input type='password' placeholder="Password" name="pass" size="2em" />
              <SubTitle>Email: admin@hotelmiranda.com<br/>Password: Admin1234</SubTitle>
              <Button primary>Login</Button>
            </form>
          </div>
          <img src={logo} style={{ width: '50%', height: 'fit-content', margin: 'auto', padding: '41px 49px',}}/>
      </div>
    </section>
  )
}