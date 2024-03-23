import { Box, Text } from "@chakra-ui/react";
import React from "react";

const CardUser = ({ index, name, last_name, email, phone, creditos }) => {

  return (
    <Box key={index} width='100%' borderRadius='8px' backgroundColor='blue' color='white'>
      <Text>{`Nombre y apellido: ${name} ${last_name}`}</Text>
      <Text>{`Email: ${email}`}</Text>
      <Text>{`Telefono: ${phone}`}</Text>
      <Text>{`Creditos: ${creditos}`}</Text>
    </Box>
  );
};

export default CardUser;
