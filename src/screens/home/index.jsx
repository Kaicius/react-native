import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { stylesHome } from './style';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
  const navigation = useNavigation()
  return (
    <View style={stylesHome.container}>
      <Image source={require("../../assets/icon.png")} style={{width: 64, height: 64}}/>
      <Text style={stylesHome.textPrimary}>Site</Text>
      <View style={stylesHome.geral}>
        <TouchableOpacity  onPress={() => navigation.navigate("Register")} style={stylesHome.btnPrimary}>
            <Text style={{color: "white", fontSize: 15}}>
            Cadastro
            </Text>
          </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate("Login")} style={stylesHome.btnSecondary}>
          <Text style={{color: "white", fontSize: 15}}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate("AlertBanner")} style={stylesHome.btnTertiary}>
          <Text style={{color: "black", fontSize: 15}}>
            Banner 
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}