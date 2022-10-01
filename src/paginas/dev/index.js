import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import img  from '../../../1.jpg'
import img2  from '../../../2.jpg'

import { dev } from '../../CSS/dev.js';

export default function Home(props) {
  const navegar = useNavigation();

  return (
    <View style={dev.body1}>
      <View style={dev.texto}>
        <Text style={dev.titulo}> Equipe de Desenvolvedores </Text>
        <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/68997444?v=4',
          }}
          style={{
            resizeMode: 'contain',
            alignSelf: 'center',
            height: 150,
            width: 190,
            paddingStart: 30,
          }}>
          {' '}
        </Image>
        <Image
          source={img}
          style={{
            marginTop: '1rem',
            resizeMode: 'contain',
            alignSelf: 'center',
            height: 150,
            width: 190,
            paddingStart: 30,
          }}>
          {' '}
        </Image>
        <Image
          source={img2}

          style={{
            marginTop: '1rem',
            resizeMode: 'contain',
            alignSelf: 'center',
            height: 150,
            width: 190,
            paddingStart: 30,
          }}>
          {' '}
        </Image>

        <Text style={dev.sub1}> 3° Desenvimento de sistemas </Text>
      </View>

      <View style={dev.container}></View>
    </View>
  );
}
