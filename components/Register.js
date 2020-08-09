import React, { Component } from 'react';
import Styles from '../src/styles/Register_Login';
import { Text, View, TextInput, Alert } from 'react-native';
import {isEmpty} from './Helpers';

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            firstname: null,
            lastname: null,
            phonenumber: null,
            submitHover: false
        };
    }

    register(firstname, lastname, phonenumber){        
        Alert.alert("Your Informations", `Firstname: ${firstname}\nLastname: ${lastname}\nPhonenumber: ${phonenumber}`);
    }

    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.inputGroups}>
                    <Text style={Styles.label}>Prénom:</Text>
                    <TextInput
                        style={Styles.textInput}
                        placeholderTextColor="rgb(180, 180, 180)"
                        placeholder="Diogo"
                        onChangeText={value => this.setState({ firstname: value })}/>

                </View>
                <View style={Styles.inputGroups}>
                    <Text style={Styles.label}>Nom:</Text>
                    <TextInput
                        style={Styles.textInput}
                        placeholderTextColor="rgb(180, 180, 180)"
                        placeholder="Vieira" 
                        onChangeText={value => this.setState({ lastname: value })}/>
                </View>
                <View style={Styles.inputGroups}>
                    <Text style={Styles.label}>N°:</Text>
                    <TextInput
                        style={Styles.textInput}
                        placeholder="Numéro de téléphone"
                        placeholderTextColor="rgb(180, 180, 180)"
                        keyboardType="phone-pad" 
                        onChangeText={value => this.setState({ phonenumber: value })} />
                </View>
                
                <View                 
                pointerEvents={isEmpty(this.state.firstname, this.state.lastname, this.state.phonenumber) ? "none" : "auto"}
                style={this.state.submitHover ? Styles.submitHover : Styles.submit}
                    onTouchStart={() => { 
                        this.setState({ submitHover: true }), 
                        this.register(this.state.firstname, this.state.lastname, this.state.phonenumber)
                    }}
                    onTouchEnd={() => this.setState({ submitHover: false })}
                >
                    <Text style={Styles.label} >S'inscrire</Text>
                </View>
            </View>
        )
    }
}