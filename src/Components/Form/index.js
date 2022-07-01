import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard } from "react-native";
import * as Location from 'expo-location';
import Result from "../Result";
import { estilos } from '../Style/index';
import axios from 'axios';

const baseURL = 'https://economia.awesomeapi.com.br/json/last/USD-BRL';

export default function Form() {

    var [capital, setCapital] = useState(null)
    var [capitalDolar, setCapitalDolar] = useState(null);
    const [cotacao, setCotacao] = useState('');
    var [montante, setMontante] = useState(null)
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
 
    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setCotacao(response.data);
      });
    }, []);

    function CalcularConversao() {
        capitalDolar = parseFloat(capital) / parseFloat(cotacao.USDBRL.ask);
    
        setMontante(capitalDolar.toFixed(2));
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

    saveLocation()

    async function saveLocation() {
        console.log(location);
        
      }
      

    return (
        <View>
            <View style={estilos.form}>
                <Text style={estilos.label}>Informe o capital em real: </Text>
                <TextInput 
                style={estilos.input}
                keyboardType="numeric" 
                onChangeText={(capital) => setCapital(capital)}
           
                />
               
                <TouchableOpacity style={estilos.botao} 
                onPress={() => CalcularConversao()} >
                <Text style={estilos.botaoTexto}>
                    Converter
                </Text>
                </TouchableOpacity>
       
            </View>
            <View>
                <Result style={estilos.resultado} Result={montante}/>
            </View>
        </View>
    );
}

