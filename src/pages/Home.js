import React from "react";
import { Text, View } from "react-native";

import styles from "../styles/ManipulandoStyles";

export default function Home({ route }) {
  const { email: userEmail } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.texto1}>Seja bem vindo ao Home!</Text>
      <Text style={styles.texto1}>
        Você realizou login com o e-mail abaixo:
      </Text>
      <Text style={styles.texto1}>{userEmail}</Text>
    </View>
  );
}
