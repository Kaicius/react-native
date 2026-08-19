import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TouchableOpacity, Image } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/icon.png")} style={{width: 64, height: 64}}/>
      <Text style={styles.textPrimary}>Site</Text>
      <View style={styles.geral}>
        <TouchableOpacity  onPress={() => navigation.navigate("Register")} style={styles.btnPrimary}>
            <Text style={{color: "white", fontSize: 15}}>
            Cadastro
            </Text>
          </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate("Login")} style={styles.btnSecondary}>
          <Text style={{color: "white", fontSize: 15}}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
  textPrimary: {
    fontSize: 42
  },
  btnPrimary: {
    backgroundColor: "#4e04b0",
    padding: 12,
    borderRadius: 20
  },
  btnSecondary: {
    backgroundColor: "black",
    padding: 12,
    borderRadius: 20
  },
  geral: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 20
  }
});