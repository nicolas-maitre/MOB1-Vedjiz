import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import Styles from '../src/styles/Register_Login';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            showPassword: false,
            tokken: null
        }
    }

    showPassword() {
        this.setState({showPassword: !this.state.showPassword});
    }

    login(data) {
        Alert.alert(data)
    }

    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.inputGroups}>
                    <Text style={Styles.label}>Tokken:</Text>
                    <TextInput
                        style={Styles.textInput}
                        placeholderTextColor="rgb(180, 180, 180)"
                        placeholder="re5t40-89sdf7-v96dc5"
                        value={this.state.tokken}
                        onChangeText={value => this.setState({tokken: value})}
                        secureTextEntry={!this.state.showPassword} />
                    <TouchableOpacity 
                        style={Styles.btnEye}
                        onPress={this.showPassword.bind(this)}
                        >
                        <Icon name={ this.state.showPassword ? "ios-eye-off-outline" : "ios-eye-outline" } size={26} color="white" />
                    </TouchableOpacity>
                </View>
                <Button title="Se connecter" onPress={() => this.login(this.state.tokken)}/>
            </View>
        )
    }
}