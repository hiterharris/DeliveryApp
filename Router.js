import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './src/screens/Home/Home';
import Store from './src/screens/Store/Store';
import Cart from './src/screens/Cart/Cart';
import ProductList from './src/screens/Store/components/ProductList';
import { NativeRouter, Route } from 'react-router-native';
import { useSelector } from 'react-redux';
import Nav from './src/components/Nav';

const Router = () => {
  const products = useSelector(state => state.products.productCardData);
  const cart = useSelector(state => state.products.cart);
  const [selectedProduct, setSelectedProduct] = useState({});

  return (
    <NativeRouter>
    <View style={styles.container}>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/store"render={() => (<Store products={products} setSelectedProduct={setSelectedProduct} />)}/>
      <Route exact path="/productlist" render={() => (<ProductList data={selectedProduct} />)}/>
      <Route exact path="/cart" render={() => (<Cart data={cart} />)}/>
    </View>
  </NativeRouter>
)};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
});

export default Router;
