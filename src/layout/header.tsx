import React from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

import { SubTitle, Title, Button, Photo } from '../components/styled';
import { useAuth } from '../pages/protectedRoutes';
import { LoginContext } from "../App";

import logo from '../resources/Imagenes/logo.png';
import user from '../resources/Imagenes/user.jpeg';


const SideBar = styled.div`
  width: 18%;
  padding-top: 32px;
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  position: absolute;
  top: 0;
  left: 0;
  transition: left 2s;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 13px 3px 40px #00000005;
`;

const NavBar = styled.div`
  width: inherit;
  padding: 32px 0;
  padding-left: 18%;
  display: flex;
  align-content: start;
  transition: padding 2s;
  align-items: center;
  justify-content: right;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 10px #00000005;
  margin-bottom: 50px;
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

const IconOpenSide = styled.svg`
  margin: 9px 50px 8px 48px;
  transform: rotateZ(0deg);
  transition: transform 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const IconsNav = styled.svg`
  margin-right: 40px;
  cursor: pointer;
`;

const Notification = styled.h5`
  font-size: 14px;
  text-align: center;
  width: 26px;
  position: absolute;
  margin: 0;
  padding: 4px 0px;
  color: white;
  background-color: #E23428;
  border: 2px solid white;
  border-radius: 8px;
  transform: translateX(15px) translateY(-15px);
`;

const UserContainer = styled.div`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 30px #00000014;
  border-radius: 18px;
  width: 80%;
  margin: 0 auto;
  margin-top: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 73px;
  text-align: center;
  margin-bottom: 62px;
`;

export default function Header() {

    let navigate = useNavigate();
    let param = useLocation();
    const { state, dispatch } = React.useContext(LoginContext);

    function handleLogout() {
      //localStorage.setItem("login", false);
      dispatch({type: 'logout'});
      navigate("/");
    }

    function handleAnimation() {
        document.getElementById("sidebar").classList.toggle("sideBarAni");
        document.getElementById("navbar").classList.toggle("navBarAni");
        document.getElementById("openSideBar").classList.toggle("openSideAni");
        document.getElementsByTagName("main")[0].classList.toggle("mainAni");
    }

    return (
        <>
            <NavBar id="navbar">
                <IconOpenSide id="openSideBar" onClick={handleAnimation} xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
                    <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
                </IconOpenSide>
                <Title style={{ margin: '0' }} textTransform='capitalize'>{param.pathname.substring(1)}</Title>

                <div style={{ display: 'flex', }}>
                    <IconsNav xmlns="http://www.w3.org/2000/svg" width="31" height="30" fill="#799283" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </IconsNav>
                    <Notification>2</Notification>
                </div>

                <div style={{ display: 'flex', }}>
                    <IconsNav xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#799283" class="bi bi-bell" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                    </IconsNav>
                    <Notification>87</Notification>
                </div>

                <div>
                    <IconsNav onClick={handleLogout} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#799283" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                        <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                    </IconsNav>
                </div>
            </NavBar>

            <SideBar id="sidebar">
                <img src={logo} style={{ width: '75%', margin: '0px auto 62px' }} />
                <SideLinks url="/dashboard">
                    <div style={{ display: 'none' }}></div>
                    <svg style={{ margin: '20px 26.7px 20px 48px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="27" fill="currentColor" class="bi bi-grid-1x2" viewBox="0 0 16 16">
                        <path d="M6 1H1v14h5V1zm9 0h-5v5h5V1zm0 9v5h-5v-5h5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5z" />
                    </svg>
                    <SubTitle>Dashboard</SubTitle>
                </SideLinks>

                <SideLinks url="/rooms">
                    <div style={{ display: 'none' }}></div>
                    <svg style={{ margin: '20px 26.7px 20px 48px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="27" fill="currentColor" class="bi bi-grid-1x2" viewBox="0 0 16 16">
                        <path d="M6 1H1v14h5V1zm9 0h-5v5h5V1zm0 9v5h-5v-5h5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5z" />
                    </svg>
                    <SubTitle>Room</SubTitle>
                </SideLinks>

                <SideLinks url="/booking">
                    <div style={{ display: 'none' }}></div>
                    <svg style={{ margin: '20px 26.7px 20px 48px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="27" fill="currentColor" class="bi bi-grid-1x2" viewBox="0 0 16 16">
                        <path d="M6 1H1v14h5V1zm9 0h-5v5h5V1zm0 9v5h-5v-5h5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5z" />
                    </svg>
                    <SubTitle>Bookings</SubTitle>
                </SideLinks>

                <SideLinks url="/users">
                    <div style={{ display: 'none' }}></div>
                    <svg style={{ margin: '20px 26.7px 20px 48px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="27" fill="currentColor" class="bi bi-grid-1x2" viewBox="0 0 16 16">
                        <path d="M6 1H1v14h5V1zm9 0h-5v5h5V1zm0 9v5h-5v-5h5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5z" />
                    </svg>
                    <SubTitle>Users</SubTitle>
                </SideLinks>

                <SideLinks url="/contact">
                    <div style={{ display: 'none' }}></div>
                    <svg style={{ margin: '20px 26.7px 20px 48px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="27" fill="currentColor" class="bi bi-grid-1x2" viewBox="0 0 16 16">
                        <path d="M6 1H1v14h5V1zm9 0h-5v5h5V1zm0 9v5h-5v-5h5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5z" />
                    </svg>
                    <SubTitle>Contact</SubTitle>
                </SideLinks>


                <UserContainer>
                    <Photo margin='0 0 16px 0' height='80px' style={{ transform: 'translateY(-40px)', }} src={user} alt="" />
                    <SubTitle style={{ transform: 'translateY(-40px)', }} margin='0 0 9px 0' width='100%' size='16px' lineHeight='25px' color='#393939'>{state.user}</SubTitle>
                    <SubTitle style={{ transform: 'translateY(-40px)', }} margin='0 0 16px 0' width='100%' size='12px' lineHeight='18px' weight='lighter'>{state.email}</SubTitle>
                    <Button style={{ transform: 'translateY(-40px)', }} background='#EBF1EF' borderColor='#EBF1EF'>Edit</Button>
                </UserContainer>

                <SubTitle margin='0 0 5px 56px' width='100%' size='16px' lineHeight='25px' color='#393939'>Travl Hotel Admin Dashboard</SubTitle>
                <SubTitle margin='0 0 67px 56px' width='100%' size='14px' lineHeight='21px' weight='lighter'>© 2020 All Rights Reserved</SubTitle>
                <SubTitle margin='0 0 0px 56px' width='100%' size='14px' lineHeight='21px' weight='lighter'>Made with ♥ by LordRalph</SubTitle>
            </SideBar>

        </>
    )
}