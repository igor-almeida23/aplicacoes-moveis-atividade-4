import React from "react";
import { Text, View } from "react-native";

import styles from "../styles/ManipulandoStyles";

export default function Profile({ route }) {
  const { email: userEmail } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.texto1}>Seja bem vindo ao Perfil!</Text>
      <Text style={styles.texto1}>E-mail: {userEmail}</Text>
    </View>
  );
}
