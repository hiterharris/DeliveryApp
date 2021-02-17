import React, { useState, useEffect } from 'react';
import { StyleSheet, View , Text } from 'react-native';
import Home from './src/screens/Home/Home';
import Store from './src/screens/Store/Store';
import ProductList from './src/screens/Store/components/ProductList';
import { NativeRouter, Route, Link } from 'react-router-native';
import { useSelector } from 'react-redux'

const Router = () => {
  const products = useSelector(state => state.products.productCardData)
  const [selectedProduct, setSelectedProduct] = useState({})
  
  return (
    <NativeRouter>
    <View style={styles.container}>
      <View style={styles.nav}>
          <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
              <Text>Home</Text>
          </Link>
          <Link to="/store" underlayColor="#f0f4f7" style={styles.navItem}>
              <Text>Products</Text>
          </Link>
      </View>
      <Route exact path="/" component={Home} />
      <Route path="/store"render={() => (<Store products={products} setSelectedProduct={setSelectedProduct} />)}/>
      <Route exact path="/productlist" render={() => (<ProductList data={selectedProduct} />)}/>
    </View>
  </NativeRouter>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
