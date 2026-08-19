import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, Alert } from "react-native"
import { useEffect, useState } from "react"


export default function Login({navigation}) {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [carregando, setCarregando] = useState(false)

  async function fazerLogin() {
    if (!email || !senha) {
      Alert.alert("Erro", "Preencha email e senha")
      return
    }

    try {
      setCarregando(true)
  
      const resposta = await fetch(
        "http://10.135.224.12:3000/user/login",
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
        <View style={styles.container}>
            <Text style={{fontSize: 30}}>Login</Text>
            <View style={styles.geral}>
                <TextInput placeholder="Email:" keyboardType="email-address" autoCapitalize="none" style={styles.inputs} value={email} onChangeText={setEmail}></TextInput>
                <TextInput placeholder="Senha:" secureTextEntry style={styles.inputs} value={senha} onChangeText={setSenha}></TextInput>
                <TouchableOpacity onPress={() => navigation.navigate("Forgot")} style={{alignSelf: 'flex-end'}}>
                  <Text style={{opacity: 0.5}}>Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.butao} onPress={() => fazerLogin()} disabled={carregando}>
                <Text style={{color: "white", alignSelf: "center", fontSize: 15}}>{carregando ? "Entrando..." : "Logar"}</Text>
            </TouchableOpacity>
            <View style={styles.icones}>
                <Image source={require("../../assets/google.png")} style={styles.icone}/>
                <Image source={require("../../assets/face.png")} style={styles.icone}/>
                <Image source={require("../../assets/twi.png")} style={styles.icone}/>
                <Image source={require("../../assets/linke.png")} style={styles.icone}/>
            </View>
        </View>

        
    )    
}

const styles = StyleSheet.create({
    container:  {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 30
    },
    butao: {
        backgroundColor: "black",
        padding: 10,
        borderRadius: 15,
        width: 200
      },
      geral: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 20
      },
      inputs: {
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        width: 300,
        borderRadius: 12
      },
      icones: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 20
      },
      icone: {
        width: 54,
        height: 54,       
      }
})