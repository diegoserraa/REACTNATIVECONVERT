import { View, Text, Image } from "react-native";
import { estilos } from '../Style/index';



export default function Title() {
    return (
        <View>
          
            <Text style={estilos.titulo} >Calculadora de taxas de câmbio</Text>
        </View>
    );
}
