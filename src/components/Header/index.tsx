import React from 'react';
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from '@expo/vector-icons';
import streamThumbnail from '../../images/user.jpg';

import colors from '../../styles/colors';
import { useNavigation } from "@react-navigation/native"
import {

  TouchableOpacity,

} from 'react-native'

import { Container, Avatar, OnlineStatus, RightSide, Button } from './styles';

const Header: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container >
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>

        <Avatar source={streamThumbnail}  >
          {/* <OnlineStatus /> */}

        </Avatar>
      </TouchableOpacity>


      <RightSide>
        <Button>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <Feather name="search" size={26} color={colors.black} />
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;