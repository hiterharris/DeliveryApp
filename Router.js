import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from './RouterCSS';
import Home from './src/screens/Home/Home';
import Store from './src/screens/Store/Store';
import Cart from './src/screens/Cart/Cart';
import ProductList from './src/screens/Store/components/ProductList';
import { NativeRouter, Route } from 'react-router-native';
import { useSelector } from 'react-redux';
import Nav from './src/components/Nav';

const Router = () => {
  const products = useSelector(state => state.products.productCardData);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [selectedItem, setSelectedItem] = useState({});
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setSelectedItem(item);
    setCart([...cart, item]);
  }

  return (
    <NativeRouter>
      <View style={styles.container}>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/store"render={() => (<Store products={products} setSelectedProduct={setSelectedProduct} />)}/>
        <Route exact path="/productlist" render={() => (<ProductList data={selectedProduct} addItem={addItem} />)}/>
        <Route exact path="/cart" render={() => (<Cart data={cart} />)}/>
      </View>
  </NativeRouter>
)};

export default Router;
