import React from "react";
import './index.scss';
import { Box, Flex, Text, Input, Textarea, Button, Center } from "@chakra-ui/react";

const Contact = () => {

  const handleSubmit = (event) => {
  };

  return (
    <Flex 
      width='100%' 
      height='100%' 
      paddingTop = {{base:'2%', lg:'6%'}} 
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <Text 
        color = 'white'
        fontWeight = 'bold'
        fontSize = {{base:'2rem', lg:'3rem'}}
        letterSpacing = '4px'
        textTransform= 'uppercase'
      >
        Contáctanos
      </Text>
      <Flex
        width={{base:'80%', lg:'50%'}}
        flexDirection='row'
        justifyContent='star'
      >
        <form onSubmit={handleSubmit} style={{width:'100%'}}>
          <Box fontWeight='bold' color='white' textTransform='uppercase'>
            <Text>Nombre</Text>
            <Input/>
          </Box>
          <Box fontWeight='bold' color='white' textTransform='uppercase'>
            <Text>Correo</Text>
            <Input/>
          </Box>
          <Box fontWeight='bold' color='white' textTransform='uppercase'>
            <Text>Telefono</Text>
            <Input/>
          </Box>
          <Box fontWeight='bold' color='white' textTransform='uppercase'>
            <Text>Asunto</Text>
            <Textarea/>
          </Box>
          <Center width='100%'marginTop={4}>
            <Button
              backgroundColor = '#0dcaf0'
              border = '2px solid white'
              padding = '10px 20px'
              border-radius = '8px'
              color = 'white'
              fontWeight = 'bold'
              textTransform = 'uppercase'
              fontSize={{lg:'1rem'}}
              height={{lg:'50px'}}
              _hover='none'
            >
              Enviar
            </Button>
          </Center>
        </form>
      </Flex>
    </Flex>
  )
}

export default Contact;