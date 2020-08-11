import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, TouchableHighlight, Alert } from 'react-native';
import Styles from '../src/styles/Register_Login';
import Icon from 'react-native-vector-icons/Ionicons';
import {isEmpty} from './Helpers';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            showPassword: false,
            token: "",
            submitHover: false
        };
    }

    showPassword() {
        this.setState({ showPassword: !this.state.showPassword });
    }

    login(data) {
        //signIn(data);
    }

    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.inputGroups}>
                    <Text style={Styles.label}>Token:</Text>
                    <TextInput
                        style={Styles.textInput}
                        placeholderTextColor="rgb(180, 180, 180)"
                        placeholder="re5t40-89sdf7-v96dc5"
                        value={this.state.token}
                        onChangeText={value => this.setState({ token: value })}
                        secureTextEntry={!this.state.showPassword} />
                    <TouchableOpacity
                        style={Styles.btnEye}
                        onPress={this.showPassword.bind(this)}
                    >
                        <Icon name={this.state.showPassword ? "ios-eye-off-outline" : "ios-eye-outline"} size={26} color="white" />
                    </TouchableOpacity>
                </View>

                <View
                    pointerEvents={isEmpty(this.state.token) ? "none" : "auto"}
                    style={this.state.submitHover ? Styles.submitHover : Styles.submit}
                    onTouchStart={() => {
                        this.setState({ submitHover: true }),
                        this.login(this.state.token)
                    }}
                    onTouchEnd={() => this.setState({ submitHover: false })}
                >
                    <Text style={Styles.label}>Se connecter</Text>
                </View>
            </View>
        )
    }
}