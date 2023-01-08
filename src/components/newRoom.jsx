// import { Title, SubTitle, Input, Button, Etiqueta, TextArea } from '../components/styled';
// import React, { useState } from 'react';
// import styled from 'styled-components';

// import { isModalActive } from '../features/rooms/rooms';

// const Modal = styled.div`
// display: ${props => props.display ? 'block' : 'none'};
// position: fixed;
// width: 100%;
// height: 100%;
// left: 0;
// top: 0;
// background: rgba(255, 255, 255, 0.2);
// backdrop-filter: blur(8px);
// `;

// const Close = styled.span`
// font-size: 35px;
// padding: 0px 15px;
// color: white;
// font-weight: 900;
// background: #E23428;
// border-radius: 10px;
// cursor: pointer;
// position: absolute;
// right: 15%;
// `;

// export default function NewRoom(props) {
//     const roomAmenities = ["Cocktail", "Pets", "AC", "Toiletries", "Double Bed", "LED TV", "Bathup", "Free parking", "Wifi", "Single Bed", "Tissue box", "Coffee Set", "Free breakfast", "Pool", "Jacuzzi", "Shower", "Gym", "Spa"];

//     // const [modal, setModal] = useState(props.show);
//     // console.log(modal);
//     const { modal, setModal } = React.useContext(isModalActive);

//     const [galery, setGalery] = useState([]);
//     const [typeRoom, setTypeRoom] = useState('Single Bed');
//     const [discount, setDiscount] = useState(false);

    // const [amenities, setAmenities] = useState(roomAmenities);
    // const [amenitiesSelected, setAmenitiesSelected] = useState([]);

//     function handleChangePhotos(element) {
//         console.log(element);
//         setGalery(element.target.value);
//     }

//     return (
//         <Modal display={modal}>
//             <div style={{ width: '70%', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding:'20px' }}>
//                 <Close onClick={() => {setModal(false); setAmenities(roomAmenities); setAmenitiesSelected([])}}>X</Close>
//                 <Title textAlign='start'>New Room</Title>
//                 <Input width='40%' type='file' accept="image/gif, image/jpeg, image/png" multiple="multiple" onChange={(e) => {handleChangePhotos(e)}}></Input>
//                 <div>
//                     <Button fontSize='12px' width='150px' margin='0 10px 20px 0' background={typeRoom === 'Single Bed' ? '#135846' : 'white'} color={typeRoom === 'Single Bed' ? 'white' : '#135846'} onClick={() => {setTypeRoom('Single Bed')}}>Single Bed</Button>
//                     <Button fontSize='12px' width='150px' margin='0 10px 20px 0' background={typeRoom === 'Double Bed' ? '#135846' : 'white'} color={typeRoom === 'Double Bed' ? 'white' : '#135846'} onClick={() => {setTypeRoom('Double Bed')}}>Double Bed</Button>
//                     <Button fontSize='12px' width='150px' margin='0 10px 20px 0' background={typeRoom === 'Double Superior' ? '#135846' : 'white'} color={typeRoom === 'Double Superior' ? 'white' : '#135846'} onClick={() => {setTypeRoom('Double Superior')}}>Double Superior</Button>
//                     <Button fontSize='12px' width='150px' background={typeRoom === 'Suite' ? '#135846' : 'white'} color={typeRoom === 'Suite' ? 'white' : '#135846'} onClick={() => {setTypeRoom('Suite')}}>Suite</Button>
//                 </div>
//                 <Input width='30%' margin= '0 70% 20px 0' height='fit-content' placeholder='Room Number'></Input>
//                 <select style={{height: 'fit-content',}} name="Amenities" id="" multiple={true} onClick={(e) => {setAmenities(amenities.filter((amenitie) => amenitie !== e.target.value || e.target.value === ''));  if(e.target.value !== ''){amenitiesSelected.push(e.target.value)}}}>
//                     <option value=''>Select amenities</option>
//                     {amenities.map(amenitie => (
//                         <option value={amenitie}>{amenitie}</option>
//                     ))}
//                 </select>
//                 <div style={{width: '75%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', cursor: 'pointer'}}>
//                     {amenitiesSelected.map(amenitieEtiqueta => (
//                         <Etiqueta width='fit-content' margin='5px' background='#E8F2EF' padding='10px' height='fit-content' onClick={(e) => {setAmenitiesSelected(amenitiesSelected.filter((amenitie) => amenitie !== amenitieEtiqueta)); amenities.push(amenitieEtiqueta)}}><Title size='14px' lineHeight='21px' color='#135846'>{amenitieEtiqueta}</Title></Etiqueta>
//                     ))}
//                 </div>
//                 <div style={{ width: '10%', display: 'flex', alignItems: 'center', }}>
//                     <Input margin= '0 10px 0 10px' type='radio' id='offerSi' name='offerInput' value='Si' onInput={() => {setDiscount(true)}}></Input>
//                     <label>Si</label>
//                 </div>
//                 <div style={{ width: '10%', display: 'flex', alignItems: 'center', }}>
//                     <Input margin= '0 10px 0 10px' type='radio' id='offerNo' name='offerInput' value='No' checked onInput={() => {setDiscount(false)}}></Input>
//                     <label>No</label>
//                 </div>
//                 <Input width='30%' type='number' margin='20px 0 20px 0' placeholder='Price'></Input>
//                 <Input width='30%' type='text' margin='20px 0 20px 0' placeholder='Discount 20%' disabled={!discount ? true : false} opacity={!discount ? '0.6' : '1'}></Input>
//                 <TextArea rows={5} width='40%' placeholder='Description'></TextArea>
//                 <SubTitle width='30%' size='12px' lineHeight='21px' textAlign='start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minima, debitis praesentium deleniti ea suscipit tempora ipsam quae nemo provident qui saepe quam quod perspiciatis aut facere quos! Nesciunt, voluptates.</SubTitle>
//                 <Button height='fit-content'>Save</Button>
//             </div>
//         </Modal>
//     )

