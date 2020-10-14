import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Header,  Content, Navbar, Nav,  Icon, List, Badge, Notification, ButtonToolbar, Button, Alert  } from 'rsuite';
import { Title, Table } from './styles';
import api from '../../services/api'
function Travels() {
  const {push} = useHistory()

  const [dataDriver, setDataDriver] = useState([])
  const [dataPassengers, setDataPassengers] = useState([])

 

  const fetchTravels = useCallback(async ()=>{
   const [driver, passengers] = await Promise.all([api.get('/travels?type=Driver'), api.get('/travels?type=Passengers&verify=false')])   
   
   setDataDriver(driver.data)
   setDataPassengers(passengers.data)

   if(passengers.data.length>0 && driver.data.length>0){
    for (let i = 0; i < driver.data.length; i++) {
      for (let j = 0; j < passengers.data.length; j++) {
        if(driver.data[i].date === passengers.data[j].date && driver.data[i].destiny === passengers.data[j].destiny){
          Notification.open({
            title: 'Carona',
            duration: 100000,
            description: (
              <div>
                <p style={{marginBottom:10}}>{passengers.data[j].name} quer uma carona para {passengers.data[j].destiny}</p>
                <ButtonToolbar>
                  <Button
                    onClick={() => {
                      updateItem({passenger: passengers.data[j], driver:driver.data[i]})
                      Notification.close();
                    }}
                  >
                    Aceitar
                  </Button>
                  <Button
                    onClick={() => {
                      Notification.close();
                    }}
                  >
                    Cancelar
                  </Button>
                </ButtonToolbar>
              </div>
            )
          });
          return
        }
      }
    }
  }
  })

  useEffect(()=>{
    fetchTravels()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const updateItem = async  ({driver,passenger })=>{
   // eslint-disable-next-line no-unused-expressions
   await api.put(`/Travels/${driver.id}`, {...driver, verify:true}),
   await api.put(`/Travels/${passenger.id}`, {...passenger, verify:true})
   fetchTravels()

   Alert.success(`Carona dada a ${passenger.name}`)
  }



  
  return (
    <Container >
     <Header>
     <Navbar  appearance="subtle">
         
          <Navbar.Body>
            <Nav onSelect={(e)=>{
                push('/Driver')
            }}>
              <Nav.Item icon={<Icon  icon="newspaper-o" />} eventKey='new'>Novo</Nav.Item>
            </Nav>
            <Nav pullRight onSelect={()=>push('/')}>
              <Nav.Item  eventKey='exit' style={{color:'blue'}} icon={<Icon icon="exit" />}>Sair</Nav.Item>
            </Nav>
          </Navbar.Body>
        </Navbar>
     </Header>
     <Content 
      style={{
        padding:20,
        display:'flex', 
        width:'100%',
        flexDirection:'column', 
        alignItems:'center', 
        justifyContent:'center'}}
      >
        <Title>Caronas</Title>
        <Table>
          <List bordered>
            {dataDriver.map((item, index)=>(
              <List.Item index={index} key={index} >
               {<Badge style={item.verify?{background:'green'}:{}} />} {item.name}, {item.destiny}, {new Date(item.date).toLocaleString()} 
              </List.Item>
            ))}
          </List>
        </Table>

       
       {dataPassengers.length>0 &&
        (
          <> 
          <Title>Pedidos</Title>
          <Table>
            <List bordered>
              {dataPassengers.map((item, index)=>(
                <List.Item index={index} key={index} >
                {<Badge style={item.verify ? {background:'green'} : {}} />} {item.name}, {item.destiny}, {new Date(item.date).toLocaleString()} 
                </List.Item>
              ))}
            </List>
          </Table>
          </>
        )
      }
      </Content>
    </Container>
  )
}

export default Travels;