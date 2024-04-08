import Title from "../../components/Title";
import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Title title="Home" />
    </View>
  );
}
