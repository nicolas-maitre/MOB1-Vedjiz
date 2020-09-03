import React from 'react';
import axios from 'axios';
import { FlatList, View, ScrollView, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { isEmpty, ip, port } from '../components/Helpers';
import { AuthContext } from '../components/Context';

import Splash from './Splash';
import Product from "../components/Product";

export default function ListOfProduct(props) {
    const { navigation } = props;
    const [isLoading, setIsLoading] = React.useState(true);
    const [products, setProducts] = React.useState([{
        name: "",
        details: "",
        price: "",
        unit: "",
        stock: "",
        picture: "",
        current: false,
        suppliers: [""],
        updatedAt: "",
    }]);
    const { userToken } = React.useContext(AuthContext);

    React.useEffect(() => {
        (async () => {
            try {
                var res = await axios.get(`http://${ip}:${port}/api/products`, { headers: { Authorization: `Bearer ${userToken}` } })
                setProducts(res.data.data)
                setIsLoading(false)

            } catch (e) {
                console.log(e.message)

            }
        })()
    });

    if (isLoading) {
        return <Splash />;
    }
    return (
        <ImageBackground
            source={require('../src/pictures/Moutains.jpg')}
            style={styles.background}
            blurRadius={1}
        >
            <View>
                <ScrollView>

                    {products.map((product, key) => {
                        return (
                            <Product navigation={navigation} product={product} />

                        );
                    })}
                </ScrollView>

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