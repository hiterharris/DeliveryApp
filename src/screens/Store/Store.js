import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useHistory } from 'react-router-dom';

const Store = (props) => {
    const { products, setSelectedProduct } = props;
    const history = useHistory();

    const handleSelectProduct = (list) => {
        setSelectedProduct(list);
        history.push('/productlist');
    };

    return (
        <View style={styles.container}>
            {products.map((item, index) => {
                return (
                    <View style={styles.productCard} key={index}>
                        <TouchableOpacity onPress={() => handleSelectProduct(item.data)}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Image style={styles.image} source={item.image} />
                        </TouchableOpacity>
                    </View>
                )
            })}
        </View>
    )};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
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
