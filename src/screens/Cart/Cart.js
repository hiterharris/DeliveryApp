import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './CartCSS';

const Cart = (props) => {
    const { data } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.header}>My Cart</Text>
            <View style={styles.itemsList}>
                {data.map((item, index) => {
                    return (
                        <View key={index} style={styles.itemCard} key={index}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Image style={styles.image} source={{uri: item.image}} />
                        </View>
                    )
                })}
            </View>
        </View>
    )};

export default Cart;
