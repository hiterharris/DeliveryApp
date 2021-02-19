import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from './StoreCSS';
import { useHistory } from 'react-router-dom';
import { useData } from '../../hooks/useData';

const Store = (props) => {
    const { setSelectedProduct } = props;
    const { productsList } = useData();
    const history = useHistory();

    console.log(productsList.products.data)

    const handleSelectProduct = (item) => {
        setSelectedProduct(item.data);
        history.push('/productlist');
    };

    return (
        <View style={styles.container}>
            {productsList.products.map((item, index) => {
                {console.log(item.data)}
                return (
                    <View style={styles.productCard} key={index}>
                        <TouchableOpacity onPress={(item) => handleSelectProduct(item)}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Image style={styles.image} source={{uri: item.image}} />
                        </TouchableOpacity>
                    </View>
                )
            })}
        </View>
    )};

export default Store;
