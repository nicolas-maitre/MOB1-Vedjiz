import React from 'react';
import axios from 'axios';

import { View, ScrollView, ImageBackground, StyleSheet, Dimensions, Text, TouchableOpacity, Alert } from 'react-native';
import { isEmpty, ip, port } from '../components/Helpers';
import { AuthContext } from '../components/Context';

import Splash from './Splash';
axios.defaults.timeout = 500;

export default function Profil(props) {    
    const { navigation } = props;
    const { userToken } = React.useContext(AuthContext);
    const [isLoading, setIsLoading] = React.useState(true);
    const [refreshing, setRefreshing] = React.useState(false);
    const [me, setMe] = React.useState("");
    React.useEffect(async () => {
        setIsLoading(true)
        var myData = await getMyData()
        setMe(myData)
        setIsLoading(false)
    }, []);

    async function getMyData() {
        var myInformations = [];

        var me  = await axios.get(`http://${ip}:${port}/api/me`, { headers: { Authorization: `Bearer ${userToken}` } })
        var balance = await axios.get(`http://${ip}:${port}/api/me/balance`, { headers: { Authorization: `Bearer ${userToken}` } })
        myInformations = me.data.data
        myInformations["balance"] = balance.data

        return myInformations;
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
            <View style={styles.detailProduct}>
                <View style={styles.productBackground}>
                    <ScrollView>    
                        <Text>{me.firstname}</Text>
                        <Text>{me.lastname}</Text>
                        <Text>💰balance:</Text>
                        <Text>mon débit: {me.balance.debit}</Text>
                        <Text>mon crébit: {me.balance.credit}</Text>
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