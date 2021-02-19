import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import BackButton from '../../../components/BackButton';
import {styles} from './ProductListCSS';

const ProductList = (props) => {
  const { data, addItem } = props;
  return (
    <View style={styles.container}>
      <BackButton style={styles.backButton} />
      <View style={styles.itemsList}>
        {data.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => addItem(item)}>
                <View style={styles.itemCard} key={index}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Image style={styles.image} source={{uri: item.image}} />
                </View>
              </TouchableOpacity>
            )
        })}
      </View>
    </View>
)};

export default ProductList;
