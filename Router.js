import React from 'react';
import { StyleSheet, View , Text } from 'react-native';
import Home from './src/screens/Home/Home';
import ProductList from './src/screens/Store/Store';
import { NativeRouter, Route, Link } from 'react-router-native';

const Router = () => {
  return (
    <NativeRouter>
    <View style={styles.container}>
      <View style={styles.nav}>
          <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
              <Text>Home</Text>
          </Link>
          <Link to="/ProductList" underlayColor="#f0f4f7" style={styles.navItem}>
              <Text>Products</Text>
          </Link>
      </View>
      <Route exact path="/" component={Home} />
      <Route path="/productlist" component={ProductList} />
    </View>
  </NativeRouter>
)};

const styles = StyleSheet.create({
  container: {
      flex: 1,
    marginTop: 25,
    padding: 10,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
});

export default Router;
