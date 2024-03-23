import React, { useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router";
import { 
  Flex, 
  Button, 
  Input, 
  Text, 
  Alert, 
  AlertIcon, 
  AlertTitle, 
  AlertDescription, 
  CloseButton 
} from "@chakra-ui/react";

const Reset = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [alert, setAlert] = useState(false)

  const handleChange = (e) => {
    const email = e.target.value;
    setUser(email)
  };
  const handleClick = async () =>{
    try{
      await axios.post('http://127.0.0.1:8000/reset',{email:user})
      navigate('/Session')
    }
    catch{
      setAlert(true)
    }

  }
  const onClose = () => {
    setAlert(!alert)
  }
  return(
    <Flex
      width='100%'
      height='100vh'
      paddingTop={{ base: '2%', lg: '6%' }}
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      backgroundColor='#0c2a43'
      border='2px solid #fff'
      boxShadow='inset 0 0 20px 2px #45d6f7'
      gap={5}
    >
      <Text 
        color='white' 
        fontSize={36} 
        textTransform='uppercase'
        fontWeight={800}
        letterSpacing={5}
      >
        Ingrese su correo
      </Text>
      <Input name='email' value={user} onChange={handleChange} width='60%' color='white'/>
      <Button onClick={handleClick}>Enviar</Button>
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
            Verifique su correo electronico
          </AlertTitle>
          <AlertDescription maxWidth='sm'>
            Por favor verifique sus datos e intentelo de nuevo.
          </AlertDescription>
        </Alert> : ''
      }
    </Flex>
  )
}

export default Reset;