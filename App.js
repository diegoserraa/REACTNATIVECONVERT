
import Main from './src/Components/Main';
import Title from './src/Components/Title';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { useEffect, useState } from 'react'

export function App2() {

  const [access, setAccess] = useState(false);
  const setRenderFalse = ()=> setRender(false);
  const [accessFalse, setAccessFalse] = useState(false);


  useEffect(() => {
    (async () => {
      const authentication = await LocalAuthentication.authenticateAsync();
      if (authentication.success)
        setAccess(true)
      else
        setAccess(false)
    })();
  }, []);

  return (
    <View>
      {access && (
        <>
           <View >
            <Title/>
            <Main/>
          </View>
          <TouchableOpacity onPress={accessFalse}>
           
          </TouchableOpacity>
        </> 
      )}
    </View>
  )
}
export default function App() {

  const [biometria, setBiometria] = useState(false);
  const [render, setRender] = useState(false);

  const changeRender = () => setRender(true)

  useEffect(() => {
    (async () => {
      const compativel = await LocalAuthentication.hasHardwareAsync();
      setBiometria(compativel);
    })();
  }, []);


  if (render) {
    return (
      <App2 />
    )

  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>
          Faça Login com Biometria.
        </Text>
        <TouchableOpacity style={styles.botao}onPress={changeRender}>
          <Text style={styles.texto}>
            Fazer Login
          </Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    marginTop: 10,
    backgroundColor: "#781e20",
    borderRadius: 9,
    height: 40
  },
  texto:{
    marginTop:6,
   paddingLeft:30,
   paddingRight:30,
    fontSize: 20,
    color: "#fff"
  },
  titulo:{
    marginTop: 20,
    fontSize: 23,
    textAlign: "center",
    color: "#781e20"
  }
});





