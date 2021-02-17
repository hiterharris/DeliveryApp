import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
  return (
    <View>
        <Text style={styles.title}>Home Page</Text>
    </View>
)};

const styles = StyleSheet.create({
  title: {
      textAlign: 'center',
      fontSize: 32,
  }
});

export default Home;
