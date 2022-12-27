import { Title, SubTitle, Input, Button } from '../components/styled';
import { useState } from 'react';
import styled from 'styled-components';

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

    let show = props.show.show;

    const [galery, setGalery] = useState([]);

    function handleChangePhotos(element) {
        console.log(element);
        setGalery(element.target.value);
    }

    return (
        <Modal display={show}>
            <div style={{ width: '50%', margin: '50px auto' }}>
                <Close onClick={show = false}>X</Close>
                <Title textAlign='start'>New Room</Title>
                <Input type='file' accept="image/gif, image/jpeg, image/png" multiple="multiple" onChange={(e) => {handleChangePhotos(e)}}></Input>
                <Button fontSize='12px' width='150px'>Single Bed</Button>
                <Button fontSize='12px' width='150px'>Double Bed</Button>
                <Button fontSize='12px' width='150px'>Double Superior</Button>
                <Button fontSize='12px' width='150px'>Suite</Button>
                <Input placeholder='Room Number'></Input>
                <Input placeholder='Description'></Input>
                <Input type='number' placeholder='Offer'></Input>
                <Input type='number' placeholder='Price'></Input>
                <Input type='text' placeholder='Discaunt'></Input>
                <SubTitle>Politica de cancelación</SubTitle>
                <Input></Input>
            </div>
        </Modal>
    )

}