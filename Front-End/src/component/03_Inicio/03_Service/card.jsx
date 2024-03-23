import React from "react";
import { 
  Box,
  Center,
  Flex,
  UnorderedList,
  ListItem,
  Button,
  Text
} from '@chakra-ui/react';

const Cards = ({title,image, description}) => {
  return (
    <Center
      width ='100%'
      height ='100%'
      overflow='hidden'
      textTransform='uppercase'
    >
      <Flex 
        width = {{base:'80%', lg:'50%'}}
        height = {{base:'100%', lg:'170'}}
        borderRadius='18px'
        margin='1%'
        position="relative"
        backgroundImage={image}
        backgroundRepeat= 'no-repeat'
        backgroundSize= 'cover'
        backgroundPosition = 'center'
        overflow='hidden'
        border='2px solid white'
      >
        <Box
          position='absolute' 
          width='100%'
          height='100%'
          color='white'
          zIndex={2}
          borderRadius='18px'
          boxShadow="inset 0 0 600px 6px #0c0c17"
        >
          <Center 
            fontSize={{lg:'4xl'}}
            fontWeight='bold'
          >
            {title}
          </Center>
          <Flex
            flexDirection={{base:'column', lg:'row'}}
            alignItems='center'
            justify={{ base: '', lg: 'space-between' }}
            paddingTop={{base:'5%', lg:'0'}}
          >
            <UnorderedList width={{base:'100%'}} textAlign='start'>
              <Text>{description}</Text>
            </UnorderedList>
            <Button 
              width={{base:'50%'}}
              variant='solid' 
              colorScheme='blue'
              marginRight='10'
              marginTop='5'
            >
              Reservar
            </Button>
          </Flex>
        </Box> 
      </Flex>
    </Center>
  )
}

export default Cards;