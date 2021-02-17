import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CloseButton = (props) => {
    const { setOpen } = props
    return (
        <TouchableOpacity onPress={() => setOpen(false)}>
            <Text style={styles.close}>Close</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    close: {
        textAlign: 'right',
        padding: 10,
    },
  });

export default CloseButton;
