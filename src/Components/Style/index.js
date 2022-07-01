import reactDom from "react-dom";
import { StyleSheet } from "react-native";
import { backgroundColor, color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export const estilos = StyleSheet.create({
    topo:{
        width: "100%",
        height: 200,
      
    },
    form:{
        padding: 10,
        borderRadius: 10,
        marginLeft: "12%",
        marginTop: 20,
        width: "70%",
       
        borderColor: "#781e20"
    },
    titulo: {
       marginTop: 20,
       fontSize: 23,
       textAlign: "center",
       color: "#781e20"

    },
    input:{
        backgroundColor: "#999",
        borderRadius: 9,
        height: 35
    },
    label:{
        fontSize: 18,
        lineHeight: 40,
        color: "#781e20"
    },
    botao:{
        marginTop: 10,
        backgroundColor: "#781e20",
        borderRadius: 9,
        height: 40
    },
    botaoTexto:{
      marginTop:6,
      marginLeft:"35%",
      fontSize: 20,
      color: "#fff"

    },
    result:{
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 20,
        textAlign: "center",
        lineHeight: 20,
        backgroundColor: "#f0f0f0"
    }

 
})