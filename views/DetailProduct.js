import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, Image } from 'react-native';
import Styles from "../src/styles/DetailProduct"

export default class DetailProduct extends Component {
    constructor() {
        super();
    }
    addToMarket(product) {
        Alert.alert("Market", `${product.name} added to market`);
    }
    getProviders() {

    }
    render() {
        return (
            <ImageBackground
                source={require('../src/pictures/Moutains.jpg')}
                style={Styles.background}
                blurRadius={1}
            >
                <View style={Styles.detailProduct}>
                        <View style={Styles.productBackground}>
                            <Image source={{ uri: "http://192.168.1.103/storage/pictures/tomatoes.png" }} style={Styles.picture} />
                            <Text style={Styles.title}>tomate coeur de boeuf</Text>
                            <View style={Styles.details}>
                                <Text>💰 2.3 CHF / pièce</Text>
                                <Text>📦 26 disponibles(s)</Text>
                            </View>
                            <ScrollView style={Styles.description}>
                                <Text style={Styles.descriptionText}>It's a small description of an inexisting product but for the test i want a great product for ingenious people! please purpose ideas 😉 It's a small description of an inexisting product but for the test i want a great product for ingenious people! please purpose ideas 😉 It's a small description of an inexisting product but for the test i want a great product for ingenious people! please purpose ideas 😉</Text>
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
                        </View>
                </View>
            </ImageBackground>
        )
    }
}
