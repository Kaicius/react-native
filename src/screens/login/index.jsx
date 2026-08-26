import { Text, View, TouchableOpacity, TextInput, Image, Alert } from "react-native"
import { useEffect, useState } from "react"
import { stylesLogin } from "./style"
import { useNavigation } from "@react-navigation/native"


export default function Login() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [carregando, setCarregando] = useState(false)
  const navigation = useNavigation()

  async function fazerLogin() {
    if (!email || !senha) {
      Alert.alert("Erro", "Preencha email e senha")
      return
    }

    try {
      setCarregando(true)
  
      const resposta = await fetch(
        "http://10.135.224.15:3000/user/login",
        {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            senha
          })
        }
      )

      const dados = await resposta.json()

      if (!resposta.ok) {
        Alert.alert(
          "Erro",
          dados.mensagem || "Erro ao fazer login"
        )
        return
      }

      console.log("LOGIN", dados);
      
      navigation.navigate("Logado")
    } catch (error) {
      Alert.alert(
        "Erro",
        "Não foi possivel conectar ao servidor"
      )
    } finally {
      setCarregando(false)
    }

  }

  

    return (
        <View style={stylesLogin.container}>
            <Text style={{fontSize: 30}}>Login</Text>
            <View style={stylesLogin.geral}>
                <TextInput placeholder="Email:" keyboardType="email-address" autoCapitalize="none" style={stylesLogin.inputs} value={email} onChangeText={setEmail}></TextInput>
                <TextInput placeholder="Senha:" secureTextEntry style={stylesLogin.inputs} value={senha} onChangeText={setSenha}></TextInput>
                <TouchableOpacity onPress={() => navigation.navigate("Forgot")} style={{alignSelf: 'flex-end'}}>
                  <Text style={{opacity: 0.5}}>Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={stylesLogin.butao} onPress={() => fazerLogin()} disabled={carregando}>
                <Text style={{color: "white", alignSelf: "center", fontSize: 15}}>{carregando ? "Entrando..." : "Logar"}</Text>
            </TouchableOpacity>
            <View style={stylesLogin.icones}>
                <Image source={require("../../assets/google.png")} style={stylesLogin.icone}/>
                <Image source={require("../../assets/face.png")} style={stylesLogin.icone}/>
                <Image source={require("../../assets/twi.png")} style={stylesLogin.icone}/>
                <Image source={require("../../assets/linke.png")} style={stylesLogin.icone}/>
            </View>
        </View>

        
    )    
}