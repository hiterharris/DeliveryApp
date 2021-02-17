import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const FoodDetails = (props) => {
  const { data, setOpen } = props;
  return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setOpen(false)}>
          <Text>X</Text>
        </TouchableOpacity>
        <Text>{data.name}</Text>
      </View>
)};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
});

export default FoodDetails;
