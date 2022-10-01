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
        <ImageBackground source={'https://cdn2.unrealengine.com/rl-playerschoice-bundle-3840x2160-723248b32611.jpg'} style={Jogo.banner}>

         <Text style={Jogo.titulo}> Rocket League </Text>
         <Text style={Jogo.subtitulo}>Jogo Futebol, Jogo eletrônico de ação</Text>
        
        </ImageBackground>

        <View style={Jogo.legenda}>
          <Text style={Jogo.tituloL}> Descrição: </Text>
          <Text style={Jogo.subtituloL}>Descrito como "futebol, mas com carros movidos a foguete", Rocket League tem de um a quatro jogadores designados para cada uma das duas equipes, usando veículos movidos a foguete para acertar o gol do adversário e marcar pontos ao longo de uma partida.</Text>

        </View>

      <View style={Jogo.video}>
         <iframe
          width={300}
          height={300}
          src="https://www.youtube.com/embed/OmMF9EDbmQQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </View>

      <TouchableOpacity style={Jogo.botao} onPress={detalhe}>
          <Text style={Jogo.botaoText}> 
           ✓ Add na Lista</Text>
        </TouchableOpacity>


      </View>

  </View>   
  );
 
}


