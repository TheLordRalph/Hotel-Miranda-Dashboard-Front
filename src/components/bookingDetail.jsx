import React from 'react';
import styled from 'styled-components';

import { Title, SubTitle, Main, Etiqueta } from '../components/styled';


const CardBookingDetail = styled.section`
    margin: 0 50px;
    padding: 40px;
    display: flex;
    flex-wrap: wrap;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 12px;
`;

export default function BookingDetail() {

    return (
        <Main>
            <CardBookingDetail>
                <div style={{ width: '50%', display: 'flex', flexWrap: 'wrap'}}>
                    <Title size='30px' lineHeight='46px'>Nombre Apellidos</Title>
                    <SubTitle width='100%' size='14px' lineHeight='21px' margin='0 0 30px 0'>Id Booking</SubTitle>
                    <div style={{ width: '50%'}}>
                        <SubTitle size='14px' lineHeight='21px'>Check In</SubTitle>
                        <Title size='16px' lineHeight='25px' margin='0 30px 30px 0'>October 30th, 2020 | 08:23 AM</Title>
                    </div>
                    <div style={{ width: '50%'}}>
                        <SubTitle size='14px' lineHeight='21px'>Check Out</SubTitle>
                        <Title size='16px' lineHeight='25px'>October 30th, 2020 | 08:23 AM</Title>
                    </div>
                    <div style={{ width: '50%'}}>
                        <SubTitle size='14px' lineHeight='21px'>Room Info</SubTitle>
                        <Title size='16px' lineHeight='25px' margin='0 30px 30px 0'>Deluxe Z - 002424</Title>
                    </div>
                    <div style={{ width: '50%'}}>
                        <SubTitle size='14px' lineHeight='21px'>Price</SubTitle>
                        <Title size='16px' lineHeight='25px'>$145</Title>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <div style={{ width: '100%'}}>
                        <SubTitle size='14px' lineHeight='21px'>Facilities</SubTitle>
                        <Etiqueta width='fit-content' margin='5px' background='#E8F2EF' padding='10px' height='fit-content'><Title size='14px' lineHeight='21px' color='#135846'>Bed Superior</Title></Etiqueta>
                    </div>
                </div>
            </CardBookingDetail>
        </Main>
    )

}