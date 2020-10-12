import React, { useState } from 'react';
import { Container,Content, Image } from './styles';
import DriverImage from '../../assets/driver.jpg'
import Input from '../../Component/Input';
import { Button } from 'rsuite';
import api from '../../services/api';
import { Alert } from 'rsuite';
function Driver() {

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
        <h1>Motorista</h1>
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
      <Image src={DriverImage} alt='Driver'/>
    </Container>
  )
}

export default Driver;

