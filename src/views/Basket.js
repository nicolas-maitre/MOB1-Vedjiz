import React from 'react';
import axios from 'axios';
import { FlatList, View, ScrollView, ImageBackground, StyleSheet, Dimensions, Text, Image, TouchableOpacity, Alert, RefreshControl } from 'react-native';

import Splash from './Splash';
import Product from "../components/Product";

export default function Basket(props) {
    const { navigation } = props;
    const [isLoading, setIsLoading] = React.useState(true);
    const [refreshing, setRefreshing] = React.useState(false);
    const [products, setProducts] = React.useState(async () => getProducts());

    async function getProducts() {
        try {
            setRefreshing(true)
            setIsLoading(true)
            var res = await axios.get('/products')
            setProducts(res.data.data)
        }
        catch (e) {
            console.log(e.message)
            Alert.alert("😵 Erreur de connexion", "Une erreur est survenue lors de la connexion!\nMerci de vérifier que vous ayez bien une connexion internet...")
            setProducts([])
        }
        finally {
            setRefreshing(false)
            setIsLoading(false)
        }
    }

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
                <View style={{
                    marginTop: 20,
                    left: 10,
                    width: Dimensions.get("window").width - 20,
                    height: Dimensions.get("window").height - 120,
                    backgroundColor: "rgba(200, 200, 200, 0.8)",
                    padding: 40
                }}>
                    <Text style={styles.error}>Basket page, working in progress</Text>                            
                </View>
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
    error:{
        flex: 1,
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginTop: '50%',
        textShadowColor: '#000',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 7,
    },
});