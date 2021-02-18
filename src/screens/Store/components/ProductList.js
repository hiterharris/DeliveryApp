import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import CloseButton from '../../../components/CloseButton';

const ProductList = (props) => {
  const { data, addItem } = props;
  return (
      <View style={styles.container}>
        <CloseButton style={styles.closeButton} />
        <View style={styles.itemsList}>
          {data.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => addItem(item)}>
                  <View style={styles.itemCard} key={index}>
                      <Text style={styles.title}>{item.title}</Text>
                      <Image style={styles.image} source={item.image} />
                  </View>
                </TouchableOpacity>
              )
          })}
        </View>
      </View>
)};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: windowHeight,
    width: windowWidth,
    marginTop: 10,
  },
  itemsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  itemCard: { 
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
  },
  closeButton: {
      position: 'absolute',
  },
  image: {
    width: 100,
    height: 100
  }
});

export default ProductList;
