import { Title, SubTitle, Input, Button } from '../components/styled';
import React, { useState } from 'react';
import styled from 'styled-components';

import { isModalActive } from '../features/rooms/rooms';

const Modal = styled.div`
display: ${props => props.display ? 'block' : 'none'};
position: fixed;
width: 100%;
height: 100%;
left: 0;
top: 0;
background: rgba(255, 255, 255, 0.2);
backdrop-filter: blur(8px);
`;

const Close = styled.span`
font-size: 35px;
padding: 0px 15px;
color: white;
font-weight: 900;
background: #E23428;
border-radius: 10px;
cursor: pointer;
position: relative;
right: -30%;
`;

export default function NewRoom(props) {

    // const [modal, setModal] = useState(props.show);
    // console.log(modal);
    const { modal, setModal } = React.useContext(isModalActive);

    const [galery, setGalery] = useState([]);
    const [typeRoom, setTypeRoom] = useState('Single Bed');

    function handleChangePhotos(element) {
        console.log(element);
        setGalery(element.target.value);
    }

    return (
        <Modal display={modal}>
            <div style={{ width: '50%', margin: '50px auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', }}>
                <Close onClick={() => {setModal(false)}}>X</Close>
                <Title textAlign='start'>New Room</Title>
                <Input width='40%' type='file' accept="image/gif, image/jpeg, image/png" multiple="multiple" onChange={(e) => {handleChangePhotos(e)}}></Input>
                <div>
                    <Button fontSize='12px' width='150px' margin='0 10px 28px 0' background={typeRoom === 'Single Bed' ? '#135846' : 'white'} color={typeRoom === 'Single Bed' ? 'white' : '#135846'} onClick={() => {setTypeRoom('Single Bed')}}>Single Bed</Button>
                    <Button fontSize='12px' width='150px' margin='0 10px 28px 0' background={typeRoom === 'Double Bed' ? '#135846' : 'white'} color={typeRoom === 'Double Bed' ? 'white' : '#135846'} onClick={() => {setTypeRoom('Double Bed')}}>Double Bed</Button>
                    <Button fontSize='12px' width='150px' margin='0 10px 28px 0' background={typeRoom === 'Double Superior' ? '#135846' : 'white'} color={typeRoom === 'Double Superior' ? 'white' : '#135846'} onClick={() => {setTypeRoom('Double Superior')}}>Double Superior</Button>
                    <Button fontSize='12px' width='150px' background={typeRoom === 'Suite' ? '#135846' : 'white'} color={typeRoom === 'Suite' ? 'white' : '#135846'} onClick={() => {setTypeRoom('Suite')}}>Suite</Button>
                </div>
                <Input width='40%' placeholder='Room Number'></Input>
                <Input width='40%' placeholder='Description'></Input>
                <Input width='40%' type='number' placeholder='Offer'></Input>
                <Input width='40%' type='number' placeholder='Price'></Input>
                <Input width='40%' type='text' placeholder='Discaunt'></Input>
                <SubTitle width='40%'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minima, debitis praesentium deleniti ea suscipit tempora ipsam quae nemo provident qui saepe quam quod perspiciatis aut facere quos! Nesciunt, voluptates.</SubTitle>
                <Button>Save</Button>
            </div>
        </Modal>
    )

}