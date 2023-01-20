import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from 'react';

import { Title, SubTitle, Photo, Etiqueta, Button, Table, Column, Main} from '../../components/styled';
import CardMessage from '../../components/cardMessage';
import NewRoom from '../../components/newRoom';
import Header from '../../layout/header';

import { getRooms, deleteRoom } from './roomsSlice';
import { Room } from '../../types';

import dataRooms from '../../JSON/rooms.json';
import photo from '../../resources/Imagenes/room01.jpg';
import { render } from 'react-dom';
import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';



const values = [
  { 
    name: "price", 
    order: "asc" 
  },
  { 
    name: "price", 
    order: "des" 
  },
  // { 
  //   name: "Available", 
  //   order: "state" 
  // },
  // { 
  //   name: "Booked", 
  //   order: "state" 
  // }
]

const ButtonOption = styled.button`
  font-weight: 500;
  font-size: 16px;
  width: auto;
  padding: 0;
  border: none;
  cursor: pointer;
  margin: 0;
  background: none;
  color: black;
  &:hover div {
    display: block;
  }
`;

const Options = styled.div`
  width: fit-content;
  display: none;
  position: absolute;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 30px #00000014;
  option {
    padding: 5px 15px;
  }
  option:hover {
    background: #fbfbfb;
  }
`;

export const isModalActive = React.createContext(null);

export default function Rooms() {

  let navigate = useNavigate();

  const dispatch = useAppDispatch();
  const roomsSlice = useAppSelector((state) => state.roomsReducer);
  const [roomList, setRoomList] = useState<Room[]>(roomsSlice.rooms);
  
  const [modal, setModal] = useState(false);
  
  
  
  useEffect(() => {
    if (roomsSlice.rooms.length <= 0) {
      dispatch(getRooms());
    }
    setRoomList(roomsSlice.rooms);
  }, [roomsSlice, dispatch]);
  

  const handleDeleteRoom = (idRoom:string) => {
    dispatch(deleteRoom(idRoom));
  }

  const handleEditeRoom = (idRoom:string) => {
    
  }

  const handleViewRoom = (e:any, idRoom:string) => {
    if (e.target.innerHTML !== "Eliminar") {
      navigate("/rooms/:" + idRoom);
    }
  }


  // let navigate = useNavigate();


  // const [reRender, setReRender] = useState({name:"", order:""});


  // useEffect(()=>{

  //   const value = reRender;
  //   const roomsOrder = roomsSlice;

  //   if (value.order === "des") {
      
  //   } else if (value.order === "asc") {

  //   } 
  // },[reRender])

  // function forceReRender(element) {
  //   setReRender(element.target.value);
  // }

  // function handleOrderBy() {
  //   const element = document.getElementById("order");
  //   const value = JSON.parse(element.value);
  //   const roomsOrder = rooms;
    

  //   if (value.order === "des") {
  //     roomsOrder.sort(function(a, b) {return a[value.name] - b[value.name]});
  //     setRooms(roomsOrder);

  //   } else if (value.order === "asc") {
  //     roomsOrder.sort(function(a, b) {return b[value.name] - a[value.name]});
  //     setRooms(roomsOrder);

  //   } 
  //   // else if (value.order === "state") {
  //   //   roomsOrder.sort(function(a, b) {return a[value.order] == value.name});
  //   //   setRooms(roomsOrder);

  //   // }
  // }

  return (
    <>
      <Main>
        <div style={{ margin: '0 50px 28px 50px', textAlign: 'end', }}>
          <Button color='#FFFFFF' background='#135846' padding='15px 59px' margin='0 20px 0 0' onClick={() => {navigate("/rooms/newroom")}}>+ New Room</Button>
          <Button>Number Room
            <svg style={{ marginLeft: '10px', }} xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
            </svg>
          </Button>
          <select id='order'>
            <option value={JSON.stringify(values[0])}>price 🠕</option>
            <option value={JSON.stringify(values[1])}>price 🠗</option>
          </select>
        </div>

        <Table borderRadius='20px 20px 0 0'>
          <Column row='1' column='1' width='265px'>Room</Column>
          <Column row='1' column='2' width='90px'>Room Type</Column>
          <Column row='1' column='3' width='250px'>Amenities</Column>
          <Column row='1' column='4' width='90px'>Price</Column>
          <Column row='1' column='5' width='90px'>Offer Price</Column>
          <Column row='1' column='6' width='125px'>Status</Column>
          <Column row='1' column='8' width='10px'></Column>
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

          //dispatch();
        }}>
          <Droppable droppableId="rooms">
            {(droppableProvided) => (
              <section style={{ borderRadius: '0 0 20px 20px'}} {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
                {roomList.map((room, index) => (
                  <Draggable key={room.idHabitacion} draggableId={room.idHabitacion} index={index}>
                    {(draggableProvided) => (
                      <Table borderRadius='0' {...draggableProvided.draggableProps} ref={draggableProvided.innerRef} {...draggableProvided.dragHandleProps} onClick={(e:any) => {handleViewRoom(e, room.idHabitacion)}}>
                        <Column row='1' column='1' display='flex' alignItems='center' width='265px'>
                          <Photo src={photo} width='150px' margin='0 28px 0 0' height='77px' />
                          <div>
                            <SubTitle size='14px' lineHeight='27px' margin='0 0 12px 0'>{room.idHabitacion}</SubTitle>
                            <Title weight='normal' size='16px' lineHeight='25px' color='#393939'>{room.numeroHabitacion}</Title>
                          </div>
                        </Column>
                        <Column row='1' column='2' margin='46px 0 0 0' width='90px'>
                          <Title weight='normal' size='16px' lineHeight='25px' color='#393939'>{room.roomType}</Title>
                        </Column>
                        <Column row='1' column='3' margin='auto 0 0 0' width='250px'>
                          <Title weight='normal' size='16px' lineHeight='25px' color='#393939'>{room.amenities}</Title>
                        </Column>
                        <Column row='1' column='4' margin='46px 0 0 0' display='flex' alignItems='center' width='90px'>
                          <Title weight='bolder' size='16px' lineHeight='25px' color='#393939' width='fit-content'>${room.price}</Title>
                          <SubTitle weight='normal' size='14px' lineHeight='21px' color='#799283' margin='0 0 0 8px'>/night</SubTitle>
                        </Column>
                        <Column row='1' column='5' margin='46px 0 0 0' display='flex' alignItems='center' width='90px'>
                          <Title weight='bolder' size='16px' lineHeight='25px' color='#393939' width='fit-content'>${room.offerPercent}</Title>
                          <SubTitle weight='normal' size='14px' lineHeight='21px' color='#799283' margin='0 0 0 8px'>/night</SubTitle>
                        </Column>
                        <Column row='1' column='6' margin='46px 0 0 0' width='125px'>
                          <Etiqueta padding='13px 0 13px 0' background={room.status}>
                            <Title weight='normal' size='16px' lineHeight='25px' color='#FFFFFF' width='fit-content' margin='auto'>{room.status}</Title>
                          </Etiqueta>
                        </Column>
                        <Column row='1' column='8' width='10px'>
                          <ButtonOption>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                            </svg>
                            <Options >
                              <option onClick={() => {handleDeleteRoom(room.idHabitacion)}} value="">Eliminar</option>
                              <option value="">Editar</option>
                            </Options>
                          </ButtonOption>
                        </Column>
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
