import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    header: {
        textAlign: 'center',
        fontSize: 24,
        margin: 10,
    },
    itemsList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    itemCard: { 
        alignItems: 'center',
        margin: 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
    },
    image: {
        width: 100,
        height: 100
    }
});