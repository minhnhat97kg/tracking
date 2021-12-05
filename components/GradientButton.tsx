import React from 'react'
import { Pressable, Text, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '../constants/Colors'

export default function GradientButton(props: { status?: "warn" | "safe", onPress?: () => any, title?: string }) {
    return (
        <TouchableOpacity onPress={props.onPress} >
            <LinearGradient
                colors={Colors.status[props.status || "safe"]}
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 15,
                    margin: 5,
                    padding: 10,

                }}
            >
                <Text>{props.title || ''}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}
