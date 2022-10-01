import { StyleSheet } from 'react-native';
const Inicio = StyleSheet.create({
 body:{
    backgroundColor: '#121214',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  conteiner: {
    height: '36rem',
  },
  imagem:{
    resizeMode:'contain', 
    alignSelf: 'center', 
    height: 70,
    width: 70,
    paddingStart: 30,
    borderRadius: '0.5rem',
  },
  itens: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer', 
  },
  nomejogo: {
    color: '#FFFFFF',
  },
  itensDentro: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
  },
  seta: {
    color: 'white',
    fontSize: '1rem',
  },
});
export { Inicio };