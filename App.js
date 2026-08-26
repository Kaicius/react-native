import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, Logado, Login, Register, Forgot } from './src/screens';
import DetailsModal from './src/components/modal';

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

        <Stack.Group screenOptions={{ presentation: "modal", animation: "slide_from_bottom" }}>
          <Stack.Screen name='DetailsModal' component={DetailsModal} options={{headerShown: false}}/>
        </Stack.Group>

      </Stack.Navigator>
    </NavigationContainer>
  );
}