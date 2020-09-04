import React from 'react';
import { View, ScrollView, Dimensions, ImageBackground } from 'react-native';
import Login from "../components/Login";
import Register from "../components/Register";
import HorizontalSeparation from "../components/HorizontalSeparation";
import Styles from "../styles/Connection";

export default function Connection() {
    return (
        <ImageBackground
            source={require('../pictures/Moutains.jpg')}
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
