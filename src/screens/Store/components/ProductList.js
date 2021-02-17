import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import CloseButton from '../../../components/CloseButton';

const ProductList = (props) => {
  const { data } = props;
  return (
      <View style={styles.container}>
        <CloseButton style={styles.closeButton} />
        {data.map((item, index) => {
            return (
              <TouchableOpacity>
                <View style={styles.itemCard} key={index}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Image style={styles.image} source={item.image} />
                </View>
              </TouchableOpacity>
            )
        })}
      </View>
)};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: windowHeight,
    width: windowWidth,
  },
  itemCard: {
    alignItems: 'center',
    margin: 10,
  },
  title: {
    textAlign: 'center',
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
