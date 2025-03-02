import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to HurryUp!</Text>
      <Button title="Logout" onPress={() => navigation.replace('Login')} />
    </View>
  );
};

export default HomeScreen;
