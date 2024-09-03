import React, { useState } from "react";
import Home from "../screens/home";
import Remeras from "../screens/Remeras";
import Pantalones from "../screens/Pantalones";
import Shorts from "../screens/Shorts";
import Buzos from "../screens/Buzos";
import { BottomNavigation } from "react-native-paper";

const TabsScreens = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "Home", title: "Inicio", focusedIcon: "home" },
    { key: "Remeras", title: "Remeras", focusedIcon: "tshirt-crew" },
    { key: "Pantalones", title: "Pantalones", focusedIcon: "tshirt-crew" },
    { key: "Shorts", title: "Shorts", focusedIcon: "tshirt-crew" },
    { key: "Buzos", title: "Buzos", focusedIcon: "tshirt-crew" },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "Home":
        return <Home navigation={navigation} />;
      case "Remeras":
        return <Remeras navigation={navigation} />;
      case "Pantalones":
        return <Pantalones navigation={navigation} />;
      case "Shorts":
        return <Shorts navigation={navigation} />;
      case "Buzos":
        return <Buzos navigation={navigation} />;
      default:
        return null;
    }
  };

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default TabsScreens;
