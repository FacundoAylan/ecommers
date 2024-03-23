import React, { useEffect, useState } from "react";
import './index.scss'
import { Button, Flex, Text } from "@chakra-ui/react";
import axios from "axios";

const Data = ({name,lastName,creditos,phone}) => {

  const [turnos, setTurnos] = useState(1);
  const [data,setData] = useState();
  const [recept, setRecept] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const user = await axios.get('http://127.0.0.1:8000/Getservice');

  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };
  
  //   fetchData();
  // }, []);
  return(
    <Flex 
      width='100%' 
      height='100%' 
      justifyContent='center'
      alignItems='center' 
      flexDirection='column'  
    >
        <Text
          fontWeight='bold'
          textTransform = 'uppercase'
          color ='white'
          letterSpacing = '5px'
          fontSize={{base:'2.5rem', lg:'3rem'}}
        >
          ¡Bienvenido!
        </Text>
        <Text
          fontWeight='bold'
          textTransform = 'uppercase'
          color ='white'
          letterSpacing = '2px'
          fontSize={{base:'2.5rem', lg:'1.5rem'}}
        >
          {`${name} ${lastName}`}
        </Text>
        <h1 className="number">{creditos}</h1>
        <p className="turnos">Turnos restantes</p>
        <Flex flexDirection={{base:'column', lg:'row'}} gap={5}>
          <Button
            backgroundColor = '#0dcaf0'
            border = '2px solid white'
            padding = '10px 20px'
            border-radius = '8px'
            color = 'white'
            fontWeight = 'bold'
            textTransform = 'uppercase'
            fontSize={{lg:'2rem'}}
            height={{lg:'50px'}}
            _hover={{transform:'scale(1.1)'}}
          >
            Reservas
          </Button>
          <Button 
            backgroundColor = '#0dcaf0'
            border = '2px solid white'
            padding = '10px 20px'
            border-radius = '8px'
            color = 'white'
            fontWeight = 'bold'
            textTransform = 'uppercase'
            fontSize={{lg:'2rem'}}
            height={{lg:'50px'}}
            _hover={{transform:'scale(1.1)'}}
            onClick={() => setTurnos(turnos+1)}
          >
            Creditos
          </Button>
        </Flex>
    </Flex>
  )
}

export default Data;