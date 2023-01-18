import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { Title, SubTitle, Photo, Etiqueta, Button, Table, Column, Main } from '../../components/styled';

import dataBookings from '../../JSON/booking.json';

export default function Booking() {
  let navigate = useNavigate();


  return (
    <Main>
      <section style={{ display: 'flex', justifyContent: 'center', margin: '0 50px 28px 50px', alignItems: 'center' }}>
        <NavLink to={"/bookings"}><Title weight='normal' size='16px' lineHeight='25px' color='#393939'>All Guest</Title></NavLink>
        <NavLink to={`/bookings`}><Title weight='normal' size='16px' lineHeight='25px' color='#393939'>Pending</Title></NavLink>
        <NavLink to={`/bookings`}><Title weight='normal' size='16px' lineHeight='25px' color='#393939'>Booked</Title></NavLink>
        <NavLink to={`/bookings`}><Title weight='normal' size='16px' lineHeight='25px' color='#393939'>Canceled</Title></NavLink>
        <NavLink to={`/bookings`}><Title weight='normal' size='16px' lineHeight='25px' color='#393939'>Refund</Title></NavLink>

        <Button>Newest
          <svg style={{ marginLeft: '10px', }} xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
          </svg>
        </Button>
      </section>

      <Table borderRadius='20px 20px 0 0'>
        <Column row='1' column='1' width='146px'>Guest</Column>
        <Column row='1' column='2' width='120px'>Order Date</Column>
        <Column row='1' column='3' width='110px'>Check in</Column>
        <Column row='1' column='4' width='110px'>Check out</Column>
        <Column row='1' column='5' width='160px'>Special Request</Column>
        <Column row='1' column='6' width='110px'>Room Type</Column>
        <Column row='1' column='7' width='110px'>Status</Column>
        <Column row='1' column='8' width='10px'></Column>
      </Table>

      {dataBookings.bookings.map(booking => (
        <Table key={booking.id} borderRadius='0' onClick={() => {navigate("/booking/:" + booking.id);}}>
          <Column row='1' column='1' width='146px'><Title weight='normal' size='16px' lineHeight='25px' color='#393939'>{booking.nombre}</Title><SubTitle size='14px' lineHeight='27px' margin='0 0 12px 0'>{booking.id}</SubTitle></Column>
          <Column row='1' column='2' width='120px'><Title weight='normal' size='16px' lineHeight='25px' color='#393939'>{booking.orderDate}</Title></Column>
          <Column row='1' column='3' width='110px'><Title weight='normal' size='16px' lineHeight='25px' color='#393939'>{booking.checkIn}</Title></Column>
          <Column row='1' column='4' width='110px'><Title weight='normal' size='16px' lineHeight='25px' color='#393939'>{booking.checkOut}</Title></Column>
          <Column row='1' column='5' width='160px'><Button background='#EEF9F2' color='black' borderColor='#EEF9F2'>View Notes</Button></Column>
          <Column row='1' column='6' width='110px'><Title weight='normal' size='16px' lineHeight='25px' color='#393939'>{booking.tipoHabitacion} {booking.numeroHabitacion}</Title></Column>
          <Column row='1' column='7' width='110px'>
            <Etiqueta padding='13px 0 13px 0' background={booking.status}>
              <Title weight='normal' size='16px' lineHeight='25px' color='#FFFFFF' width='fit-content' margin='auto'>{booking.status}</Title>
            </Etiqueta>
          </Column>
          <Column row='1' column='8' width='10px'>
            <Button padding='0 0 0 20px' background='none' color='black' border='none'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
              </svg>
            </Button>
          </Column>
        </Table>
      ))}
    </Main>
  )
}
