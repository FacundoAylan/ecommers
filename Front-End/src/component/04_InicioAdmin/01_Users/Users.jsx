import { Box, Button, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardUser from "./cardUser";

const Users = ({uid}) => {
  
  const [users,setUsers]= useState();

  useEffect(() => {
    const urlLocal = 'http://127.0.0.1:8000';
    const urlDeploy = 'https://serverlavadero.vercel.app';
    if (uid) {
      const fetchData = async () => {
        try {
          const response = await axios.post(`${urlDeploy}/user`, { uid });
          setUsers(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      fetchData();
    }
  }, [uid]);

  return(
    <Box width='100%' height='100vh'>
      <Text 
        width='100%' 
        textAlign='center' 
        color='white' 
        fontSize='36px'
      >
        Usuarios Activos
      </Text>
      <Box width='100%' height='80%' backgroundColor='#0d933c' overflowY='scroll'>
        {users?.map((user, index)=>{
          return(
            <CardUser 
              key={index}
              name={user.name} 
              last_name={user.last_name} 
              email={user.email} 
              phone={user.phone} 
              creditos={user.creditos}
            />
          )
        }
        )}
      </Box>
      <Button marginLeft='40%' marginTop='1%'>Crear Usuario nuevo</Button>
    </Box>
    
  )
}

export default Users;