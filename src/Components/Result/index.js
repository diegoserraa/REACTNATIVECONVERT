import { View, Text } from "react-native";
import { estilos } from "../Style";

export default function Result(props) {
    return (
        <View>
            <Text style={estilos.result}>USD: {props.Result} </Text>
        </View>
    );
}