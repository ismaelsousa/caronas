import React from 'react';
import { Container,Content, Image } from './styles';
import DriverImage from '../../assets/driver.jpg'
import Input from '../../Component/Input';

function Driver() {
  
   // eslint-disable-next-line 
  return (
    <Container>
      <Content>
        <h1>Motorista</h1>
        <Input type="text" placeholder='Nome'/>
        <Input type="text"  placeholder='Destino'/>
        <Input type="datetime-local"  placeholder='Nome'/>
      </Content>
      <Image src={DriverImage} alt='Driver'/>
    </Container>
  )
}

export default Driver;

