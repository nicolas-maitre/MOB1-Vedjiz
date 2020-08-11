import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: null,
        height: Dimensions.get('window').height,
    },
});

export default styles;