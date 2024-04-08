import Title from "../../components/Title";
import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { useState, useEffect } from "react";
import {requestForegroundPermissionsAsync, getCurrentPositionAsync} from "expo-location";
import { AnimatedMapView } from "react-native-maps/lib/MapView";
import { MarkerAnimated } from "react-native-maps"; 



export default function Localization() {
  const [location, setLocation] = useState(null);

async function requestPermission() {
  const { granted } = await requestForegroundPermissionsAsync();

  if (granted) {
    const currentPosition = await getCurrentPositionAsync();
    setLocation(currentPosition);
    console.log("Localização atual", currentPosition);
    return;
  }
}

useEffect(() => {
  requestPermission();
}, []);
  return (
    <View styles={styles.container}>
      <Title title="Localization" />
      {location && (
  <AnimatedMapView
    style={styles.map}
    initialRegion={{
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }}
  >
    <MarkerAnimated
      coordinate={{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      }}
      title="Você está aqui"
      description="Sua localização atual"
    />
  </AnimatedMapView>
)}
    </View>
  );
}
