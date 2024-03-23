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
  InputGroup,
  InputRightElement,
  IconButton
} from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons';
import axios from 'axios';

const Session1 = () => {

  const [user, setUser] = useState({
    'email': '',
    'password': ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    })

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const urlLocal = 'http://127.0.0.1:8000';
    const urlDeploy = 'https://serverlavadero.vercel.app';
    try{
      const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      const { email, password } = user;
  
      if (emailRegex.test(email) && password.length >= 6) {
        const response = await axios.post(`${urlDeploy}/login`,user)
        navigate("/admin",{ state: {user: response.data} });
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
      height='100%'
      paddingTop={{ base: '2%', lg: '6%' }}
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      backgroundColor='#0c2a43'
      border='2px solid #fff'
      boxShadow='inset 0 0 20px 2px #45d6f7'
      position='relative'
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
            <InputGroup>
              <Input 
                type={showPassword ? 'text' : 'password'}
                name='password' 
                value={user.password} 
                onChange={handleChange} 
              />
              <InputRightElement>
                <IconButton
                  color='white'
                  _hover='none'
                  variant="ghost"
                  icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  onClick={() => setShowPassword(!showPassword)}
                />
              </InputRightElement>
            </InputGroup>
            <Link to='/reset'>
              <Text
                fontSize={{ base: '0.8rem', lg: '1rem' }}
                textTransform='none'
                fontWeight='500'
                marginTop={{ base: '5px', lg: '10px' }}
              >
                Recuperar Contarseña
              </Text>
            </Link>
          </Box>
          <Flex
            width='100%'
            marginTop={4}
            flexDirection={{ base: 'column', lg: 'row' }}
            gap={5}
            justifyContent='center'
            alignItems='center'
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
              type="submit"
            >
              Ingresar
            </Button>
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
              onClick={()=>navigate('/createclient')}
            >
              Crear usuario
            </Button>
          </Flex>
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

export default Session1;