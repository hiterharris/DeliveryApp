import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Cart = (props) => {
    const { data } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cart</Text>
            {data.map((item, index) => {
                return (
                    <View style={styles.itemCard} key={index}>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                )
            })}
        </View>
    )};

const styles = StyleSheet.create({
    container: {
        
    },
    title: {
        textAlign: 'center',
    }
});

export default Cart;
