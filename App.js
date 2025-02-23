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

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function GiftStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Giftcard" component={GiftcardScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Pagar" component={PagarScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  }

  function InicioStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginForm} options={{ headerShown: false }} />
        <Stack.Screen name="Forgot" component={ForgotForm} options={{ title: "Olvido Contraseña" }} />
      </Stack.Navigator>
    );
  }

  function MyTabs() {

    const  { user }  = useAuth();

    return (
      user ? 
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Gift" component={GiftStack} options={{ headerShown: false }} />
        <Tab.Screen name="Historial" component={HistorialScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
      :
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={InicioStack} options={{ headerShown: false }} />
        <Tab.Screen name="Register" component={RegisterForm} options={{ headerShown: false }} />
      </Tab.Navigator>
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

