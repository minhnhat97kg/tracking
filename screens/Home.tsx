import React, { useState, useEffect, ComponentProps } from 'react';
import { StyleSheet, Dimensions, Button, Pressable, Text, Alert, SafeAreaView, Platform, Modal, TouchableNativeFeedback } from 'react-native';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import MapView, { Region, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { LocationObject } from 'expo-location';
import useColorScheme from '../hooks/useColorScheme';
import CustomMaker from '../components/CustomMaker';
import { MakerData, UserConfig } from '../constants/Types';
import IconButton from '../components/IconButton';
import { FontAwesome5 } from '@expo/vector-icons';
import { Switch } from 'react-native-elements';
import Colors from '../constants/Colors';
import { ListItem } from 'react-native-elements/dist/list/ListItem';
import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const initRegion: Region = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

const locs: MakerData[] = [
  {
    coordinate: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    imageUri: "https://i.pinimg.com/originals/3d/32/cf/3d32cfca57376f51a0ef7f14c9f6c230.jpg",
    status: "safe"
  },
  {
    coordinate: {
      latitude: 37.78825,
      longitude: -122.4224,
    },
    imageUri: "https://i.pinimg.com/originals/3d/32/cf/3d32cfca57376f51a0ef7f14c9f6c230.jpg",
    status: "warn"
  },
  {
    coordinate: {
      latitude: 37.78825,
      longitude: -122.4124,
    },
    imageUri: "https://i.pinimg.com/originals/3d/32/cf/3d32cfca57376f51a0ef7f14c9f6c230.jpg",
    status: "warn"
  },
]

export default function Home({ navigation }: RootTabScreenProps<'TabOne'>) {
  const colorScheme = useColorScheme();

  const [region, setRegion] = useState<Region>(initRegion);
  const [errorMsg, setErrorMsg] = useState<any>(null);
  const [isConfigVisible, setIsConfigVisible] = useState<boolean>(false)

  const syncLocation = async () => {
    const loc: LocationObject = await Location.getCurrentPositionAsync({});
    const _region: Region = { ...region, latitude: loc.coords.latitude, longitude: loc.coords.longitude }
    setRegion(_region);
  }

  useEffect(() => {
    (async () => {
      console.log(Platform.OS)
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        Alert.alert(errorMsg)
        return;
      }
      syncLocation()
    })();
  }, []);

  const renderUsers = React.useMemo(() => locs.map((v, idx) => <CustomMaker key={idx} data={v} />), [locs])

  return (
    <View style={styles.container}>

      <MapView
        style={styles.map}
        region={region}
      >
        <IconButton onPress={syncLocation}
          icon={<FontAwesome5 name="location-arrow" size={25} />}
          containerStyle={{ position: 'absolute', left: 5, bottom: 5 }}
        />
        <IconButton onPress={() => navigation.navigate("Configuration")}
          icon={<FontAwesome5 name="cog" size={25} />}
          containerStyle={{ position: 'absolute', right: 5, bottom: 5 }}
        />

        {renderUsers}
      </MapView>
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
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between'

  }
});