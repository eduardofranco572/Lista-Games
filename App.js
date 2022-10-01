import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import{NavigationContainer} from '@react-navigation/native'
import{createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from './src/paginas/Home/index'
import Inicio from './src/paginas/inicio/index'
import Jogo1 from './src/paginas/jogo1/index'
import Jogo2 from './src/paginas/jogo2/index'
import Jogo3 from './src/paginas/jogo3/index'
import Jogo4 from './src/paginas/jogo4/index'
import Jogo5 from './src/paginas/jogo5/index'
import Jogo6 from './src/paginas/jogo6/index'
import dev from './src/paginas/dev/index'



const Pilha = createNativeStackNavigator()


export default function App(){

  return(
    <NavigationContainer>
    
      <Pilha.Navigator intialRouteName='Home'>
        <Pilha.Screen  
          name='Home'
          component={Home}
          options={{
            title:'Home',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'black'},
            headerTitleAlign: 'center'

          }}
        />
         <Pilha.Screen  
          name='Inicio'
          component={Inicio}
          options={{
            title:'Início',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'black'},
            headerTitleAlign: 'center'

          }}
        />


         <Pilha.Screen  
          name='jogo1'
          component={Jogo1}
          options={{
            title:'jogo1',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'black'},
            headerTitleAlign: 'center'

          }}
        />
        <Pilha.Screen  
          name='jogo2'
          component={Jogo2}
          options={{
            title:'jogo2',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'black'},
            headerTitleAlign: 'center'

          }}
        />
        <Pilha.Screen  
          name='jogo3'
          component={Jogo3}
          options={{
            title:'jogo3',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'black'},
            headerTitleAlign: 'center'

          }}
        />
        <Pilha.Screen  
          name='jogo4'
          component={Jogo4}
          options={{
            title:'jogo4',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'black'},
            headerTitleAlign: 'center'

          }}
        />
        <Pilha.Screen  
          name='jogo5'
          component={Jogo5}
          options={{
            title:'jogo5',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'black'},
            headerTitleAlign: 'center'

          }}
        />
        <Pilha.Screen  
          name='jogo6'
          component={Jogo6}
          options={{
            title:'jogo6',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'black'},
            headerTitleAlign: 'center'

          }}
        />

          <Pilha.Screen  
          name='dev'
          component={dev}
          options={{
            title:'dev',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'black'},
            headerTitleAlign: 'center'

          }}
        />
      </Pilha.Navigator>
    
    </NavigationContainer>

  )

}