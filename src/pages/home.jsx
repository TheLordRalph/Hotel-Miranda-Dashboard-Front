import React from 'react';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';

import { Title, SubTitle } from '../components/styled';

import Header from '../layout/header'

const Main = styled.main`
  padding-left: 18%;
  transition: padding 2s;
`;

const Card = styled.div`
  padding: 30px;
  width: -moz-available;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 12px;
  display: flex;
  margin: 0 19px;
`;

const LogoKPIs = styled.svg`
  padding: 20.5px;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#FFEDEC'};
  border-radius: 8px;
`;

export default function Home() {

  if (localStorage.getItem("login") != "true") {
    return (
      <Navigate to="/" />
    )
  } else {
    return (
      <>
        <Header></Header>
        <Main>
          <section style={{ display: 'flex', padding: '0 19px', marginTop: '50px',}}>
            <Card>
              <LogoKPIs width="24px" height="24px" fill='#E23428' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 9.557V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.525 2 13v4a1 1 0 0 0 1 1h1v4h2v-4h12v4h2v-4h1a1 1 0 0 0 1-1v-4c0-1.475-.811-2.75-2-3.443zM18 7v2h-5V7h5zM6 7h5v2H6V7zm14 9H4v-3c0-1.103.897-2 2-2h12c1.103 0 2 .897 2 2v3z" />
              </LogoKPIs>
              <div>
                <Title weight='bolder' size='30px' height='46px' color='#393939' margin='0 0 0 22px'>8,461</Title>
                <SubTitle weight='lighter' size='14px' height='21px' color='#787878' margin='0 0 0 22px'>New Booking</SubTitle>
              </div>
            </Card>

            <Card>
              <LogoKPIs backgroundColor='#E23428' width="24px" height="24px" fill='#FFFFFF' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.498 18l-3.705-3.704 1.415-1.415 2.294 2.295 5.293-5.293 1.415 1.415L10.498 18zM21 6v13c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2V6c0-1.104.896-2 2-2h1V2h2v2h8V2h2v2h1c1.104 0 2 .896 2 2zm-2 2H5v11h14V8z" />
              </LogoKPIs>
              <div>
                <Title weight='bolder' size='30px' height='46px' color='#393939' margin='0 0 0 22px'>90%</Title>
                <SubTitle weight='lighter' size='14px' height='21px' color='#787878' margin='0 0 0 22px'>Scheduled Room</SubTitle>
              </div>
            </Card>

            <Card>
              <LogoKPIs style={{ transform: 'rotateZ(180deg)', }} width="24px" height="24px" fill='#E23428' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3zm2-7h7v2H6v3l-5-4 5-4v3z" />
              </LogoKPIs>
              <div>
                <Title weight='bolder' size='30px' height='46px' color='#393939' margin='0 0 0 22px'>753</Title>
                <SubTitle weight='lighter' size='14px' height='21px' color='#787878' margin='0 0 0 22px'>Check In</SubTitle>
              </div>
            </Card>

            <Card>
              <LogoKPIs width="24px" height="24px" fill='#E23428' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3zm2-7h7v2H6v3l-5-4 5-4v3z" />
              </LogoKPIs>
              <div>
                <Title weight='bolder' size='30px' height='46px' color='#393939' margin='0 0 0 22px'>516</Title>
                <SubTitle weight='lighter' size='14px' height='21px' color='#787878' margin='0 0 0 22px'>Check Out</SubTitle>
              </div>
            </Card>
          </section>

          <section>
            
          </section>
        </Main>
      </>
    )
  }
}