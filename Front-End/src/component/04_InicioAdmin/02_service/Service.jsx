import { Box, Button, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Service= ({uid})=>{

  const[services, setServices]=useState();

  useEffect(()=>{
    if(uid){
      const serviceAxios = async()=>{
        try{
          const response = await axios.post('http://127.0.0.1:8000/Getservice', { uid });
          setServices(response.data)
        }catch{
          console.error("Error")
        }
      };
      serviceAxios()
    }
  },[uid])

  return(
    <Box width='100%' height='100vh'>
      <Text color='white' fontSize='36px' fontWeight='bold' textAlign='center'>Servicos</Text>
      <Box width='100%' height='80%' backgroundColor='#0d933c'>
        {
          services?.map((service)=>{
            return(
              <Box width='100%' height='30%' backgroundColor='red' color='black' marginTop='2%' overflow='hidden'>
                <Text>{service.title}</Text>
                <Text>{service.contect}</Text>
                <Text>{service.image}</Text>
                <Text>{service.money}</Text>
              </Box>
            )
          })
        }
      </Box>
      <Button marginLeft='45%' marginTop='1%'>Crear nuevos servicios</Button>
    </Box>
  )
}

export default Service;