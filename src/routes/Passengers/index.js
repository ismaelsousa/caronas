import React from 'react';

import { Container,Content, Image } from './styles';
import PassengersImage from '../../assets/Passengers.jpg'
import Input from '../../Component/Input';

function Passengers() {
  // eslint-disable-next-line 
 return (
   <Container>
     <Content>
       <h1>Carona</h1>
       <Input type="text" placeholder='Nome'/>
       <Input type="text"  placeholder='Destino'/>
       <Input type="datetime-local"  placeholder='Nome'/>
     </Content>
     <Image src={PassengersImage} alt='Passengers'/>
   </Container>
 )
}

export default Passengers;