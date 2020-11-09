import React from 'react';
import axios from 'axios';

import { View, ScrollView, Image, ImageBackground, StyleSheet, Dimensions, Text, TouchableOpacity, Alert, RefreshControl } from 'react-native';
import { isEmpty, ip, port } from '../components/Helpers';
// import {ip, port} from '../../app.json';
import { AuthContext } from '../components/Context';

import Splash from './Splash';
import { TextInput } from 'react-native-gesture-handler';

axios.defaults.timeout = 500;

export default function StockConfirmation({ route }) {
    const { signOut, userToken } = React.useContext(AuthContext);
    const { products } = route.params;
    return (
        <ImageBackground
            source={require('../pictures/Moutains.jpg')}
            style={styles.background}
            blurRadius={1}
        >
            <View style={styles.userBackground}>
                <Text style={styles.title}>Confirmation</Text>
                <Text>Products data:</Text>
                <Text>{JSON.stringify(products)}</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: null,
        height: Dimensions.get('window').height,
        justifyContent: "center",
        alignItems: "center",
    },
    userBackground: {
        marginTop: 20,
        width: Dimensions.get("window").width - 20,
        height: Dimensions.get("window").height - 120,
        backgroundColor: "rgba(200, 200, 200, 0.8)",
        padding: 40
    },
    title: {
        width: '100%',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: "bold",
        textDecorationLine: "underline",
        textTransform: "capitalize",
    },
    info: {
        width: "100%",
        textAlign: 'left',
        lineHeight: 150,
        fontSize: 30,
    },
    picture: {
        width: "100%",
        height: 150,
        resizeMode: 'contain',
        overflow: "hidden",

        borderWidth: 1,
        borderRadius: 100,
    },
    arrowBtn: {
        backgroundColor: "rgba(150, 150, 150, 0.8)",
        borderRadius: 10,
        marginTop: 20,
        padding: 10,
        width: 50,
        textAlign: 'center',
        fontSize: 20,
    },
    productName: {
        marginTop: 20,
        fontSize: 25,
    },
    navButtons: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    stockForm: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    formLabel: {
        marginTop: 30,
        fontSize: 20
    },
    formInput: {
        marginTop: 20,
        fontSize: 20,
        color: "white",
        backgroundColor: "rgba(100, 100, 100, 0.8)",
        padding: 10,
        borderRadius: 10,
    },
    okBtn: {
        backgroundColor: "rgba(150, 150, 150, 0.8)",
        borderRadius: 10,
        marginTop: 20,
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
    },
    logout: {
        backgroundColor: "rgba(150, 0, 0, 0.8)",
    },
    error: {
        flex: 1,
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginTop: '50%',
        textShadowColor: '#000',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 7,
    }
});