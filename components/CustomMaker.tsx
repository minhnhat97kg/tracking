import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Marker, } from 'react-native-maps';
import Colors from '../constants/Colors';
import { MakerData } from '../constants/Types';


function CustomMaker(props: { data: MakerData }) {
  return (
    <Marker
      coordinate={{
        latitude: props.data.coordinate.latitude,
        longitude: props.data.coordinate.longitude
      }}
    >
      <LinearGradient
        colors={Colors.status[props.data.status]}
        style={styles.avatar}
      >
        <Image
          source={{ uri: props.data.imageUri }}
          style={styles.image}
        />
      </LinearGradient>
    </Marker>
  )
}

export default React.memo(CustomMaker)

const styles = StyleSheet.create({
  avatar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
  }
})