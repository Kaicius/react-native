import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native"

export default function Login() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30}}>Login</Text>
            <View style={styles.geral}>
                <TextInput placeholder="Email:" keyboardType="Email-address" style={styles.inputs}></TextInput>
                <TextInput placeholder="Senha:" style={styles.inputs}></TextInput>
                <Text style={{opacity: 0.5, alignSelf: 'flex-end'}}>Esqueceu a senha?</Text>
            </View>
            <TouchableOpacity style={styles.butao}>
                <Text style={{color: "white", alignSelf: "center", fontSize: 15}}>Logar</Text>
            </TouchableOpacity>
            <View style={styles.icones}>
                <Image source={require("../../../assets/google.png")} style={styles.icone}/>
                <Image source={require("../../../assets/face.png")} style={styles.icone}/>
                <Image source={require("../../../assets/twi.png")} style={styles.icone}/>
                <Image source={require("../../../assets/linke.png")} style={styles.icone}/>
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