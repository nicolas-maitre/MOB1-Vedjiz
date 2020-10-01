import React from 'react';
import { View, Text, ScrollView, ImageBackground, Image, Alert, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {ip, port} from "../components/Helpers"

export default function Profil() {

    return (
        <ImageBackground
            source={require('../pictures/Moutains.jpg')}
            style={styles.background}
            blurRadius={1}
        >
            <View style={styles.detailProduct}>
                <View style={styles.productBackground}>
                    <ScrollView>    
                        <Text>💰 </Text>
                        <Text>📦 </Text>
                    </ScrollView>        
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
    detailProduct: {
        justifyContent: "center",
        alignItems: "center",
    },
    productBackground: {
        marginTop: 20,
        width: Dimensions.get("window").width - 20,
        height: Dimensions.get("window").height - 120,
        backgroundColor: "rgba(200, 200, 200, 0.8)",
        padding: 40
    },
    picture: {
        width: "100%",
        height: 150,
        resizeMode: 'contain',
        overflow: "hidden",

        borderWidth: 1,
        borderRadius: 100,
    },
    details: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20
    },
    description: {
        height: "20%",
        marginBottom: 20,
    },
    descriptionText: {
        lineHeight: 25,
    },
    noBorders: {
        borderBottomColor: "transparent",
    },
});