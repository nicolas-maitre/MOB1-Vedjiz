import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 20,
        color: 'white',
    },
    inputGroups: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        color: 'white',
    },
    textInput: {
        flex: 1,
        color: 'white',
    },
    label: {
        flex: 0,
        fontSize: 15,
        paddingRight: 10,
        color: 'white',
    },
    btnEye: {
        paddingLeft: 10,
    },
    submit: {
        borderRadius: 100,
        width: '40%',
        backgroundColor: 'rgba(35, 71, 205, 0.9)',
        alignSelf: "center",
        textAlign: "center",
        alignItems: "center",
        padding: 10,
        paddingLeft: 20,
        color: 'white',
        shadowColor: 'black',
        shadowRadius: 3,
        shadowOffset: {
            height: 5,
            width: 5
        },
        shadowOpacity: 1,
        elevation: 10,
    },
    submitHover: {
        borderRadius: 100,
        width: '40%',
        backgroundColor: 'rgba(79, 104, 205, 0.9)',
        alignSelf: "center",
        textAlign: "center",
        alignItems: "center",
        padding: 10,
        paddingLeft: 20,
        color: 'white',        
    }
});

export default styles;