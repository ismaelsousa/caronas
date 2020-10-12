import React, { useState } from 'react';

import { Container,Content, Image } from './styles';
import PassengersImage from '../../assets/Passengers.jpg'
import Input from '../../Component/Input';
import { Alert, Button } from 'rsuite';
import api from '../../services/api';

function Passengers() {
  
  /**
   * States
  */

 const [name,setName] = useState('')
 const [destiny,setDestiny] = useState('')
 const [date,setDate] = useState('')

 const handleConfirm = async ()=>{
   console.log({name, destiny, date})
   try {
     await api.post('/travels', {
       name, 
       destiny, 
       date,  
       verify:false,
       type:"Driver"
     })
     Alert.success("Dados salvos")
     setName('')
     setDestiny('')
     setDate('')
   } catch (error) {
     Alert.error("Problema ao salvar viagem")
   }
  
 }
  // eslint-disable-next-line 
 return (
   <Container>
     <Content>
       <h1>Carona</h1>
       <Input 
          type="text" 
          value={name} 
          onChange={e=>setName(e.target.value)} 
          placeholder='Nome'
        />
        <Input 
          type="text" 
          value={destiny} 
          onChange={e=>setDestiny(e.target.value)}  
          placeholder='Destino'
        />
        <Input 
          type="datetime-local"  
          value={date}  
          onChange={e=>setDate(e.target.value)} 
          placeholder='Nome'
        />
        <Button onClick={handleConfirm} color='green'>Confirmar</Button>
     </Content>
     <Image src={PassengersImage} alt='Passengers'/>
   </Container>
 )
}

export default Passengers;