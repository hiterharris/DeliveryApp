import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import BackButton from '../../../components/BackButton/BackButton';
import {styles} from './ProductListCSS';
import { useData } from '../../../hooks/useData';

const ProductList = (props) => {
  const { title, cart, setCart } = props;
  const { beer, wine, tobacco, vape } = useData();
  const [data, setData] = useState([])

  useEffect(() => {
    if (title === 'Beer') setData(beer)
    if (title === 'Wine') setData(wine)
    if (title === 'Tobacco') setData(tobacco)
    if (title === 'Vapes') setData(vape)
  }, [data])

  const addItem = (item) => {
    setCart([...cart, item])
  }

  return (
    <View style={styles.container}>
      <BackButton style={styles.backButton} />
      <View style={styles.itemsList}>
        {data.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => addItem(item)}>
                  <View style={styles.itemCard}>
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
