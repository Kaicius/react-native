import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native"

export const Logado = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 90}}>Estou logado</Text>
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
})

export default Logado