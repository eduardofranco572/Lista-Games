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
        <ImageBackground source={'https://gmedia.playstation.com/is/image/SIEPDC/marvels-spider-man-e3-2018-screen-03-ps4-us-11jun18?$native$'} style={Jogo.banner}>

         <Text style={Jogo.titulo}> Spider-Man </Text>
         <Text style={Jogo.subtitulo}>Jogo Mundo aberto, Jogo eletrônico de luta</Text>
        
        </ImageBackground>

        <View style={Jogo.legenda}>
          <Text style={Jogo.tituloL}> Descrição: </Text>
          <Text style={Jogo.subtituloL}>O protagonista é Peter Parker (Yuri Lowenthal), um assistente de pesquisa de 23 anos que ganhou poderes super-humanos depois de ter sido mordido por uma aranha geneticamente modificada. Ele assumiu a identidade secreta de Homem-Aranha e passou a usar suas habilidades para proteger Nova Iorque.</Text>

        </View>

      <View style={Jogo.video}>
        <iframe
          width={275}
          height={260}
          src="https://www.youtube.com/embed/8pR0o2fGyHg"
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


