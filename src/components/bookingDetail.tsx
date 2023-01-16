import React from 'react';
import styled from 'styled-components';

import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Title, SubTitle, Main, Etiqueta, PageCardDetail } from './styled';
import roomPhoto from '../resources/Imagenes/room01.jpg';



export default function BookingDetail() {

    return (
        <Main style={{ display: 'flex', marginRight: '50px', }}>
            <PageCardDetail>
                <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap'}}>
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
            </PageCardDetail>
            <Swiper
            style={{ width: '45%', margin: '0', borderRadius: '0 12px 12px 0', }}
            modules={[Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img src={roomPhoto} alt="" style={{ height: '100%', }}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={roomPhoto} alt="" style={{ height: '100%', }}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={roomPhoto} alt="" style={{ height: '100%', }}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={roomPhoto} alt="" style={{ height: '100%', }}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={roomPhoto} alt="" style={{ height: '100%', }}/>
                </SwiperSlide>
                <Title size='24px' lineHeight='25px' width='-webkit-fill-available' color='white' margin='0 75px' position='absolute' transform='translateY(-730%)' zIndex='1'>Bed Room</Title>
                <SubTitle size='14px' lineHeight='21px' width='-webkit-fill-available' color='#FFFFFF70' margin='0 75px' position='absolute' transform='translateY(-126px)' zIndex='1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci</SubTitle>
            </Swiper>
        </Main>
    )

}