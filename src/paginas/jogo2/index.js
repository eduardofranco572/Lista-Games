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
        <ImageBackground source={'https://akamai.sscdn.co/uploadfile/letras/fotos/2/3/8/a/238aa3157b46ba082bc2dc5afbec1673.jpg'} style={Jogo.banner}>

         <Text style={Jogo.titulo}> League of Legends </Text>
         <Text style={Jogo.subtitulo}>Jogo multiplayer online battle arena</Text>
        
        </ImageBackground>

        <View style={Jogo.legenda}>
          <Text style={Jogo.tituloL}> Descrição: </Text>
          <Text style={Jogo.subtituloL}>League of Legends é um jogo eletrônico do gênero multiplayer online battle arena desenvolvido e publicado pela Riot Games. Foi lançado em outubro de 2009 para Microsoft Windows e em março de 2013 para macOS.</Text>

        </View>

      <View style={Jogo.video}>
         <iframe
          width={300}
          height={300}
          src="https://www.youtube.com/embed/vzHrjOMfHPY"
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