// }


import React, { useState } from 'react';

import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Title, SubTitle, Main, Etiqueta, PageCardDetail, Input, Button, TextArea } from './styled';
import roomPhoto from '../resources/Imagenes/room01.jpg';



export default function NewRoom() {

    const roomAmenities = ["Cocktail", "Pets", "AC", "Toiletries", "Double Bed", "LED TV", "Bathup", "Free parking", "Wifi", "Single Bed", "Tissue box", "Coffee Set", "Free breakfast", "Pool", "Jacuzzi", "Shower", "Gym", "Spa"];

    const [typeRoom, setTypeRoom] = useState('Single Bed');
    const [discount, setDiscount] = useState(false);

    const [amenities, setAmenities] = useState(roomAmenities);
    const [amenitiesSelected, setAmenitiesSelected] = useState([]);

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
                        <Input size='16px' lineHeight='25px' margin='0 30px 30px 0' placeholder='Deluxe Z - 002424'></Input>
                    </div>
                    <div style={{ width: '30%', margin: '0 10px 0 0' }}>
                        <SubTitle size='14px' lineHeight='21px' margin='0 10px 15px 0'>Price</SubTitle>
                        <Input size='16px' width='-webkit-fill-available' lineHeight='25px' placeholder='123€'></Input>
                    </div>
                    <div>
                        <SubTitle size='14px' lineHeight='21px' margin='0 10px 15px 0'>Has offer?</SubTitle>
                        <div style={{ display: 'flex', alignItems: 'center', }}>
                            <label>Si</label>
                            <Input margin= '0 10px 0 10px' type='radio' id='offerSi' name='offerInput' value='Si' onInput={() => {setDiscount(true)}}></Input>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', }}>
                            <label>No</label>
                            <Input margin= '0 10px 0 10px' type='radio' id='offerNo' name='offerInput' value='No' checked onInput={() => {setDiscount(false)}}></Input>
                        </div>
                    </div>
                    <div style={{ width: '30%'}}>
                        <SubTitle size='14px' lineHeight='21px' margin='0 0 15px 0'>Offer</SubTitle>
                        <Input size='16px' lineHeight='25px' placeholder='20%' disabled={!discount ? true : false} opacity={!discount ? '0.6' : '1'}></Input>
                    </div>
                    <TextArea rows={4} placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit ...'></TextArea>
                    <select style={{height: 'fit-content',}} name="Amenities" id="" multiple={true} onClick={(e) => {setAmenities(amenities.filter((amenitie) => amenitie !== e.target.value || e.target.value === ''));  if(e.target.value !== ''){amenitiesSelected.push(e.target.value)}}}>
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
            </Swiper>
        </Main>
    )

}