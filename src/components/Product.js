import React from 'react';
import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Styles from '../styles/Product';
import {ip, port} from "./Helpers"
export default function Produc(props) {
    function getDetails({ navigation }, product) {
        // Alert.alert("My product", JSON.stringify(product));
        navigation.navigate("DetailProduct", { product: product })
    }
    function addToMarket(product) {
        Alert.alert("Market", `+1 ${product.name}`);
    }
    const { navigation } = props;
    return (
        <View style={Styles.background}>
            <TouchableOpacity style={Styles.product} onPress={() => getDetails({ navigation }, props.product)}>
                <Image style={Styles.picture} source={{ uri: `http://${ip}:${port}/storage/pictures/${props.product.picture}` }} />
                <View style={Styles.informations}>
                    <Text style={Styles.title} numberOfLines={2}>{props.product.name}</Text>
                    <Text style={Styles.lastUpdate} numberOfLines={1} ellipsizeMode="clip" >{props.product.updatedAt}</Text>
                    <Text style={Styles.description} ellipsizeMode="tail" numberOfLines={1}>{props.product.details}</Text>
                    <Text style={Styles.stock} >📦 {props.product.stock} disponibles(s)</Text>
                    <Text style={Styles.price} >💰 {props.product.price} CHF / {props.product.unit}</Text>
                </View>
            </TouchableOpacity>
            <View style={Styles.market}>
                <TouchableOpacity
                    onPress={() => addToMarket(props.product)}>
                    <Icon name="shopping-basket-add" size={26} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
