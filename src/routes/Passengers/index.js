import React, { useState } from 'react';

import PassengersImage from '../../assets/Passengers.jpg'
import Input from '../../Component/Input';
import { Alert, Button, Icon, IconButton } from 'rsuite';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import { Container,Content, Image } from './styles';

function Passengers() {

  const {goBack} = useHistory()
  
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
       type:"Passengers"
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
       <h1>Passageiro</h1>
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
      
     </Content>
     <Image src={PassengersImage} alt='Passengers'/>
   </Container>
 )
}

export default Passengers;