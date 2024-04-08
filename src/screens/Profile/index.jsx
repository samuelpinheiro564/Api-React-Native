import Title from "../../components/Title";
import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const navigation = useNavigation();
  return (
    <View styles={styles.container}>
      <Title title="Profile" />
    </View>
  );
}
