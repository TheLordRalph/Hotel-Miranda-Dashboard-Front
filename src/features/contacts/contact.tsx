import React from 'react';
import { NavLink } from 'react-router-dom';

import { Title, SubTitle, Photo, Etiqueta, Button, Table, Column, Main } from '../../components/styled';
import CardMessage from '../../components/cardMessage';

import dataMessages from '../../JSON/contactMessage.json';


export default function Contact() {
  return (
    <Main>

      <section style={{ display: 'flex', overflowX: 'auto', scrollbarWidth: 'none', margin: '0 50px 80px 50px'}}>
        {dataMessages.messages.map(message => (
          <CardMessage key={message.id} name={message.name} email={message.email} phone={message.phone} subject={message.subject} message={message.message}/>
        ))}
      </section>

      <section style={{ display: 'flex', justifyContent: 'center', margin: '0 50px 28px 50px', alignItems: 'center' }}>
        <NavLink to={"/bookings"}><Title weight='normal' size='16px' lineHeight='25px' color='#393939'>All Contact</Title></NavLink>
        <NavLink to={`/bookings/${'pending'}`}><Title weight='normal' size='16px' lineHeight='25px' color='#393939'>Archive</Title></NavLink>

        <Button margin='0 0 0 auto'>Newest
          <svg style={{ marginLeft: '10px', }} xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
          </svg>
        </Button>
      </section>

      <Table borderRadius='20px 20px 0 0'>
        <Column row='1' column='1' width='260px'>Date</Column>
        <Column row='1' column='2' width='240px'>Customer</Column>
        <Column row='1' column='3' width='360px'>Asunto</Column>
        <Column row='1' column='4' width='100px'></Column>
      </Table>

      {dataMessages.messages.map(message => (
        <Table key={message.id} borderRadius='0'>
          <Column row='1' column='1' width='260px'>
            <Title weight='normal' size='16px' lineHeight='25px' color='#393939'>{message.date}</Title>
            <SubTitle size='14px' lineHeight='27px'>{message.id}</SubTitle>
          </Column>
          <Column row='1' column='2' width='240px'>
            <Title weight='normal' size='16px' lineHeight='25px' color='#393939'>{message.name}</Title>
            <SubTitle size='14px' lineHeight='27px'>{message.email}</SubTitle>
            <SubTitle size='14px' lineHeight='27px'>{message.phone}</SubTitle>
          </Column>
          <Column row='1' column='3' width='360px'>
            <SubTitle size='14px' lineHeight='27px'>{message.subject}</SubTitle>
            <Title weight='normal' size='14px' lineHeight='21px' color='#393939'>{message.message}</Title>
          </Column>
          <Column row='1' column='4' width='100px'>
            <Button padding='0 0 0 20px' background='none' color='black' border='none'>
            <Title weight='bolder' size='16px' lineHeight='25px' color='#5AD07A'>Archive</Title>
            </Button>
          </Column>
        </Table>
      ))}
    </Main>
  )
}
