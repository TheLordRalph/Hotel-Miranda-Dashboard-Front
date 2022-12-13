import React from 'react';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { SubTitle } from '../components/styled';

import logo from '../resources/Imagenes/logo.png';


const SideBar = styled.div`
  width: 18%;
  background-color: white;
  padding-top: 32px;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  align-content: start;
  position: relative;
  top: -13.7%;
  left: 0;
  transition: left 2s;
`;

const NavBar = styled.div`
  width: 100%;
  background-color: white;
  padding: 32px 0;
  padding-left: 18%;
  display: flex;
  align-content: start;
`;

const SideLinks = styled(NavLink).attrs(props => ({
  to: props.url,
  }))`
  text-decoration: none;
  color: #799283;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 8px;
`;

export default function Home() {

  function handleAnimation() {
    // Animacion SideBar
  }
  
  if (localStorage.getItem("login") != "true") {
    return (
      <Navigate to="/login"/>
    )
  } else {
    return (
      <>
        <NavBar>
          <svg onClick={handleAnimation} style={{ margin: '20px 26.7px 20px 48px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="27" fill="currentColor" class="bi bi-grid-1x2" viewBox="0 0 16 16">
            <path d="M6 1H1v14h5V1zm9 0h-5v5h5V1zm0 9v5h-5v-5h5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5z"/>
          </svg>
        </NavBar>

        <SideBar id="sidebar">
          <img src={logo} style={{ width: '100%', margin: '0 69px 62px 56px'}}/>
          <SideLinks url="/">
            <div style={{ display: 'none' }}></div>
            <svg style={{ margin: '20px 26.7px 20px 48px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="27" fill="currentColor" class="bi bi-grid-1x2" viewBox="0 0 16 16">
              <path d="M6 1H1v14h5V1zm9 0h-5v5h5V1zm0 9v5h-5v-5h5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5z"/>
            </svg>
            <SubTitle>Dashboard</SubTitle>
          </SideLinks>

          <SideLinks url="/room">
            <div style={{ display: 'none' }}></div>
            <svg style={{ margin: '20px 26.7px 20px 48px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="27" fill="currentColor" class="bi bi-grid-1x2" viewBox="0 0 16 16">
              <path d="M6 1H1v14h5V1zm9 0h-5v5h5V1zm0 9v5h-5v-5h5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5z"/>
            </svg>
            <SubTitle>Room</SubTitle>
          </SideLinks>

          <SideLinks url="/bookings">
            <div style={{ display: 'none' }}></div>
            <svg style={{ margin: '20px 26.7px 20px 48px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="27" fill="currentColor" class="bi bi-grid-1x2" viewBox="0 0 16 16">
              <path d="M6 1H1v14h5V1zm9 0h-5v5h5V1zm0 9v5h-5v-5h5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5z"/>
            </svg>
            <SubTitle>Bookings</SubTitle>
          </SideLinks>

          <SideLinks url="/users">
            <div style={{ display: 'none' }}></div>
            <svg style={{ margin: '20px 26.7px 20px 48px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="27" fill="currentColor" class="bi bi-grid-1x2" viewBox="0 0 16 16">
              <path d="M6 1H1v14h5V1zm9 0h-5v5h5V1zm0 9v5h-5v-5h5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5z"/>
            </svg>
            <SubTitle>Guest</SubTitle>
          </SideLinks>

          <SideLinks url="/contact">
            <div style={{ display: 'none' }}></div>
            <svg style={{ margin: '20px 26.7px 20px 48px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="27" fill="currentColor" class="bi bi-grid-1x2" viewBox="0 0 16 16">
              <path d="M6 1H1v14h5V1zm9 0h-5v5h5V1zm0 9v5h-5v-5h5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5z"/>
            </svg>
            <SubTitle>Concierge</SubTitle>
          </SideLinks>

        </SideBar>
        
      </>
    )
  }
}