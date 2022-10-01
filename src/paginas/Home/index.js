import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Css } from '../../CSS/global.js';

export default function Home(props) {
  const navegar = useNavigation();

  function irParaInicio() {
    navegar.navigate('Inicio');
  }

  return (
    <View style={Css.body1}>
      <View style={Css.texto}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/originals/66/88/08/668808ef7c01a62228d3e836432f7208.png',
          }}
          style={{
            marginTop: '2rem',
            resizeMode:'contain', 
            alignSelf: 'center', 
            height: 400,
            width: 330,
            paddingStart: 30,
          }}>
          {' '}
        </Image>
        <Text style={Css.titulo}> Veja os melhores jogos do momento </Text>
      </View>

      <View style={Css.container}>
        <TouchableOpacity style={Css.botao} onPress={irParaInicio}>
          <Text style={Css.botaoText}> 
           INICIAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
