import React, { useState } from 'react';
import Logo from '../../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { HamburgerIcon } from "@chakra-ui/icons";
import {Box, Center, Flex, Grid, Image, Text, Button, Avatar} from '@chakra-ui/react';

const SearchBar = ({handleButtonClick})=>{

  const navigate = useNavigate()
  const [open, setOpen] = useState(false);

  const handleClick = (option) =>{
    setOpen(option)
  }

  return(
    <Grid
      templateColumns={['90% 10%', 'repeat(3, 1fr)']}
      width = '100%'
      height={{base: '60%', lg:'100%'}}
      overflow='hidden'
      borderBottom="3px solid white"
      boxShadow="inset 0 0 40px 1px rgb(37, 36, 36)"
      position='relative'
    >
      <Box 
        display={{base:'none',sm:'none', md:'none',lg:'block'}} 
      >
        <Image 
          src={Logo} 
          alt='Logo'
          w="30%"
          h="90%"
          objectFit='100%'
          filter = 'drop-shadow(-2px -2px 1px white)'
        />
      </Box>
      <Center
        height='100%'
        paddingTop='2%'
      >
        <Text 
          fontSize={{base:'0.8rem',lg:'2rem'}}
          letterSpacing='3px'
          fontWeight={800}
          fontFamily='fuente1'
          bgGradient="linear(to-r, #f3f0ed 56%, #ed4545 44%)"
          bgClip="text"
        >
          Harmoni wisch
        </Text>
      </Center>
      <Flex 
        overflow='hidden'
        justifyContent='end'
      >
        <Box display={{base:'none',lg:'block'}} color='white' paddingTop='2%'>
          <Button 
            backgroundColor='transparent' 
            color='white'
            fontWeight='bold'
            fontSize='1.2rem'
            _hover={{backgroundColor:'trasparent',transform:'scale(1.1)'}}
            onClick={() => handleButtonClick('inicio')}
          >
            Inicio
          </Button>
          <Button 
            color='white'
            fontWeight='bold'
            fontSize='1.2rem'
            backgroundColor='transparent' 
            _hover={{backgroundColor:'trasparent',transform:'scale(1.1)'}}
            onClick={() => handleButtonClick('servicios')}>
            Servicios
          </Button>
          <Button 
            color='white'
            fontWeight='bold'
            fontSize='1.2rem'
            backgroundColor='transparent' 
            _hover={{backgroundColor:'trasparent',transform:'scale(1.1)'}}
            onClick={() => handleButtonClick('contactos')}
          >
            Contactos
          </Button>
        </Box>
        <Avatar 
          margin='2%'
          bg='teal.500'
          display={{base:'none',sm:'none', md:'none',lg:'block'}} 
          onClick={() => handleClick(!open)}
          _hover={{cursor:'pointer'}}
        />
        <Button 
          display={{base:'block',sm:'block', md:'none',lg:'none'}} 
          onClick={() => handleClick(!open)} 
          leftIcon={<HamburgerIcon />}
          color='white'
          backgroundColor='transparent'
          _hover={{backgroundColor:'transparent'}}
        />  
        {
          open? 
            <Flex
              width={{base:'100%', lg:'20%'}} 
              height={{base:'93%', lg:'40vh'}}
              flexDirection={{ base: 'column', lg: 'column' }} 
              justifyContent='center'
              alignItems='center'
              position='fixed' 
              zIndex={100} 
              color='white' 
              backgroundColor='#0c2a43'
              boxShadow="inset 0 0 20px 2px #45d6f7"
              border = '2px solid white'
              borderTopLeftRadius={{base:'none', lg:'12px'}}
              borderBottomLeftRadius={{base:'none', lg:'12px'}}
              borderBottomRightRadius={{base:'none', lg:'12px'}}
              gap={2}
              top={{base:'6.5%', lg:'10%'}}
              right={{base:'0', lg:'4%'}}
            >
              <Button 
                width='100%' 
                backgroundColor='transparent'
                _hover={{transform:'scale(1.1)'}}
                color='white'
                display={{base:'block', lg:'none'}}
                onClick={() => handleButtonClick('inicio')}
              >
                Inicio
              </Button>
              <Button
                width='100%' 
                backgroundColor='transparent'
                _hover={{transform:'scale(1.1)'}}
                color='white' 
                display={{base:'block', lg:'none'}}
                onClick={() => handleButtonClick('servicios')}
              >
                Servicios
              </Button>
              <Button
                width='100%' 
                backgroundColor='transparent'
                _hover={{transform:'scale(1.1)'}}
                color='white'
                display={{base:'block', lg:'none'}}
                onClick={() => handleButtonClick('contactos')}
              >
                Contacto
              </Button>
              <Button 
                width='100%'
                backgroundColor='transparent'
                _hover={{transform:'scale(1.1)'}}
                color='white'
              >
                Perfil
              </Button>
              <Button 
                width='100%'
                backgroundColor='transparent'
                _hover={{transform:'scale(1.1)'}}
                color='white'
              >
                Configuración
              </Button>
              <Button 
                width='100%'
                backgroundColor='transparent'
                _hover={{transform:'scale(1.1)'}}
                color='white'
                onClick={()=>navigate('/')}
              >
                Cerrar Sesion
              </Button>
            </Flex>:''
        }
      </Flex>
    </Grid>
  )
}

export default SearchBar;