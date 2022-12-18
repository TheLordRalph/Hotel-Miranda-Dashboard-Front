import React from 'react';
import { NavLink } from 'react-router-dom';

import { Title, SubTitle, Photo, Etiqueta, Button, Table, Column, Main } from '../components/styled';

import dataEmployees from '../JSON/employees.json';
import user from '../resources/Imagenes/user.jpeg';

export default function Users() {
  return (
    <Main>
      <section style={{ display: 'flex', justifyContent: 'center', margin: '0 50px 28px 50px', alignItems: 'center' }}>
        <NavLink to={"/bookings"}><Title weight='normal' size='16px' lineHeight='25px' color='#393939'>All Employee</Title></NavLink>
        <NavLink to={`/bookings/${'pending'}`}><Title weight='normal' size='16px' lineHeight='25px' color='#393939'>Active Employee</Title></NavLink>
        <NavLink to={`/bookings/${'booked'}`}><Title weight='normal' size='16px' lineHeight='25px' color='#393939'>Inactive Employee</Title></NavLink>

        <Button color='#FFFFFF' background='#135846' padding='15px 59px' margin='0 0 0 auto'>+ New Employee</Button>
        <Button margin='0 0 0 20px'>Newest
          <svg style={{ marginLeft: '10px', }} xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
          </svg>
        </Button>
      </section>

      <Table borderRadius='20px 20px 0 0'>
        <Column row='1' column='1' width='270px'>Name</Column>
        <Column row='1' column='2' width='300px'>Job Desk</Column>
        <Column row='1' column='3' width='220px'>Contact</Column>
        <Column row='1' column='4' width='110px'>Status</Column>
        <Column row='1' column='5' width='10px'></Column>
      </Table>

      {dataEmployees.employees.map(employee => (
        <Table key={employee.id} borderRadius='0'>
          <Column row='1' column='1' width='270px' display='flex' alignItems='center'>
          <Photo margin='0 23px 16px 0' height='88px' src={user} alt="" />
            <div>
              <Title weight='bolder' size='16px' lineHeight='25px' color='#393939'>{employee.nombre}</Title>
              <SubTitle size='14px' lineHeight='27px'>{employee.id}</SubTitle>
              <SubTitle size='14px' lineHeight='27px' margin='0 0 12px 0'>Joined on {employee.fechaAlta}</SubTitle>
            </div>
          </Column>
          <Column row='1' column='2' width='300px'><Title weight='normal' size='16px' lineHeight='25px' color='#393939'>{employee.description}</Title></Column>
          <Column row='1' column='3' width='220px'>
            <Title weight='bolder' size='14px' lineHeight='21px' color='#393939'>{employee.tlf}</Title>
            <Title weight='normal' size='14px' lineHeight='21px' color='#393939'>{employee.email}</Title>
          </Column>
          <Column row='1' column='4' width='110px'>
            <Etiqueta padding='13px 0 13px 0'>
              <Title weight='normal' size='16px' lineHeight='25px' color={employee.status === "Active" ? '#5AD07A' : '#E23428' } width='fit-content' margin='auto'>{employee.status}</Title>
            </Etiqueta>
          </Column>
          <Column row='1' column='5' width='10px'>
            <Button padding='0 0 0 20px' background='none' color='black' border='none'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
              </svg>
            </Button>
          </Column>
        </Table>
      ))}
    </Main>
  )
}
