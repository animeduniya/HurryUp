import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const products = [
  { id: '1', name: 'Milk', price: '₹50', image: require('../assets/milk.png') },
  { id: '2', name: 'Bread', price: '₹40', image: require('../assets/bread.png') },
  { id: '3', name: 'Eggs', price: '₹60', image: require('../assets/eggs.png') }
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚀 HurryUp - Blinkit Clone</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f8f8' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  card: { backgroundColor: '#fff', padding: 15, marginVertical: 10, borderRadius: 10, alignItems: 'center' },
  image: { width: 100, height: 100, marginBottom: 10 },
  name: { fontSize: 18, fontWeight: 'bold' },
  price: { fontSize: 16, color: 'green' }
});

export default HomeScreen;
