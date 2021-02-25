import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from './StoreCSS';
import { useHistory } from 'react-router-dom';
import { useData } from '../../hooks/useData';

const Store = (props) => {
    const { setSelectedProduct } = props;
    const { products } = useData();
    const history = useHistory();

    const handleSelectProduct = (item) => {
        setSelectedProduct(item)
        history.push('/productlist');
    };

    return (
        <View style={styles.container}>
                {products.map((item, index) => {
                    return (
                        <View style={styles.productCard} key={index}>
                            <TouchableOpacity onPress={() => handleSelectProduct(item)}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Image style={styles.image} source={{uri: item.image}} />
                            </TouchableOpacity>
                        </View>
                    )
                })}
        </View>
    )};

export default Store;
