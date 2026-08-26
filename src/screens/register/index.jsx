import { Text, View, TouchableOpacity, TextInput, Image } from "react-native"
import {stylesRegister} from './style'

const Register = () => {
    return (
        <View style={stylesRegister.container}>
            <Text style={{fontSize: 30}}>Cadastro</Text>
            <View style={stylesRegister.geral}>
                <TextInput placeholder="Email:" keyboardType="Email-address" style={stylesRegister.inputs}></TextInput>
                <TextInput placeholder="Senha:" style={stylesRegister.inputs}></TextInput>
            </View>
            <TouchableOpacity style={stylesRegister.butao}>
                <Text style={{color: "white", alignSelf: "center", fontSize: 15}}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Register