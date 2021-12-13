import React from 'react';

import {
  List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  Username,
  Info,
  RightSide,
  WhiteCircle,
} from './styles';

import data from './data';

interface ItemProps {
  item: typeof data[0];
}

const ChannelList: React.FC = () => {
 
  const ChannelItem: React.FC<ItemProps> = ({ item }) => (
    <ChannelContainer>
      <LeftSide>
        <Avatar  source={item.img} />
        <Column>
          <Username>{item.nome}</Username>
          <Info> {item.videos}</Info>
        </Column>
      </LeftSide>
      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  );

  return (
    <List>
      {data.map((item) => (
        <ChannelItem key={item.nome} item={item} />
      ))}
    </List>
  );
};

export default ChannelList;