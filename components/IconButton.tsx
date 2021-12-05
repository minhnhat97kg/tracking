import React from 'react';
import { Pressable, View, StyleProp, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

function IconButton(props: { icon: typeof FontAwesome5, onPress: () => any, containerStyle?: StyleProp<any> }) {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[{
                alignItems: "center",
                justifyContent: 'center',
                width: 50,
                height: 50,
                borderRadius: 30,
                backgroundColor: "#D5E7EC",
                margin: 5,
                ...Colors.shadowBox,
            }, props.containerStyle]}
        >
            {props.icon}
        </TouchableOpacity>
    )
}
export default IconButton
