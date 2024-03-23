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
  Center
} from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import axios from 'axios';

const Createclient = ({uid}) => {

  const [user, setUser] = useState({
    "uid": uid,
    "name": "",
    "last_name": "",
    "email": "",
    "phone": ""
  });

  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name == 'phone'){
      setUser({
        ...user,
        [name]: parseInt(value),
      })
    }else{
      setUser({
        ...user,
        [name]: value,
      })
    }

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      const email = user.email;
  
      if (emailRegex.test(email)) {
        const response = await axios.post('http://127.0.0.1:8000/singupuser',user)
      }else {
        setAlert(true)
      }
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
        Crear usuario
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
            <Input name='name' value={user.name} onChange={handleChange} />
          </Box>
          <Box
            fontWeight='bold'
            color='white'
            textTransform='uppercase'
            marginTop={{ base: '10px', lg: '20px' }}
          >
            <Text>Apellido</Text>
            <Input name='last_name' value={user.last_name} onChange={handleChange} />
          </Box>

          <Box
            fontWeight='bold'
            color='white'
            textTransform='uppercase'
            marginTop={{ base: '10px', lg: '20px' }}
          >
            <Text>Correo</Text>
            <Input name='email' value={user.email} onChange={handleChange} />
          </Box>

          <Box
            fontWeight='bold'
            color='white'
            textTransform='uppercase'
            marginTop={{ base: '10px', lg: '20px' }}
          >
            <Text>Telefono</Text>
            <Input name='phone' value={user.phone} onChange={handleChange} />
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
              Crear usuario
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

export default Createclient;