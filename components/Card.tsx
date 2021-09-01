import React from 'react';
import {View, Text} from 'react-native';
import CardItem from './CardItem';

export default function Card({main}) {
  console.log('main->', main);
  return (
    <View>
      <Text> --{main.name}--</Text>
      {main.items ? (
        <Text>
          {main.items.map(item => (
            <CardItem item={item} />
          ))}
        </Text>
      ) : (
        <Text>
          *Categories
          {main.subCategories.map(cat => (
            <>
              <Text>{cat.name}</Text>
              {cat.items.map(item => (
                <CardItem item={item} />
              ))}
            </>
          ))}
        </Text>
      )}
    </View>
  );
}
