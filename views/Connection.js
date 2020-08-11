import React, { Component } from 'react';
import { View, ScrollView, Dimensions, ImageBackground } from 'react-native';
import Login from "../components/Login";
import Register from "../components/Register";
import HorizontalSeparation from "../components/HorizontalSeparation";
import Styles from "../src/styles/Connection";

export default class Connection extends Component {
    render() {
        return (
            <ImageBackground
                source={require('../src/pictures/Moutains.jpg')}
                style={Styles.background}
            >
                <View>
                    <ScrollView>
                        <HorizontalSeparation title="Register" color="rgba(255, 255, 255, 0.7)" />
                        <Register />
                        <HorizontalSeparation title="Login" color="rgba(0, 0, 0, 0.7)" />
                        <Login />
                    </ScrollView>
                </View>

            </ImageBackground>
        )
    }
}