import React, { useState, useEffect, ComponentProps } from 'react';
import { StyleSheet, Dimensions, Button, Pressable } from 'react-native';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { FontAwesome } from '@expo/vector-icons';

function FloatingButton(props: { icon: ComponentProps<typeof FontAwesome>['name'], onPress: () => any }) {
  return (
    <Pressable
      onPress={props.onPress}
    >
      <FontAwesome size={30} icon={"home"} />
    </Pressable>
  )
}

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<any>(null);

  const updateLocation = async () => {
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  }
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      updateLocation()
    })();
  }, []);

  useEffect(() => {
    console.log(location)
  }, [updateLocation])
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <View style={styles.container}>

      <FloatingButton icon={'home'} onPress={updateLocation} />
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});