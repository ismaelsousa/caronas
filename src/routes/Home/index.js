import React from 'react';
import { Button } from 'rsuite';
import { Container,Content, Image } from './styles';
import Car from '../../assets/cars.jpg'
import { useHistory } from 'react-router-dom';
function Home() {

  const {push} = useHistory()
   // eslint-disable-next-line 
  return (
    <Container>
      <Image src={Car} alt='cars'/>
      <Content>
        <h1>Caronas</h1>
       <Button block size='lg' color="orange" appearance='default' onClick={()=>push('/Driver')} >Motorista</Button>
       <Button  block size='lg' color="green" appearance='default' onClick={()=>push('/Passengers')} >Passageiro</Button>
      </Content>
    </Container>
  )
}

export default Home;