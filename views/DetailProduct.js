import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, Image, Alert } from 'react-native';
import Styles from "../src/styles/DetailProduct"

export default class DetailProduct extends Component {
    constructor({ route }) {
        super();        
        const { product }  = route.params;
        this.state={
            product: product,
        }
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
                            <Image source={{ uri: `http://192.168.1.103/storage/pictures/${this.state.product.picture}` }} style={Styles.picture} />
                            <View style={Styles.details}>
                                <Text>💰 {this.state.product.price} CHF / {this.state.product.unit}</Text>
                                <Text>📦 {this.state.product.stock} disponibles(s)</Text>
                            </View>
                            <ScrollView style={Styles.description}>
                                <Text style={Styles.descriptionText}>{this.state.product.details}</Text>
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
