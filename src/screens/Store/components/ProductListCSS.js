import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
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
    backButton: {
        position: 'absolute',
    },
    image: {
      width: 100,
      height: 100
    }
  });