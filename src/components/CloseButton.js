import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useHistory } from 'react-router-dom';

const CloseButton = () => {
    const history = useHistory();
    return (
        <TouchableOpacity onPress={() => history.push('/store')}>
            <Text style={styles.close}>Back</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    close: {
        textAlign: 'left',
        padding: 10,
    },
  });

export default CloseButton;
