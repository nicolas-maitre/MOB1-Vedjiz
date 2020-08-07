import React, { Component } from 'react';
import Styles from '../src/styles/Register_Login';
import { Text, View, TextInput } from 'react-native';

export default class Register extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.inputGroups}>
                    <Text style={Styles.label}>Prénom:</Text>
                    <TextInput
                        style={Styles.textInput}
                        placeholderTextColor="rgb(180, 180, 180)"
                        placeholder="Diogo" />
                </View>
                <View style={Styles.inputGroups}>
                    <Text style={Styles.label}>Nom:</Text>
                    <TextInput
                        style={Styles.textInput}
                        placeholderTextColor="rgb(180, 180, 180)"
                        placeholder="Vieira" />
                </View>
                <View style={Styles.inputGroups}>
                    <Text style={Styles.label}>N°:</Text>
                    <TextInput
                        style={Styles.textInput}
                        placeholder="Numéro de téléphone"
                        placeholderTextColor="rgb(180, 180, 180)"
                        keyboardType="phone-pad" />
                </View>
            </View>
        )
    }
}