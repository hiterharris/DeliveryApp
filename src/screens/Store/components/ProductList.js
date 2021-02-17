import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import CloseButton from '../../../components/CloseButton';

const ProductList = (props) => {
  const { data, setOpen } = props;
  return (
      <View style={styles.container}>
        <CloseButton style={styles.closeButton} setOpen={setOpen} />
        {data.map((item, index) => {
            return (
                <View style={styles.itemCard} key={index}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Image style={styles.image} source={item.image} />
                </View>
            )
        })}
      </View>
)};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    position: 'absolute',
    height: windowHeight * .85,
    width: windowWidth * .95,
    borderWidth: 1,
    borderRadius: 10,
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
