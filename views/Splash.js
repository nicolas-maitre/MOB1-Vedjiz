import React, { Component } from 'react';
import { View, Dimensions, ImageBackground, Text } from 'react-native';
import { PacmanIndicator } from 'react-native-indicators';

export default class Homepage extends Component {
    render() {
        return (
            <ImageBackground
                source={require('../src/pictures/Moutains.jpg')}
                style={{
                    flex: 1,
                    width: null,
                    height: Dimensions.get('window').height,
                }}
            >
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <PacmanIndicator color='yellow' size={100} />
                </View>

            </ImageBackground>
        )
    }
}