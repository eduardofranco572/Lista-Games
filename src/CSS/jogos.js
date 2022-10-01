import { StyleSheet } from 'react-native';
const Jogo = StyleSheet.create({
 body:{
    backgroundColor: '#121214',
    flex: 1,
    alignItems: 'center',
  },
  conteiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    width: '19rem',
    height: '15rem',
    
  },
  titulo:{
    marginTop: '10rem',
    color: 'white',
    fontSize: '1.1rem',
    fontWeight: 700,
   
  },
  subtitulo:{
    marginLeft: '1rem',
    fontSize: '1rem',
    color: 'white',
    opacity: 0.8,
  },
  legenda:{
    marginTop: '2rem',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  tituloL:{
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#8257E5',
  },

  subtituloL:{
    fontSize: '0.9rem',
    color: 'white',
    margin: '1rem',
  },
  video:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2rem',
    height: '13rem',
  },
  botao:{
    marginTop: '1rem',
    backgroundColor: '#731DD8',
    alignItems: 'center',
    color: 'white',
    width: 250,
    margin: 10,
    padding: 15,
    borderRadius: 8,
  },
  botaoText:{
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  }
  
  
});
export { Jogo };