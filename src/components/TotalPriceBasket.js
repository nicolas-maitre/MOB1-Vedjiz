import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from './Context';

export default function Login() {
    const [price, setPrice] = React.useState(0)
    const { basket } = React.useContext(AuthContext);

    useEffect(() => {
        var totalPrice = 0
        if(basket.length > 0){
            basket.forEach(({quantity, price}) => {
                totalPrice += price*quantity
            });
        }
        setPrice(totalPrice)
    }, [basket])
    

    return (
        <View style={[styles.container, styles.background]}>
            <Text style={styles.price}>{price.toFixed(2)}</Text>
            <Icon></Icon>
        </View>
    )
}
const styles = StyleSheet.create({
    background: {
        backgroundColor: "rgba(200, 200, 200, 0.5)",
        borderColor: 'transparent',
        marginTop: 3,
        borderWidth: 1,
        color: 'white',
        borderRadius: 1,
        shadowColor: 'black',
        shadowOpacity: 10,
        elevation: 2,
        padding: 10,
    },
    container: {
        padding: 20,
        height: 47
    },
    price: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
})