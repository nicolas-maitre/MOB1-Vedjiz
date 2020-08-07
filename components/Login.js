import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import Styles from '../src/styles/Register_Login';
// import Icon from 'react-native-vector-icons/Ionicons';

export default class Login extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.inputGroups}>
                    <Text style={Styles.label}>Tokken:</Text>
                    <TextInput
                        style={Styles.textInput}
                        placeholderTextColor="rgb(180, 180, 180)"
                        placeholder="re5t40-89sdf7-v96dc5"
                        secureTextEntry={true} />
                </View>
            </View>
        )
    }
}