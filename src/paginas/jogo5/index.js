import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, FlatList} from 'react-native';

import { useNavigation } from '@react-navigation/native';


import { Jogo } from '../../CSS/jogos';
import { Carrossel } from '../../CSS/carrossel';


export default function Home(props) {
  const navegar = useNavigation();

  function irParaJ1() {
    navegar.navigate('jogoa');
  }
  function detalhe() {
    navegar.navigate('jogoa');
  }

  

  return (
  <View style={Jogo.body}>
      <View style={Jogo.conteiner}>
        <ImageBackground source={'https://sm.ign.com/t/ign_it/screenshot/default/god-of-war-ragnarok-hero_u6b8.1280.jpg'} style={Jogo.banner}>

         <Text style={Jogo.titulo}> God of War Ragnarök </Text>
         <Text style={Jogo.subtitulo}>Jogo eletrônico de ação e aventura, Jogo eletrônico de luta, Hack and slash</Text>
        
        </ImageBackground>

        <View style={Jogo.legenda}>
          <Text style={Jogo.tituloL}> Descrição: </Text>
          <Text style={Jogo.subtituloL}>Kratos e Atreus devem viajar pelos Nove Reinos em busca de respostas enquanto as forças asgardianas se preparam para uma batalha profetizada que causará o fim do mundo. Nessa jornada, eles explorarão paisagens míticas impressionantes e enfrentarão inimigos aterradores: deuses nórdicos e monstros</Text>

        </View>

      <View style={Jogo.video}>
        <iframe
          width={275}
          height={260}
          src="https://www.youtube.com/embed/x6oF3Jxu7X0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </View>

      <TouchableOpacity style={Jogo.botao} onPress={detalhe}>
          <Text style={Jogo.botaoText}> 
           ✓ Add na Lista</Text>
        </TouchableOpacity>


      </View>

  </View>   
  );
 
}


