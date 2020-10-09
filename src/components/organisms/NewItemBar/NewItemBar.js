import React from 'react'
import  styled  from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
height: 100vh;
width:500px;
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;

`

const newItemBar = () => {

<StyledWrapper>
    <Heading>Add new Note</Heading>
    <Paragraph>A note requires title and description</Paragraph>
    <Input placeholder="Title"></Input>
    <Input placeholder="Description" ></Input>
    <ButtonIcon>Add note</ButtonIcon>





</StyledWrapper>



}