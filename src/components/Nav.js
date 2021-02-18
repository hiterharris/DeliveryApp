import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './NavCSS';
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

export default Nav;
