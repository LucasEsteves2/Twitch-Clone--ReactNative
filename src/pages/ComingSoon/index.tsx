import React from 'react';
import { useNavigation } from "@react-navigation/native"

import { Wrapper, Heading } from './styles';
import { Text, TouchableOpacity } from 'react-native';


const ComingSoon: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <Heading>Em Breve...</Heading>
    </Wrapper>
  );
};

export default ComingSoon;