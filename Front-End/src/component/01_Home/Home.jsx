import React from "react";
import { Link } from "react-router-dom";
import {Flex, Text, Button} from '@chakra-ui/react';
import './index.scss';

const Home = () => {
  return(
    <Flex
      width='100%'
      height='100%'
      placeItems='center'
      justifyContent='center'
      flexDirection='column'
      overflow='hidden'
      backgroundColor = '#0c2a43'
      border = '2px solid #fff' 
      boxShadow = 'inset 0 0 20px 2px #45d6f7'
    >
      <Text 
        height='auto'
        fontSize={{base:'1.3rem', sm:'1.3rem', md:'1.3rem', lg:"3rem"}}
        fontWeight="100"
        letterSpacing={{base:'4px', lg:"5px"}}
        bgGradient="linear(to right, #f3f0ed 58%, #ed4545 42%)"
        bgClip="text"
        color="transparent"
        display="inline"
        fontFamily="fuente1"
        padding='none'
        margin='none'
      >Harmoni wisch</Text>
      <Flex 
        flexDirection={{base:"column", lg:'row'}}
        justifyContent='center'
        gap={{base:'8%', lg:'5%'}}
        width='50%'
        height={{base:'30%', lg:'8%'}}
      >
        <Link to='/Session'>
          <Button
            width="100%"
            height='100%'
            backgroundColor="#0dcaf0"
            color="#fff"
            fontWeight="800"
            textTransform="uppercase"
            letterSpacing="3px"
            borderRadius="8px"
            border="2px solid transparent"
            boxShadow="0 0 10px 2px transparent"
            padding='10px 20px'
            _hover={{
              border: "2px solid #fff",
              boxShadow: "0 0 10px 2px #45d6f7",
            }}
          >
          Empresa
          </Button>
        </Link>
        <Link to='/Client'>
          <Button
          width="100%"
          height='100%'
          backgroundColor="#0dcaf0"
          color="#fff"
          fontWeight="800"
          textTransform="uppercase"
          letterSpacing="3px"
          borderRadius="8px"
          border="2px solid transparent"
          boxShadow="0 0 10px 2px transparent"
          padding='10px 20px'
          _hover={{
            border: "2px solid #fff",
            boxShadow: "0 0 10px 2px #45d6f7",
          }}
        >
         Cliente
        </Button>
        </Link>
      </Flex>
    </Flex>
  )
}

export default Home;