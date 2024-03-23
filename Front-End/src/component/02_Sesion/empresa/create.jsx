import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
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

const CreateUser = () => {

  const [user, setUser] = useState({
    'email': '',
    'password': '',
    'name':'',
    'phone':''
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
    const urlLocal = 'http://127.0.0.1:8000';
    const urlDeploy = 'https://serverlavadero.vercel.app';
    try{
      const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      const { email, password } = user;
  
      if (emailRegex.test(email) && password.length >= 6) {
        const response = await axios.post(`${urlDeploy}/singup`,user)
        navigate("/Session");
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
      height='auto'
      paddingTop={{ base: '2%', lg: '6%' }}
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      backgroundColor='#0c2a43'
      border='2px solid #fff'
      boxShadow='inset 0 0 20px 2px #45d6f7'
      position='relative'
      paddingBottom='2%'
    >
      <Link to='/' style={{ position: 'absolute', top: '4px', left: '4px', zIndex: '10' }}><IoIosArrowBack size={38} color='white' /></Link>
      <Text
        color='white'
        fontWeight='bold'
        fontSize={{ base: '2rem', lg: '3rem' }}
        letterSpacing='4px'
        textTransform='uppercase'
      >
        Iniciar Sesion
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
            <Text>Nombre de la empresa</Text>
            <Input name='name' value={user.name} onChange={handleChange} />
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
            <Text>Contraseña</Text>
            <Input type='password' name='password' value={user.password} onChange={handleChange} />
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

export default CreateUser;