import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Styles from '../src/styles/Product';
export default class Product extends Component {
    getDetails({navigation}, product) {
        // Alert.alert("My product", JSON.stringify(product));
        navigation.navigate("DetailProduct", {product: product})
    }
    addToMarket(product) {
        Alert.alert("Market", `+1 ${product.name}`);
    }
    render() {
        const { navigation } = this.props;
        return (
            <View style={Styles.background}>
                <TouchableOpacity style={Styles.product} onPress={() => this.getDetails({navigation}, this.props.product)}>
                    <Image style={Styles.picture} source={{ uri: `http://192.168.1.103/storage/pictures/${this.props.product.picture}` }} />
                    <View style={Styles.informations}>
                        <Text style={Styles.title} numberOfLines={2}>{this.props.product.name}</Text>
                        <Text style={Styles.lastUpdate} numberOfLines={1} ellipsizeMode="clip" >{this.props.product.updatedAt}</Text>
                        <Text style={Styles.description} ellipsizeMode="tail" numberOfLines={1}>{this.props.product.details}</Text>
                        <Text style={Styles.stock} >📦 {this.props.product.stock} disponibles(s)</Text>
                        <Text style={Styles.price} >💰 {this.props.product.price} CHF / {this.props.product.unit}</Text>
                    </View>
                </TouchableOpacity>
                <View style={Styles.market}>
                    <TouchableOpacity
                        onPress={() => this.addToMarket(this.props.product)}>
                        <Icon name="shopping-basket-add" size={26} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}