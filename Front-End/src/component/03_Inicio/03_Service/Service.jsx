import React, { useEffect, useState } from "react";
import Cards from "./card";
import {Box, Flex, Text} from '@chakra-ui/react';
import Image1 from '../../../assets//font/interior.jpg';
import Image2 from '../../../assets//font/auto.jpg';
import Image3 from '../../../assets//font/camioneta.jpg';
import './index.scss';
import axios from "axios";

const Service = ({uid}) => {

  const[services, setServices]=useState();

  useEffect(()=>{
    const urlLocal = 'http://127.0.0.1:8000';
    const urlDeploy = 'https://serverlavadero.vercel.app';
    if(uid){
      const serviceAxios = async()=>{
        try{
          const response = await axios.post(`${urlDeploy}/Getservice`, { uid });
          setServices(response.data)
        }catch (error) {
          console.error("Error:", error);
        }
      };
      serviceAxios()
    }
  },[uid])
  return (
    <Flex 
      width = '100%'
      height = '100%'
      flexDirection='column'
      paddingTop = {{base:'0', lg:'6%'}}
      justifyContent={{lg:'center'}}
      textAlign='center'
      overflow='hidden'
      gap={5}
    >
      <Text 
        color='white'
        textTransform='uppercase'
        fontWeight='bold'
        fontSize={{base:'1.5rem', lg:'3rem'}}
      >
        Servicios
      </Text>
      {
        services?.map((service,index)=>{
          return(
            <Box 
              key={index}
              width='100%'
              height={{ base: '200px', md: '500px', lg: '100%' }} 
            >
              <Cards title={service.title} image={Image1} description={service.contect}/>
            </Box>
          )
        })
      }

    </Flex>
  )
}

export default Service;