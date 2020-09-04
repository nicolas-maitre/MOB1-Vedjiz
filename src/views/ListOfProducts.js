import React from 'react';
import axios from 'axios';
import { FlatList, View, ScrollView, ImageBackground, StyleSheet, Dimensions , Text,Image, TouchableOpacity, Alert } from 'react-native';
import { isEmpty, ip, port } from '../components/Helpers';
import { AuthContext } from '../components/Context';

import Splash from './Splash';
import Product from "../components/Product";

import Icon from 'react-native-vector-icons/Fontisto';
import Styles2 from '../styles/Product';
export default function ListOfProduct(props) {
    const { navigation } = props;
    const { userToken } = React.useContext(AuthContext);
    const [isLoading, setIsLoading] = React.useState(true);
    var i = 0;
    const [products, setProducts] = React.useState(async () => {
        try {
            var res = await axios.get(`http://${ip}:${port}/api/products`, { headers: { Authorization: `Bearer ${userToken}` } })
            setProducts(res.data.data)
            setIsLoading(false)
        } catch (e) {
            console.log(e.message)

        }
    });


    if (isLoading) {
        return <Splash />;
    }
    return (
        <ImageBackground
            source={require('../pictures/Moutains.jpg')}
            style={styles.background}
            blurRadius={1}
        >
            <View>
                {products &&
                <FlatList
                    data={products}
                    keyExtractor = { (product) => product.id.toString() }
                    renderItem={( product) => (
                        <Product navigation={navigation} product={product.item} />
                        )}
                />
                    }

            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: null,
        height: Dimensions.get('window').height,
    },
});