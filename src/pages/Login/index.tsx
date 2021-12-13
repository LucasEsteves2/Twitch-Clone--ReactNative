import React from 'react';
import { useNavigation } from "@react-navigation/native"

import { Wrapper, Heading } from './styles';
import { TouchableOpacity } from 'react-native';


const Login: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <Heading>Em Breve...</Heading>

      <TouchableOpacity onPress={()=> navigation.navigate("Following")}>
      <Heading>Em Breve...</Heading>
      </TouchableOpacity>

      
    </Wrapper>
  );
};

export default Login;