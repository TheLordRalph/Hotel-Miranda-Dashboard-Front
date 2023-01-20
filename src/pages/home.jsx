import React, { useState } from 'react';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

import { Title, SubTitle, Photo, Main } from '../components/styled';
import CardMessage from '../components/cardMessage';
import Header from '../layout/header';
import Histogram from '../components/histogram.jsx';

import dataBookings from '../JSON/booking.json';
import dataMessages from '../JSON/contactMessage.json';
import user from '../resources/Imagenes/user.jpeg';


const Card = styled.div`
  padding: 30px;
  width: -webkit-fill-available;
  width: -moz-available;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 12px;
  display: flex;
  margin: 0 19px;
`;

const LogoKPIs = styled.svg`
  padding: 20.5px;
  background-color: ${props => props.background ? props.background : '#FFEDEC'};
  border-radius: 8px;
`;

const Calendar = styled.div`
width: 40%;
padding: 0 50px;
.fc {
  width: 100%;
  height: auto;
  padding: 30px;
  margin-right: 40px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 20px;
}
.fc td, .fc th, .fc-scrollgrid {
  border-style: none;
  background: none;
}
.fc .fc-event {
  border-radius: 20px;
}
.fc .fc-day-today {
  background: none !important;
}
.fc .fc-daygrid-day-frame {
  padding: 14px 19px;
  display: flex;
}
.fc .fc-toolbar-chunk {
  display: flex;
  font-size: 0.8vw;
}
.fc .fc-button-primary {
  background: none;
  border: none;
}
.fc .fc-icon {
  color: black;
}
`;

const ContainerReservas = styled.div`
display: flex;
flex-wrap: wrap;
margin: 30px 50px 40px 50px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 4px 4px #00000005;
border-radius: 0px 0 20px 20px;
padding: 25px;
`;

const Reservas = styled.div`
display: flex;
`;

export default function Home() {

  const [bookings, setBookings] = useState(dataBookings);

  const handleDateClick = (selectionInfo) => { 

    console.log(selectionInfo);
    createCardsBookings(selectionInfo.startStr, selectionInfo.endStr);

    const date = new Date(selectionInfo.start);
    if (date.getDay() == 1) {
      
    }
  }

  const createCardsBookings = (dateStart, dateEnd) => {
    dataBookings.bookings.map(booking => (
      null
    ))
  }

  // const setEvents = () => {
  //   let events = [];
  //   dataBookings.bookings.map(booking => (
  //     {
  //       groupId: booking.id,
  //       start: booking.checkIn,
  //       overlap: false,
  //       display: "background"
  //     }
  // ))
  //   return events;
  // }


  return (
    <>
      
      <Main>
        <section style={{ display: 'flex', padding: '0 31px', margin: '50px 0 40px 0',}}>
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
            <LogoKPIs background='#E23428' width="24px" height="24px" fill='#FFFFFF' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

        <section style={{ display: 'flex' }}>
            <Calendar>
              <FullCalendar
                headerToolbar={{
                  start: '',
                  end: 'prev title next',
                }}
                firstDay={1}
                plugins={[ dayGridPlugin, interactionPlugin ]}
                initialView="dayGridMonth"
                select={handleDateClick}
                windowResize
                aspectRatio={2}
                updateSize
                contentHeight={400}
                fixedWeekCount={false}
                selectable={true}
                showNonCurrentDates={false}
                // events={setEvents}
              />
            </Calendar>

          <Histogram />
        </section>

        <ContainerReservas id='container_reservas'>
          {/*createCardsBookings*/}
          <Reservas>
            <Photo src={user} alt="" height="100%" margin='0 10px 0 0'/>
            <div>
              <Title size='1.8vw'>Doble Delux - Numero Habitacion</Title>
              <SubTitle size='1.4vw'>Sñ. Ojete Sucio</SubTitle>
              <SubTitle size='1.4vw'>12-03-2022 -- 18-03-2022</SubTitle>
            </div>
          </Reservas>

        </ContainerReservas>

        <section style={{ margin: '0 50px', padding:'30px', background: '#FFFFFF 0% 0% no-repeat padding-box', boxShadow: '0px 4px 4px #00000005', borderRadius: '20px' }}>
          <Title size='20px' lineHeight='30px' color='#393939' margin='0 0 30px 0'>Latest Review by Customers</Title>
          <div style={{ display: 'flex', overflowX: 'auto', scrollbarWidth: 'none',}}>
            {dataMessages.messages.map(message => (
              <CardMessage key={message.id} name={message.name} email={message.email} phone={message.phone} subject={message.subject} message={message.message}/>
            ))}
          </div>
        </section>
      </Main>
    </>
  )
}
