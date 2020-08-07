import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class HorizontalSeparation extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', margin: 20 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: this.props.color }} />
                <View>
                    <Text style={{ width: 100, textAlign: 'center', color: this.props.color }}>{this.props.title}</Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: this.props.color }} />
            </View>
        )
    }
}