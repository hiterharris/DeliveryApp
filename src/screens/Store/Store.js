import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import {productCardData} from '../../assets/data/beerList';
import ProductList from './components/ProductList';

const Store = () => {
    const [selectedProduct, setSelectedProduct] = useState({})
    const [open, setOpen] = useState(false)
    
    const handleSelectProduct = (beer) => {
        setSelectedProduct(beer);
        setOpen(true)
    };

    return (
        <View style={styles.container}>
            {productCardData.map((item, index) => {
                return (
                    <View style={styles.productCard} key={index}>
                        <TouchableOpacity onPress={() => handleSelectProduct(item.data)}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Image style={styles.image} source={item.image} />
                        </TouchableOpacity>
                    </View>
                )
            })}
            {open ? <ProductList data={selectedProduct} setOpen={setOpen} /> : null}
        </View>
    )};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    productCard: {
        margin: 25,
    },
    title: {
        textAlign: 'center',
        fontSize: 32,
    },
    image: {
        width: 100,
        height: 100
    }
});

export default Store;
