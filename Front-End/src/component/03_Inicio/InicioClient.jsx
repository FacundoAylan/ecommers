import React, { useEffect, useState } from 'react';
import SearchBar from "./01_SearchBar/SearBar";
import Data from './02_Data/Data';
import Service from './03_Service/Service';
import Contact from './04_contact/Contact'
import {Box} from '@chakra-ui/react';
import image from '../../assets/image/principal.jpg';
import { useLocation } from 'react-router';

const InicioClient = () => {

  const location = useLocation();
  const { state } = location;
  const user = state.user

  const handleButtonClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {user ? (
        <Box 
          width='100%' 
          height='auto'
          backgroundImage={image} 
          backgroundRepeat= 'no-repeat'
          backgroundSize= 'cover'
          backgroundPosition = 'center'
        >
          <Box 
            position='fixed' 
            width={{base:'100%', lg:'calc(100% - 17px)'}} 
            backgroundColor='#1a2d55d5' 
            zIndex={10}
          >
            <SearchBar 
              handleButtonClick={handleButtonClick}
            />
          </Box>
          <Box width='100%' height='100vh' id="inicio">
            <Data 
              name={user.name} 
              lastName={user.last_name} 
              creditos={user.creditos} 
              phone={user.phone}
            />
          </Box>
          <Box width='100%' minHeight='100vh' id="servicios">
            <Service uid={user.uid}/>
          </Box>
          <Box width='100%' height='100vh' id="contactos">
            <Contact/>
          </Box>
        </Box>
      ) : null}
    </>
  );
  
}

export default InicioClient;