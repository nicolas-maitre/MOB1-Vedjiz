import { StyleSheet, Dimensions } from 'react-native';

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
    providerGroup: {
        borderWidth: 1,
        borderColor: "transparent",
        borderTopColor: "rgba(0, 0, 0, 0.2)",
        paddingTop: 20,
    },
    providerTitle: {
        fontSize: 20,
        textDecorationLine: "underline",
        marginBottom: 10
    },
    providers: {        
        height: 100,
    },
    provider: {
        padding: 2,
        paddingLeft: 20,
        borderWidth: 1,
        borderColor: "transparent",
        borderBottomColor: "rgba(0, 0, 0, 0.2)",        
    },
    noBorders: {
        borderBottomColor: "transparent",
    }
});

export default styles;