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
        <ImageBackground source={'https://image.api.playstation.com/vulcan/ap/rnd/202208/0422/YXMVQkyQVaK1ZPUwrA2xIjPh.png'} style={Jogo.banner}>

         <Text style={Jogo.titulo}> Apex Legends </Text>
         <Text style={Jogo.subtitulo}>Jogo battle royale</Text>
        
        </ImageBackground>

        <View style={Jogo.legenda}>
          <Text style={Jogo.tituloL}> Descrição: </Text>
          <Text style={Jogo.subtituloL}>Apex Legends é um jogo eletrônico free-to-play do gênero battle royale desenvolvido pela Respawn Entertainment e publicado pela Electronic Arts. Foi lançado para Microsoft Windows, PlayStation 4 e Xbox One em fevereiro de 2019 e para Nintendo Switch em março de 2021.</Text>

        </View>

      <View style={Jogo.video}>
        <iframe
          width={275}
          height={260}
          src="https://www.youtube.com/embed/uMjn_GDFrUA"
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


