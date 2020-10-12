import React, { useState } from 'react';
import { Container,Content, Image } from './styles';
import DriverImage from '../../assets/driver.jpg'
import Input from '../../Component/Input';
import { Button, Icon, IconButton } from 'rsuite';
import api from '../../services/api';
import { Alert } from 'rsuite';
import { useHistory } from 'react-router-dom';


function Driver() {

  const {goBack, push} = useHistory()

  /**
   * States
  */
  const [name,setName] = useState('')
  const [destiny,setDestiny] = useState('')
  const [date,setDate] = useState('')

  const handleConfirm = async ()=>{
    if(!name || !destiny|| ! date) {
      Alert.error("Por favor, preencha todas informações!")
      return
    }
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
      push('/Travels')
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
        <div style={{position:'absolute', top:20, left:20}}>
          <IconButton  
            onClick={()=>goBack()}
            icon={<Icon icon='chevron-left'/>
          }/>
        </div>
        <div style={{position:'absolute', bottom:20, right:20}}>
          <span>Já tem cadastro? </span>
          <IconButton  onClick={()=>push('/Travels')} circle color='orange' 
            icon={<Icon icon='chevron-right'/>
          }/>
        </div>
      </Content>
      <Image src={DriverImage} alt='Driver'/>
    </Container>
  )
}

export default Driver;

