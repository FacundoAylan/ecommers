import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, Link, Text } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router';
import image from '../../assets/image/service.jpg'
import Users from './01_Users/Users';
import Service from './02_service/Service';
import Createclient from './03_Create/clientcreate';
import Createservice from './03_Create/serviceClient';
import Perfil from './04_Perfil/Perfil';

const InicioAmin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [info, setInfo] = useState(null);
  const { state } = location;

  const [idActivate, setIdActivate] = useState('Users');
  const componentes = {
    Users: <Users uid={state.user.uid}/>,
    Service: <Service uid={state.user.uid}/>,
    Createclient: <Createclient uid={state.user.uid}/>,
    Createservice:<Createservice uid={state.user.uid}/>,
    Perfil:<Perfil uid={state.user.uid}/>
  };
  const handleComponenteClick = (id) => {
    setIdActivate(id);
  };
  useEffect(() => {
    if (state && state.user) {
      setInfo(state.user);
    }
  }, [state]);

  return (
    <>
    {info && (
      <Flex flexDirection="row">
        <Box width="20%" height="100vh" backgroundColor="#177e84" borderRight='2px solid white'>
          <Box 
            width='100%' 
            height='40%' 
            backgroundImage={image} 
            paddingTop='25%'
            borderBottom='2px solid white'
          >
            <Text 
              textAlign='center' 
              color='white' 
              fontWeight='bold' 
              fontSize='1.8rem'
            >
              Bienvenido {info.name}
            </Text>
            <Text 
              color='white' 
              fontSize='20px'
              fontWeight='bold' 
              paddingTop='none'
              marginTop='-25px'
              paddingLeft='15%'
            >
              {info.nameLocal}
            </Text>
          </Box>
          <Button 
            width="100%" 
            height='10%' 
            backgroundColor='transparent' 
            borderBottom='2px solid white'
            borderRadius='none'
            onClick={() => handleComponenteClick('Users')}
          >
              Usuarios
            </Button>
          <Button
           width="100%"
            height='10%' 
            backgroundColor='transparent' 
            borderBottom='2px solid white'
            borderRadius='none'
            onClick={() => handleComponenteClick('Service')}
            >
              Servicios
            </Button>
          <Button 
          width="100%" 
            height='10%' 
            backgroundColor='transparent' 
            borderBottom='2px solid white'
            borderRadius='none'
            onClick={() => handleComponenteClick('Createclient')}
            >
              Crear usuario
            </Button>
          <Button 
          width="100%" 
            height='10%' 
            backgroundColor='transparent' 
            borderBottom='2px solid white'
            borderRadius='none'
            onClick={() => handleComponenteClick('Createservice')}
            >
              Crear servicios
            </Button>
          <Button 
          width='100%' 
            height='10%' 
            backgroundColor='transparent' 
            borderBottom='2px solid white'
            borderRadius='none'
            onClick={() => handleComponenteClick('Perfil')}
            >
              Perfil
            </Button>
          <Button 
            width='100%' 
            height='10%' 
            backgroundColor='transparent' 
            borderBottom='2px solid white'
            borderRadius='none'
            >
              <Link href='/'>
                Cerrar sesion
              </Link>
            </Button>
        </Box>
        <Box width='80%' height='100vh'>
          {componentes[idActivate]}
        </Box>
      </Flex>
    )}
    </>
  );
};

export default InicioAmin;
