import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import products from '../../assets/data/products';
import ProductDetails from './components/ProductDetails';

const ProductList = () => {
    const [selectedProduct, setSelectedProduct] = useState({})
    const [open, setOpen] = useState(false)

    const handleSelectProduct = (product) => {
        setSelectedProduct(product);
        setOpen(true)
    };

    return (
        <View>
            <Text style={styles.title}>Products</Text>
            {products.map((product, index) => {
                return (
                    <View key={index}>
                        <TouchableOpacity onPress={() => handleSelectProduct(product)}>
                            <Text>{product.name}</Text>
                        </TouchableOpacity>
                    </View>
                )
            })}
            {open ? <ProductDetails data={selectedProduct} setOpen={setOpen} /> : null}
        </View>
    )};

const styles = StyleSheet.create({
  title: {
      textAlign: 'center',
      fontSize: 32,
  }
});

export default ProductList;
