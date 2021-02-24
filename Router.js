import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Cart, Home, Store, ProductList } from './src/screens';
import { NativeRouter, Route } from 'react-router-native';
import Nav from './src/components/Nav/Nav';
import { useData } from './src/hooks/useData';

const Router = () => {
  const { products } = useData();
  const [selectedProduct, setSelectedProduct] = useState({});
  const [cart, setCart] = useState([]);

  return (
    <NativeRouter>
      <View style={{ marginTop: 40}}>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/store"render={() => (<Store products={products} setSelectedProduct={setSelectedProduct} />)}/>
        <Route exact path="/productlist" render={() => (<ProductList title={selectedProduct.title} cart={cart} setCart={setCart} />)}/>
        <Route exact path="/cart" render={() => (<Cart cart={cart} setCart={setCart} />)}/>
      </View>
  </NativeRouter>
)};

export default Router;
