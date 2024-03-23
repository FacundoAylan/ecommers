import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import {Flex, Text, Button, Box, Input, Center, Select} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Session2 = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    'email': '',
    'local': ''
  });
  const [locals, setLocals] = useState()
  const [alert, setAlert] = useState(false);

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
      const email= user.email;
  
      if (emailRegex.test(email)) {
        const response = await axios.post(`${urlDeploy}/LoginClient`,user)
        navigate("/home",{ state:{user:response.data}});
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
  useEffect(()=>{
    const urlLocal = 'http://127.0.0.1:8000';
    const urlDeploy = 'https://serverlavadero.vercel.app';
    const local= async()=>{
      const response = await axios.get(`${urlDeploy}/locals`)
      setLocals(response.data)
    }
    local()
  },[])

  return (
    <Flex 
      width='100%' 
      height='100%' 
      paddingTop = {{base:'2%', lg:'6%'}} 
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      backgroundColor = '#0c2a43'
      border = '2px solid #fff' 
      boxShadow = 'inset 0 0 20px 2px #45d6f7'
      position='relative'
    >
      <Link to='/' style={{position:'absolute',top:'4px',left: '4px',zIndex: '10'}}><IoIosArrowBack size={38} color='white'/></Link>
      <Text 
        color = 'white'
        fontWeight = 'bold'
        fontSize = {{base:'2rem', lg:'3rem'}}
        letter-Spacing = '4px'
        textTransform= 'uppercase'
      >
        Iniciar Sesion
      </Text>
      <Flex
        width={{base:'80%', lg:'50%'}}
        flexDirection='row'
        justifyContent='star'
      >
        <form onSubmit={handleSubmit} style={{width:'100%'}}>
          <Box fontWeight='bold' color='white' textTransform='uppercase'>
            <Text>Correo</Text>
            <Input name='email' value={user.email} onChange={handleChange} />
          </Box>
          <Box 
            fontWeight='bold' 
            color='white' 
            textTransform='uppercase' 
            marginTop={{base:'10px', lg:'20px'}}
          >
            <Text>Nombre del local</Text>
            <Select 
              placeholder="Ingrese su local" 
              name='local' 
              value={user.local} 
              onChange={handleChange}
              variant="outline"
              colorScheme='#0c2a43'
              bg='#0c2a43'
            >
              {
                locals?.map((local)=>(
                  <option key={local.value} value={local.value} style={{ backgroundColor: "#0c2a43", color: "white" }}>
                    {local}
                  </option >
                ))
              }
            </Select>
          </Box>
          <Center 
            width='100%'
            marginTop={4} 
          >
            <Button
              backgroundColor = '#0dcaf0'
              border = '2px solid white'
              padding = '10px 20px'
              border-radius = '8px'
              color = 'white'
              fontWeight = 'bold'
              textTransform = 'uppercase'
              fontSize={{lg:'1rem'}}
              height={{lg:'50px'}}
              _hover='none'
              type="submit"
            >
              Ingresar
            </Button>
          </Center>
        </form>
      </Flex>
    </Flex>
  )
}

export default Session2;