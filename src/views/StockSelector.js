import React from 'react';
import axios from 'axios';

import { View, ScrollView, Image, ImageBackground, StyleSheet, Dimensions, Text, TouchableOpacity, Alert, RefreshControl } from 'react-native';
import { isEmpty, ip, port } from '../components/Helpers';
// import {ip, port} from '../../app.json';
import { AuthContext } from '../components/Context';

import Splash from './Splash';
import { TextInput } from 'react-native-gesture-handler';
axios.defaults.timeout = 500;

export default function StockSelector({ navigation }) {
    const { signOut, userToken } = React.useContext(AuthContext);

    const [isLoading, setIsLoading] = React.useState(true);
    const [refreshing, setRefreshing] = React.useState(false);
    const [error, setError] = React.useState(true);

    const [products, setProducts] = React.useState([]);
    const [productIndex, setProductIndex] = React.useState(0);
    const [currentProductStock, setCurrentStock] = React.useState(null);
    const [validatedStocks, setValidatedStocks] = React.useState([]);
    // const [currentProduct, setCurrentProduct] = React.useState({})

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            setIsLoading(true)
            await getProducts()
            setIsLoading(false)
        });
        return unsubscribe;
    }, [navigation]);

    async function getProducts() {
        try {
            setRefreshing(true)
            var productsRes = await axios.get(`/products`)
            setError(false)
            startStockQuiz(productsRes.data.data);
        }
        catch (e) {
            console.log(e.message)
            Alert.alert("😵 Erreur de connexion", "Une erreur est survenue lors de la connexion!\nMerci de vérifier que vous ayez bien une connexion internet...")
            setError(true)
        }
        finally {
            setRefreshing(false)
        }
    }
    if (isLoading) {
        return <Splash />;
    }
    if (error) {
        return (
            <ImageBackground
                source={require('../pictures/Moutains.jpg')}
                style={styles.background}
                blurRadius={1}
            >
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={getProducts}
                        />
                    }
                >
                    <Text style={styles.error}>Veuillez tirer vers le bas pour raffraîchir la page</Text>
                </ScrollView>
            </ImageBackground>
        );
    }

    function startStockQuiz(newProducts) {
        setProducts(newProducts);
        setProductByIndex(0);
    }

    function setLastProduct(){
        setProductByIndex(productIndex - 1)
    }
    function setNextProduct(){
        setProductByIndex(productIndex + 1)
    }

    function setProductByIndex(index) {
        if(products.length <= 0){
            return;
        }

        //save current stock
        if(currentProductStock !== null){
            var newProducts = [...products];
            newProducts[productIndex].stock = currentProductStock;
            setProducts(newProducts);
        }
        setCurrentStock(null);

        let increaseInd = index >= productIndex;

        //finding a non validated index
        let findIterations = 0 //safety
        while((index < 0 || index >= products.length || validatedStocks.includes(index)) && findIterations < products.length){
            //loop around
            if (index >= (products.length))
                index = 0;
            if (index < 0)
                index = products.length - 1;

            //already validated
            if(validatedStocks.includes(index)){
                if(increaseInd)
                    index++;
                else
                    index--;
            }
            findIterations++;
        }

        setProductIndex(index)
    }
    function confirmProductStock() {
        setValidatedStocks([...validatedStocks, productIndex]); //add index to confirmed list
        //no more items to confirm
        if(validatedStocks.length >= products.length){
            Alert.alert("every item has been validated! 👍")
            navigation.navigate("StockConfirmation", { products })
            return;
        }
        setNextProduct();
    }

    var currentProduct = products[productIndex];
    return (

        <ImageBackground
            source={require('../pictures/Moutains.jpg')}
            style={styles.background}
            blurRadius={1}
        >
            <View style={styles.userBackground}>
                <Text style={styles.title}>Validation du stock</Text>
                <Image source={{ uri: `http://${ip}:${port}/storage/pictures/${currentProduct.picture}` }} style={styles.picture} />
                <View style={styles.navButtons}>
                    <TouchableOpacity onPress={setLastProduct}>
                        <Text style={styles.arrowBtn}>◀</Text>
                    </TouchableOpacity>
                    <Text style={styles.productName}>{currentProduct.name}</Text>
                    <TouchableOpacity onPress={setNextProduct}>
                        <Text style={styles.arrowBtn}>▶</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.stockForm}>
                    <Text style={styles.formLabel}>Stock:</Text>
                    <TextInput style={styles.formInput} onChangeText={setCurrentStock}>{currentProduct.stock}</TextInput>
                    <Text>{currentProduct.unit}</Text>
                    <TouchableOpacity onPress={confirmProductStock}>
                        <Text style={styles.okBtn}>Ok</Text>
                    </TouchableOpacity>
                </View>
                {/* <TouchableOpacity onPress={() => navigation.navigate("Magasin")}>
                    <Text style={styles.back}>Aller au Magasin</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => signOut()}>
                    <Text style={[styles.back, styles.logout]}>Déconnexion</Text>
                </TouchableOpacity> */}
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