import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './BackButtonCSS';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
    const history = useHistory();
    return (
        <TouchableOpacity onPress={() => history.push('/store')}>
            <Text style={styles.close}>Back</Text>
        </TouchableOpacity>
    )
}

export default BackButton;
