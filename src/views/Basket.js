import React from 'react';
import axios from 'axios';
import { FlatList, View, ScrollView, ImageBackground, StyleSheet, Dimensions, Text, Image, TouchableOpacity, Alert, RefreshControl, Picker } from 'react-native';
// import {Picker} from '@react-native-community/picker';

import Splash from './Splash';
import BasketProduct from "../components/BasketProduct";
import { AuthContext } from '../components/Context';
import AsyncStorage from '@react-native-community/async-storage';

export default function Basket(props) {
    const { navigation } = props;
    const { addToBasket, basket } = React.useContext(AuthContext);

    const [isLoading, setIsLoading] = React.useState(false);
    const [refreshing, setRefreshing] = React.useState(false);
    const [pickerList, setPickerList] = React.useState([]);
    React.useEffect(() => {
        async function fetchData() {
            await getProductsPickerList()
        }
        fetchData()
    }, [basket])
    async function getProductsPickerList() {
        try {
            var res = await axios.get('/products')
            let products = res.data.data
            if (basket === null) {
                setPickerList(products)
            }
            else {
                let pickerListTemp = products.filter( product => {
                    return !basket.find(({id}) => product.id == id)
                })
                setPickerList(pickerListTemp)
            }
        }
        catch (e) {
            console.log(e.message)
            Alert.alert("😵 Erreur de connexion", "Une erreur est survenue lors de la connexion!\nMerci de vérifier que vous ayez bien une connexion internet...")
            setPickerList([])
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
            <View style={pickerList.length > 0 ?{height: Dimensions.get('window').height*0.6} : null} >
                <FlatList
                    
                    data={basket}
                    keyExtractor={(product) => product.id.toString()}
                    ListEmptyComponent={
                        <View style={{
                            flex: 1,
                            height: Dimensions.get('window').height
                        }}>
                            <Text style={styles.error}>Veuillez tirer vers le bas pour raffraîchir la page</Text>                            
                        </View>
                    }
                    renderItem={(product) => (
                        <BasketProduct product={product.item}/>
                    )}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={getProductsPickerList}
                        />
                    }
                />
            </View>
            <View>                
            <Text style={styles.pickerTitle}>Produits à ajouter: </Text>
                {pickerList.length > 0 ? (
                    <Picker
                        style={styles.picker}
                        onValueChange={(value) => pickerValueChange(value)} >
                        {pickerList.map((product) => (
                            <Picker.item 
                            label={product.name} 
                            value={product} 
                            key={product.id}/>
                        ))}
                    </Picker>
                ) : null}
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
    error: {
        flex: 1,
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginTop: '50%',
        textShadowColor: '#000',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 7,
    },
    picker: {
        borderWidth: 1,
        borderTopColor: "rgba(0, 0, 0, 1)",
        paddingTop: 20,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    pickerTitle: {

        borderWidth: 1,
        borderColor: "transparent",
        borderTopColor: "rgba(0, 0, 0, 1)",
        paddingTop: 20,
        position: 'relative',
        left: 0,
        right: 0,
        
        fontSize: 20,
        textDecorationLine: "underline",
    },
});