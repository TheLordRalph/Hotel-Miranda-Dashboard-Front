import React from 'react';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from 'react';

import { Title, SubTitle, Photo, Etiqueta } from '../components/styled';
import CardMessage from '../components/cardMessage';
import Header from '../layout/header'

import dataRooms from '../JSON/rooms.json';
import photo from '../resources/Imagenes/room01.jpg'
import user from '../resources/Imagenes/user.jpeg';

const Main = styled.main`
  padding-left: 18%;
  transition: padding 2s;
`;

const Table = styled.section`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 4px #00000005;
  border-radius: ${props => props.borderRadius ? props.borderRadius : '0'};
  border-bottom: 2px solid #f5f5f5;
  display: grid;
  margin: 0 50px;
  padding: 20px 30px;
  grid-row-gap: 40px;
`;

const Row = styled.div`
  width: ${props => props.width ? props.width : 'auto'}; 
  border: ${props => props.border ? props.border : 'none'};
  grid-row: ${props => props.row ? props.row : 'none'};
  grid-column: ${props => props.column ? props.column : 'none'};
  display: ${props => props.display ? props.display : 'block'};
  align-items: ${props => props.alignItems ? props.alignItems : 'start'};
  margin: ${props => props.margin ? props.margin : '0'};
`;

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default function Rooms() {

  const [rooms, setRooms] = useState(dataRooms.rooms);

  if (localStorage.getItem("login") != "true") {
    return (
      <Navigate to="/" />
    )
  } else {
    return (
      <>
        <Header />
        <Main>
          <Table borderRadius='20px 20px 0 0'>
            <Row row='1' column='1' width='265px'>Room</Row>
            <Row row='1' column='2' width='90px'>Room Type</Row>
            <Row row='1' column='3' width='250px'>Amenities</Row>
            <Row row='1' column='4' width='90px'>Price</Row>
            <Row row='1' column='5' width='90px'>Offer Price</Row>
            <Row row='1' column='6' width='125px'>Status</Row>
          </Table>

          <DragDropContext onDragEnd={(result) => {
            const { source, destination } = result;
            if (!destination) {
              return;
            }
            if (
              source.index === destination.index &&
              source.droppableId === destination.droppableId
            ) {
              return;
            }

            setRooms((prevRooms) =>
              reorder(prevRooms, source.index, destination.index)
            );
          }}>
            <Droppable droppableId="rooms">
              {(droppableProvided) => (
                <section borderRadius='0 0 20px 20px' {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
                  {rooms.map((room, index) => (
                    <Draggable key={room.idHabitacion} draggableId={room.idHabitacion} index={index}>
                      {(draggableProvided) => (
                        <Table borderRadius='0' {...draggableProvided.draggableProps} ref={draggableProvided.innerRef} {...draggableProvided.dragHandleProps}>
                          <Row row='1' column='1' display='flex' alignItems='center' width='265px'>
                            <Photo src={photo} width='150px' margin='0 28px 0 0' height='77px' />
                            <div>
                              <SubTitle size='14px' lineHeight='27px' margin='0 0 12px 0'>{room.idHabitacion}</SubTitle>
                              <Title weight='normal' size='16px' lineHeight='25px' color='#393939'>{room.numeroHabitacion}</Title>
                            </div>
                          </Row>
                          <Row row='1' column='2' margin='46px 0 0 0' width='90px'>
                            <Title weight='normal' size='16px' lineHeight='25px' color='#393939'>{room.roomType}</Title>
                          </Row>
                          <Row row='1' column='3' width='249px' margin='auto 0 0 0' width='250px'>
                            <Title weight='normal' size='16px' lineHeight='25px' color='#393939'>{room.amenities}</Title>
                          </Row>
                          <Row row='1' column='4' margin='46px 0 0 0' display='flex' alignItems='center' width='90px'>
                            <Title weight='bolder' size='16px' lineHeight='25px' color='#393939' width='fit-content'>${room.price}</Title>
                            <SubTitle weight='normal' size='14px' lineHeight='21px' color='#799283' margin='0 0 0 8px'>/night</SubTitle>
                          </Row>
                          <Row row='1' column='5' margin='46px 0 0 0' display='flex' alignItems='center' width='90px'>
                            <Title weight='bolder' size='16px' lineHeight='25px' color='#393939' width='fit-content'>${room.offerPrice}</Title>
                            <SubTitle weight='normal' size='14px' lineHeight='21px' color='#799283' margin='0 0 0 8px'>/night</SubTitle>
                          </Row>
                          <Row row='1' column='6' margin='46px 0 0 0' width='125px'>
                            <Etiqueta padding='13px 0 13px 0' background={room.status}>
                              <Title weight='normal' size='16px' lineHeight='25px' color='#FFFFFF' width='fit-content' margin='auto'>{room.status}</Title>
                            </Etiqueta>
                          </Row>
                        </Table>
                      )}
                    </Draggable>
                  ))}
                </section>
              )}
            </Droppable>
          </DragDropContext>
        </Main>
      </>
    )
  }
}
