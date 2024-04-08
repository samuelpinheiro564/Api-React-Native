import Title from "../../components/Title";
import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { useState, useEffect } from "react";
import {requestForegroundPermissionsAsync, getCurrentPositionAsync} from "expo-location";

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
    </View>
  );
}
