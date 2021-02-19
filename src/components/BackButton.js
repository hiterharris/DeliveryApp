import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './BackButtonCSS';
import { useHistory } from 'react-router-dom';

const BackButton = (props) => {
    const { setSelectedProduct } = props;
    const history = useHistory();

    const clickHandler = () => {
        setSelectedProduct({});
        history.push('/store')
    }
    return (
        <TouchableOpacity onPress={() => clickHandler()}>
            <Text style={styles.close}>Back</Text>
        </TouchableOpacity>
    )
}

export default BackButton;
