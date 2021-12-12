import React from 'react';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

import {
  List,
  StreamContainer,
  StreamRow,
  StreamThumbnail,
  StreamColumn,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
} from './styles';
import data from './data';

interface ItemProps {
  item: typeof data[0];
}


const StreamList: React.FC = () => {
  const StreamItem: React.FC<ItemProps> = ({ item }) => (
    <StreamContainer>
      <StreamThumbnail source={item.img} />
      <StreamRow>
        <StreamColumn>
          <StreamHeader>
            <StreamAvatar  source={item.avatar}  />
            <StreamUsername numberOfLines={1}> {item.nome}</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
           {item.desc}
          </StreamDescription>
          <StreamCategory numberOfLines={1}>
          {item.conteudo}
          </StreamCategory>
        </StreamColumn> 

        <TagRow>
          <TagView>
            <TagText>{item.lingua}</TagText>
          </TagView>
          <TagView>
            <TagText>{item.tipo}</TagText>
          </TagView>
        </TagRow>
      </StreamRow>
    </StreamContainer>
  );

  return (
    <List>
      {data.map((item) => (
        <StreamItem key={item.nome} item={item} />
      ))}
    </List>
  );
};

export default StreamList;