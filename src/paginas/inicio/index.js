import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Inicio } from '../../CSS/inicio';

export default function Home(props) {
  const navegar = useNavigation();

  function irParaJ1() {
    navegar.navigate('jogo1');
  }
  function irParaJ2() {
    navegar.navigate('jogo2');
  }
  function irParaJ3() {
    navegar.navigate('jogo3');
  }
  function irParaJ4() {
    navegar.navigate('jogo4');
  }
  function irParaJ5() {
    navegar.navigate('jogo5');
  }
  function irParaJ6() {
    navegar.navigate('jogo6');
  }
 function irParadev() {
    navegar.navigate('dev');
  }



  return (
    <View style={Inicio.body}>
      <View style={Inicio.conteiner}>

        <TouchableOpacity style={Inicio.itens} onPress={irParaJ1}>
          <View style={Inicio.itensDentro}>
              <Image
                source={{
                  uri: 'https://passion-stickers.com/2701-large_default/stickers-counter-strike-global-offensive.jpg',
                }}
                style={Inicio.imagem}>
                {' '}
              </Image>
              <Text style={Inicio.nomejogo} > Counter-Strike: Global Offensive </Text>
            </View>
          <Text style={Inicio.seta}> > </Text>
        </TouchableOpacity>

        <TouchableOpacity style={Inicio.itens} onPress={irParaJ2}>
          <View style={Inicio.itensDentro}>
            <Image
              source={{
                uri: 'https://pentagram-production.imgix.net/cc7fa9e7-bf44-4438-a132-6df2b9664660/EMO_LOL_02.jpg?rect=0%2C0%2C1440%2C1512&w=640&crop=1&fm=jpg&q=70&auto=format&fit=crop&h=672',
              }}
              style={Inicio.imagem}>
              {' '}
            </Image>
            <Text style={Inicio.nomejogo}> League of Legendse </Text>
          </View>
            <Text style={Inicio.seta}> > </Text>
        </TouchableOpacity>

        <TouchableOpacity style={Inicio.itens} onPress={irParaJ3}>
          <View style={Inicio.itensDentro}>
              <Image
                source={{
                  uri: 'https://cdn2.iconfinder.com/data/icons/popular-games-1/50/rocketleague_squircle-512.png',
                }}
                style={Inicio.imagem}>
                {' '}
              </Image>
              <Text style={Inicio.nomejogo}> Rocket League </Text>
            </View>
          <Text style={Inicio.seta}> > </Text>
        </TouchableOpacity>

        <TouchableOpacity style={Inicio.itens} onPress={irParaJ4}>
          <View style={Inicio.itensDentro}>
              <Image
                source={{
                  uri: 'https://i.pinimg.com/originals/c5/a9/b8/c5a9b84ff1e453186a57b2a493964064.jpg',
                }}
                style={Inicio.imagem}>
                {' '}
              </Image>
              <Text style={Inicio.nomejogo}> Spider-Man </Text>
            </View>
            <Text style={Inicio.seta}> > </Text>
        </TouchableOpacity>

         <TouchableOpacity style={Inicio.itens} onPress={irParaJ5}>
          <View style={Inicio.itensDentro}>
              <Image
                source={{
                  uri: 'https://play-lh.googleusercontent.com/lax00puJz-wvIlOxdoDVvdSGoe86x6II8ypai_JAvCOlXzMt5fYoq7Nh-ZhOMkVeFmcg',
                }}
                style={Inicio.imagem}>
                {' '}
              </Image>
              <Text style={Inicio.nomejogo}> God of War Ragnarök </Text>
            </View>
            <Text style={Inicio.seta}> > </Text>
        </TouchableOpacity>

         <TouchableOpacity style={Inicio.itens} onPress={irParaJ6}>
          <View style={Inicio.itensDentro}>
              <Image
                source={{
                  uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/18e9739a-373f-434f-aa76-0172944efa2a/dcz2qp9-b6159b68-0bf7-42cd-8adc-ddbc7fbbaffc.png',
                }}
                style={Inicio.imagem}>
                {' '}
              </Image>
              <Text style={Inicio.nomejogo}> Apex Legends </Text>
            </View>
            <Text style={Inicio.seta}> > </Text>
        </TouchableOpacity>

         <TouchableOpacity style={Inicio.itens} onPress={irParadev}>
          <View style={Inicio.itensDentro}>
              <Image
                source={{
                  uri: 'https://img.freepik.com/vetores-gratis/logotipo-do-codigo-gradiente-criativo_23-2148820572.jpg?w=2000',
                }}
                style={Inicio.imagem}>
                {' '}
              </Image>
              <Text style={Inicio.nomejogo}> Desenvolvedores </Text>
            </View>
            <Text style={Inicio.seta}> > </Text>
        </TouchableOpacity>
    </View>
  </View>

      
  );
}
