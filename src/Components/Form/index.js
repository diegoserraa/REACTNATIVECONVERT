import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard } from "react-native";
import * as Location from 'expo-location';
import Result from "../Result";
import { estilos } from '../Style/index';


export default function Form() {

    const [capital, setCapital] = useState(null)
    const [montante, setMontante] = useState(null)
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    function calcularJuros() {
        let valor
     
            valor = capital / 5.25
      
        return setMontante(valor.toFixed(2))
    }

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location.coords);
        })();
      }, []);
      let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

    function validar(){
        if (capital != null ){
            calcularJuros()
            setCapital(null)
          
            Keyboard.dismiss()
        } else {
            setMontante(null)
        }
    }
    saveLocation()


   

  
    async function saveLocation() {
    

        console.log(location);
        
    
      }
      

    return (
        <View>
            <View style={estilos.form}>
                <Text style={estilos.label} >Informe o capital em real: </Text>
                <TextInput 
                style={estilos.input}
                keyboardType="numeric" 
                onChangeText={setCapital} 
                value={capital} 
                />
               
                <TouchableOpacity style={estilos.botao} 
                onPress={() => validar()} >
                <Text style={estilos.botaoTexto}>
                    Calcular
                </Text>
                </TouchableOpacity>
            </View>
            <View>
                <Result style={estilos.resultado} Result={montante}/>
            </View>
        </View>
    );
}

