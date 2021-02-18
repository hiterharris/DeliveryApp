import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

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
                            <Image style={styles.image} source={item.image} />
                        </View>
                    )
                })}
            </View>
        </View>
    )};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    header: {
        textAlign: 'center',
        fontSize: 24,
        margin: 10,
    },
    itemsList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    itemCard: { 
        alignItems: 'center',
        margin: 20,
        // marginLeft: 20,
        // marginRight: 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
    },
    image: {
        width: 100,
        height: 100
    }
});

export default Cart;
