import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/home';
import Login from './src/pages/login';
import { Register } from './src/pages/register';
import { Forgot } from './src/pages/forgot';
import { Logado } from './src/pages/login/logado.jsx';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>

        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }}/>

        <Stack.Screen name="Logado" component={Logado} options={{ title: 'Estou logado' }}/>

        <Stack.Screen name="Register" component={Register} options={{ title: 'Cadastro' }}/>

        <Stack.Screen name="Forgot" component={Forgot} options={{ title: 'Esqueci a senha' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}