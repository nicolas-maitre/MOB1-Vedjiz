import React from 'react';
import { View, Text, ScrollView, ImageBackground, Image, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Styles from "../src/styles/DetailProduct"
import {ip, port} from "../components/Helpers"

export default function DetailProduct({ route }) {
    const { product } = route.params;

    function addToMarket(product) {
        Alert.alert("Market", `${product.name} added to market`);
    }
    function getProviders() {

    }
    return (
        <ImageBackground
            source={require('../src/pictures/Moutains.jpg')}
            style={Styles.background}
            blurRadius={1}
        >
            <View style={Styles.detailProduct}>
                <View style={Styles.productBackground}>
                    <Image source={{ uri: `http://${ip}:${port}/storage/pictures/${product.picture}` }} style={Styles.picture} />
                    <View style={Styles.details}>
                        <Text>💰 {product.price} CHF / {product.unit}</Text>
                        <Text>📦 {product.stock} disponibles(s)</Text>
                    </View>
                    <ScrollView style={Styles.description}>
                        <Text style={Styles.descriptionText}>{product.details}</Text>
                    </ScrollView>
                    <View style={Styles.providerGroup}>
                        <Text style={Styles.providerTitle}>Fournisseur(s):</Text>
                        <ScrollView style={Styles.providers}>
                            {/* {getProviders().map(provider => <Text>{provider}</Text>)} */}
                            <Text style={Styles.provider}>Provider One</Text>
                            <Text style={Styles.provider}>Provider Two</Text>
                            <Text style={Styles.provider}>Provider Three</Text>
                            <Text style={Styles.provider}>Provider Three</Text>
                            <Text style={Styles.provider}>Provider Three</Text>
                            <Text style={[Styles.provider, Styles.noBorders]}>Provider Three</Text>
                        </ScrollView>
                    </View>                    
                    <View style={Styles.market}>
                        <TouchableOpacity
                            onPress={() => addToMarket(product)}>
                            <Icon name="shopping-basket-add" size={26} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

