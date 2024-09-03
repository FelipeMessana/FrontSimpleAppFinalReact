import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "../screens/signup";
import Login from "../screens/login";
import tabs from "./tabs";
import CartScreen from "../screens/Cart";
import Home from "../screens/home";
import Remeras from "../screens/Remeras";
import Pantalones from "../screens/Pantalones";
import Shorts from "../screens/Shorts";
import Buzos from "../screens/Buzos";

const Stack = createNativeStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Login}
        name="Login"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Signup}
        name="crearCuenta"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={tabs}
        name="tabs"
        options={{ headerShown: false }}
      />
      {/* Las pantallas de cada categoría */}
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={Remeras} name="Remeras" />
      <Stack.Screen component={Pantalones} name="Pantalones" />
      <Stack.Screen component={Shorts} name="Shorts" />
      <Stack.Screen component={Buzos} name="Buzos" />
      <Stack.Screen component={CartScreen} name="Cart" />
    </Stack.Navigator>
  );
};

export default StackScreen;
