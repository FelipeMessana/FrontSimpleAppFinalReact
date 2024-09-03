import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { CartContext } from "../context/cartContext";
import { Card, Appbar } from "react-native-paper";

const ShortsScreen = ({ navigation }) => {
  const { addItemToCart } = useContext(CartContext);

  const products = [
    { id: "3", name: "Short 1", price: 600 },
    { id: "4", name: "Short 2", price: 650 },
  ];

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Catálogo de Shorts" />
        <Appbar.Action
          icon="cart"
          onPress={() => navigation.navigate("Cart")}
        />
      </Appbar.Header>
      <View style={styles.container}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <Card.Content>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text>Precio: ${item.price}</Text>
                <Button
                  title="Añadir al Carrito"
                  onPress={() => addItemToCart(item)}
                />
              </Card.Content>
            </Card>
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  card: {
    marginBottom: 16,
    borderRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ShortsScreen;
