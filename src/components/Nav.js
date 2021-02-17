import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

const Nav = () => {
  return (
    <View style={styles.nav}>
        <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Home</Text>
        </Link>
        <Link to="/store" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Products</Text>
        </Link>
        <Link to="/cart" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Cart</Text>
        </Link>
    </View>
)};

const styles = StyleSheet.create({
    nav: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    navItem: {
        flex: 1,
        alignItems: "center",
        padding: 10
    },
});

export default Nav;
