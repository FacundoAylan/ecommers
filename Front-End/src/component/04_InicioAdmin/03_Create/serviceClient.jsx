import React, { useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Flex, 
  Text, 
  Button, 
  Box, 
  Input, 
  Alert, 
  AlertIcon, 
  AlertTitle, 
  AlertDescription, 
  CloseButton, 
  Center,
  Textarea
} from "@chakra-ui/react";
import axios from 'axios';

const Createservice = ({uid}) => {

  const [service, setService] = useState({
    "uid": uid,
    "title": "",
    "image": "",
    "money":"",
    "contect": ""
  });

  const [alert, setAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
      setService({
        ...service,
        [name]: value,
      })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const urlLocal = 'http://127.0.0.1:8000';
    const urlDeploy = 'https://serverlavadero.vercel.app';
    try{
      const response = await axios.post(`${urlDeploy}/Createservice`,service)
    } catch {
      setAlert(true)
    }
  }
  const onClose = () => {
    setAlert(!alert)
  }

  return (
    <Flex
      width='100%'
      height='100vh'
      paddingTop={{ base: '2%', lg: '6%' }}
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      backgroundColor='#0c2a43'
      position='relative'
      paddingBottom='2%'
    >
      <Text
        color='white'
        fontWeight='bold'
        fontSize={{ base: '2rem', lg: '3rem' }}
        letterSpacing='4px'
        textTransform='uppercase'
      >
        Crear Servicios
      </Text>
      <Flex
        width={{ base: '80%', lg: '50%' }}
        flexDirection='row'
        justifyContent='star'
      >
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Box fontWeight='bold' color='white' textTransform='uppercase'>
          <Box
            fontWeight='bold'
            color='white'
            textTransform='uppercase'
            marginTop={{ base: '10px', lg: '20px' }}
          >
            <Text>Nombre</Text>
            <Input name='title' value={service.title} onChange={handleChange} />
          </Box>
          <Box
            fontWeight='bold'
            color='white'
            textTransform='uppercase'
            marginTop={{ base: '10px', lg: '20px' }}
          >
            <Text>url Imagen</Text>
            <Input name='image' value={service.image} onChange={handleChange} />
          </Box>

          <Box
            fontWeight='bold'
            color='white'
            textTransform='uppercase'
            marginTop={{ base: '10px', lg: '20px' }}
          >
            <Text>Precio</Text>
            <Input name='money' value={service.money} onChange={handleChange} />
          </Box>

          <Box
            fontWeight='bold'
            color='white'
            textTransform='uppercase'
            marginTop={{ base: '10px', lg: '20px' }}
          >
            <Text>Descripcion</Text>
            <Textarea name='contect' value={service.contect} onChange={handleChange} />
          </Box>

          <Center
            width='100%'
            marginTop={4}
          >
            <Button
              backgroundColor='#0dcaf0'
              border='2px solid white'
              padding='10px 20px'
              border-radius='8px'
              color='white'
              fontWeight='bold'
              textTransform='uppercase'
              fontSize={{ lg: '1rem' }}
              height={{ lg: '50px' }}
              _hover='none'
              onClick={handleSubmit}
            >
              Crear servicio
            </Button>
          </Center>
          </Box>
        </form>
      </Flex>
      {alert ?
        <Alert
          status='error'
          variant='subtle'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          width={{ base: '80%', lg: '60%' }}
          height='60%'
          borderRadius='12px'
          position='absolute'
          zIndex={10}
        >
          <CloseButton
            position='absolute'
            right={1}
            top={1}
            onClick={onClose}
            color='red'
            fontSize='15px'
          />
          <AlertIcon boxSize='40px' mr={0} />
          <AlertTitle mt={4} mb={1} fontSize='lg'>
            Usuario o contraseña incorrectas
          </AlertTitle>
          <AlertDescription maxWidth='sm'>
            Por favor verifique sus datos e intentelo de nuevo.
          </AlertDescription>
        </Alert> : ''
      }
    </Flex>
  )
}

export default Createservice;