import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { CartContext } from "../context/cartContext";
import { Card, IconButton } from "react-native-paper";

const CartScreen = ({ navigation }) => {
  const { cartItems, removeItemFromCart, clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    clearCart();
    alert("Compra finalizada!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito de Compras</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <View style={styles.itemRow}>
                <View style={styles.itemDetails}>
                  <Text style={styles.cardTitle}>{item.name}</Text>
                  <Text>Precio: ${item.price}</Text>
                </View>
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => removeItemFromCart(item.id)}
                >
                  <Text style={styles.removeButtonText}>X</Text>
                </TouchableOpacity>
              </View>
            </Card.Content>
          </Card>
        )}
      />
      <Button title="Finalizar Compra" onPress={handleCheckout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
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
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemDetails: {
    flex: 1,
  },
  removeButton: {
    backgroundColor: "#ff6b6b",
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  removeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CartScreen;
