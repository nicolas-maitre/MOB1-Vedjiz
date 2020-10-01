import React from 'react';
import { Text, View } from 'react-native';

export default function HorizontalSeparation(props) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 20 }}>
            <View style={{ flex: 1, height: 1, backgroundColor: props.color }} />
            <View>
                <Text style={{ width: 100, textAlign: 'center', color: props.color }}>{props.title}</Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: props.color }} />
        </View>
    )
}