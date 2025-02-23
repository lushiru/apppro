import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from "./contexts/AuthContext";
import { useAuth } from "./hooks/useAuth";
import { LoginForm } from './screens/Auth/LoginForm/LoginForm';
import { RegisterForm } from './screens/Auth/RegisterForm/RegisterForm';
import { ForgotForm } from './screens/Auth/ForgotForm/ForgotForm';
import { HomeScreen } from './screens/Home/HomeScreen';
import { GiftcardScreen } from './screens/Giftcard/GiftcardScreen';
import { CheckoutScreen } from './screens/Checkout/CheckoutScreen';
import { PagarScreen } from './screens/Pagar/PagarScreen';
import { HistorialScreen } from './screens/Historial/HistorialScreen';


export default function App() {

  const Taba = createBottomTabNavigator();
  const Tabb = createBottomTabNavigator();
  const Stacka = createNativeStackNavigator();
  const Stackb = createNativeStackNavigator();

  function GiftStack() {
    return (
      <Stacka.Navigator>
        <Stacka.Screen name="Giftcard" component={GiftcardScreen} options={{ headerShown: false }} />
        <Stacka.Screen name="Checkout" component={CheckoutScreen} options={{ headerShown: false }} />
        <Stacka.Screen name="Pagar" component={PagarScreen} options={{ headerShown: false }} />
      </Stacka.Navigator>
    );
  }

  function InicioStack() {
    return (
      <Stackb.Navigator>
        <Stackb.Screen name="Login" component={LoginForm} options={{ headerShown: false }} />
        <Stackb.Screen name="Forgot" component={ForgotForm} options={{ title: "Olvido Contraseña" }} />
      </Stackb.Navigator>
    );
  }

  function MyTabs() {

    const  { user }  = useAuth();

    return (
      user ? 
      <Taba.Navigator>
        <Taba.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Taba.Screen name="Gift" component={GiftStack} options={{ headerShown: false }} />
        <Taba.Screen name="Historial" component={HistorialScreen} options={{ headerShown: false }} />
      </Taba.Navigator>
      :
      <Tabb.Navigator>
        <Tabb.Screen name="Inicio" component={InicioStack} options={{ headerShown: false }} />
        <Tabb.Screen name="Register" component={RegisterForm} options={{ headerShown: false }} />
      </Tabb.Navigator>
    );
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </AuthProvider>
  );
}

