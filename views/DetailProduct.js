import React, { Component } from 'react';
import { View, Text, ScrollView, ImageBackground, Image, StyleSheet, Dimensions } from 'react-native';

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
                style={styles.background}
                blurRadius={1}
            >
                <View>
                    <ScrollView>
                        <Text>My product</Text>
                        <Image source={{ uri: "my link" }}></Image>
                        <Text>Price by quantity</Text>
                        <Text>Stock</Text>
                        <Text>Description of the product</Text>
                        <View>
                            <ScrollView>
                                {/* {getProviders().map(provider => <Text>{provider}</Text>)} */}
                                <Text>Provider One</Text>
                                <Text>Provider Two</Text>
                                <Text>Provider Three</Text>
                            </ScrollView>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: null,
        height: Dimensions.get('window').height,
    },
});