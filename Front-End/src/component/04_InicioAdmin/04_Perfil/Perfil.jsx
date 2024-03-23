import { Avatar, Box, Center, Input, Text } from "@chakra-ui/react";
import React from "react";

const Perfil = ()=>{
  return(
    <Box width='100%' height='100%' color='white'>
      <Text color='white' fontSize='36px' fontWeight='bold' textAlign='center'> Perfil</Text>
      <Center>
        <Avatar boxSize={40}/>
      </Center>
      <Text>Nombre</Text>
      <Input placeholder='Juan'/>
      <Text>Correo</Text>
      <Input placeholder='Juan@gmail.com'/>
      <Text>Telefono</Text>
      <Input placeholder='1136747801'/>
    </Box>
  )
}

export default Perfil;