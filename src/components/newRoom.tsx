import React, { useState, useEffect, ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { createRoom } from '../features/rooms/roomsSlice';

import { Title, SubTitle, Main, Etiqueta, PageCardDetail, Input, Button, TextArea } from './styled';
import roomPhoto from '../resources/Imagenes/room01.jpg';



export default function NewRoom() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    //const roomsSlice = useSelector((state) => state.roomsReducer);
    const [room, setRoom] = useState(null);

    const roomAmenities = ["Cocktail", "Pets", "AC", "Toiletries", "Double Bed", "LED TV", "Bathup", "Free parking", "Wifi", "Single Bed", "Tissue box", "Coffee Set", "Free breakfast", "Pool", "Jacuzzi", "Shower", "Gym", "Spa"];

    const [roomNumber, setRoomNumber] = useState();
    const [typeRoom, setTypeRoom] = useState('Single Bed');
    const [discount, setDiscount] = useState(false);
    const [price, setPrice] = useState(0);
    const [offer, setOffer] = useState(0);
    const [description, setDescription] = useState("");

    const [amenities, setAmenities] = useState(roomAmenities);
    const [amenitiesSelected, setAmenitiesSelected] = useState([]);

    useEffect(() => {
        setRoom({
            "idHabitacion": "#00000007",
            "foto": [
            ],
            "numeroHabitacion": roomNumber,
            "roomType": typeRoom,
            "amenities": amenitiesSelected,
            "price": price,
            "offerPercent": offer,
            "status": "Available"
        });
    }, [roomNumber, amenitiesSelected.join(), typeRoom, discount, price, offer, description]);

    const handleNewRoom = () => {
        if (room !== null) {
            dispatch(createRoom(room));
        }
    }

    return (
        <Main style={{ display: 'flex', marginRight: '50px', }}>
            <PageCardDetail>
                <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap'}}>
                    <SubTitle width='100%' size='14px' lineHeight='21px' margin='0 0 15px 0'>Type Room</SubTitle>
                    <div>
                        <Button fontSize='12px' width='150px' margin='0 10px 15px 0' background={typeRoom === 'Single Bed' ? '#135846' : 'white'} color={typeRoom === 'Single Bed' ? 'white' : '#135846'} onClick={() => {setTypeRoom('Single Bed')}}>Single Bed</Button>
                        <Button fontSize='12px' width='150px' margin='0 10px 15px 0' background={typeRoom === 'Double Bed' ? '#135846' : 'white'} color={typeRoom === 'Double Bed' ? 'white' : '#135846'} onClick={() => {setTypeRoom('Double Bed')}}>Double Bed</Button>
                        <Button fontSize='12px' width='150px' margin='0 10px 15px 0' background={typeRoom === 'Double Superior' ? '#135846' : 'white'} color={typeRoom === 'Double Superior' ? 'white' : '#135846'} onClick={() => {setTypeRoom('Double Superior')}}>Double Superior</Button>
                        <Button fontSize='12px' width='150px' margin='0 10px 30px 0'background={typeRoom === 'Suite' ? '#135846' : 'white'} color={typeRoom === 'Suite' ? 'white' : '#135846'} onClick={() => {setTypeRoom('Suite')}}>Suite</Button>
                    </div>
                    <div style={{ width: '100%'}}>
                        <SubTitle size='14px' lineHeight='21px' margin='0 0 15px 0'>Room Number</SubTitle>
                        <Input size='16px' lineHeight='25px' margin='0 30px 30px 0' placeholder='Deluxe Z - 002424' onChange={(e) => {setRoomNumber(e.target.value)}}></Input>
                    </div>
                    <div style={{ width: '30%', margin: '0 10px 0 0' }}>
                        <SubTitle size='14px' lineHeight='21px' margin='0 10px 15px 0'>Price</SubTitle>
                        <Input size='16px' width='-webkit-fill-available' lineHeight='25px' placeholder='123€' onChange={(e) => {setPrice(e.target.value)}}></Input>
                    </div>
                    <div>
                        <SubTitle size='14px' lineHeight='21px' margin='0 10px 15px 0'>Has offer?</SubTitle>
                        <div style={{ display: 'flex', alignItems: 'center', }}>
                            <label>Si</label>
                            <Input margin= '0 10px 0 10px' type='radio' id='offerSi' name='offerInput' value='Si' onClick={() => {setDiscount(true)}}></Input>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', }}>
                            <label>No</label>
                            <Input margin= '0 10px 0 10px' type='radio' id='offerNo' name='offerInput' value='No' onChange={() => {setDiscount(false)}}></Input>
                        </div>
                    </div>
                    <div style={{ width: '30%'}}>
                        <SubTitle size='14px' lineHeight='21px' margin='0 0 15px 0'>Offer</SubTitle>
                        <Input size='16px' lineHeight='25px' placeholder='20%' disabled={!discount ? true : false} opacity={!discount ? '0.6' : '1'} onChange={(e) => {setOffer(e.target.value)}}></Input>
                    </div>
                    <TextArea rows={4} placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit ...' onChange={(e) => {setDescription(e.target.value)}}></TextArea>
                    <select style={{height: 'fit-content',}} name="Amenities" id="" multiple={true} onClick={(e: any) => {setAmenities(amenities.filter((amenitie) => amenitie !== e.currentTarget.value || e.currentTarget.value === ''));  if(e.currentTarget.value !== ''){amenitiesSelected.push(e.currentTarget.value)}}}>
                        <option value=''>Select amenities</option>
                        {amenities.map(amenitie => (
                            <option value={amenitie}>{amenitie}</option>
                        ))}
                    </select>
                    <div style={{width: '75%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', cursor: 'pointer'}}>
                        {amenitiesSelected.map(amenitieEtiqueta => (
                            <Etiqueta width='fit-content' margin='5px' background='#E8F2EF' padding='10px' height='fit-content' onClick={(e) => {setAmenitiesSelected(amenitiesSelected.filter((amenitie) => amenitie !== amenitieEtiqueta)); amenities.push(amenitieEtiqueta)}}><Title size='14px' lineHeight='21px' color='#135846'>{amenitieEtiqueta}</Title></Etiqueta>
                        ))}
                    </div>
                    <Input width='40%' margin='28px 0 0 0' type='file' accept="image/gif, image/jpeg, image/png" multiple="multiple" ></Input>
                    <Button margin='28px 0 0 auto' background='#135846' color='white' onClick={() => {handleNewRoom()}}>New Room</Button>
                </div>
            </PageCardDetail>
            <Swiper
            style={{ width: '45%', margin: '0', borderRadius: '0 12px 12px 0', }}
            modules={[Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            onSlideChange={() => console.log('slide change')}
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
            </Swiper>
        </Main>
    )

}