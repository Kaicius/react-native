import { Text, View, TouchableOpacity, TextInput, Image } from "react-native"
import { stylesLogado } from "./style"


export const Logado = () => {
    return (
        <View style={stylesLogado.container}>
            <Text style={{fontSize: 90}}>Estou logado</Text>
            <Image source={require("../../assets/icon.png")} style={{width: 64, height: 64}}/>
        </View>
    )
}

export default Logado