import React, { useState, Suspense } from 'react';
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
        <Route path="/store"render={() => (
          <Suspense fallback={<Text>Loading...</Text>}>
            <Store products={products} setSelectedProduct={setSelectedProduct} />
          </Suspense>
        )}/>
        <Route exact path="/productlist" render={() => (
          <Suspense fallback={<Text>Loading...</Text>}>
            <ProductList title={selectedProduct.title} cart={cart} setCart={setCart} />
          </Suspense>
        )}/>
        <Route exact path="/cart" render={() => (
          <Suspense fallback={<Text>Loading...</Text>}>
            <Cart cart={cart} setCart={setCart} />
          </Suspense>
        )}/>
      </View>
  </NativeRouter>
)};

export default Router;
