import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import products from "../data/productsData"; // Importa los datos locales
import { Card, Title, Paragraph, Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native"; // Importa useNavigation

const Home = () => {
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation(); // Usamos useNavigation para navegar

  // Simula la carga de datos locales
  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      // Simula un retardo para la carga
      setTimeout(() => {
        setDisplayedProducts(products);
        setLoading(false);
        setRefreshing(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const onRefresh = () => {
    setRefreshing(true);
    fetchProducts();
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Catálogo" />
        <Appbar.Action
          icon="cart"
          onPress={() => navigation.navigate("Cart")} // Navega al carrito
        />
      </Appbar.Header>
      <View style={styles.container}>
        <FlatList
          data={displayedProducts}
          keyExtractor={(item) => item.id.toString()} // Asegúrate de que item.id sea único y de tipo string
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <Card.Content>
                <Title style={styles.cardTitle}>{item.name}</Title>
                <Paragraph>Precio: ${item.price}</Paragraph>
                <Paragraph>Categoría: {item.category}</Paragraph>
              </Card.Content>
            </Card>
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
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
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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

export default Home;
