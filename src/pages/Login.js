import React, { useState } from "react";
import { Text, View, Image } from "react-native";

import Button from "../components/Button";
import Input from "../components/Input";

import Logo from "../image/reactnative.png";

import styles from "../styles/ManipulandoStyles";

export default function Login({ navigation }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submitForm = (email) => {
    navigation.navigate('Home', { email })
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />

      <Input
        placeholder="Informe seu e-mail"
        value={form.email}
        onChange={(value) => setForm({ ...form, email: value })}
      />

      <Input
        placeholder="Digite sua senha"
        type="password"
        value={form.password}
        onChange={(value) => setForm({ ...form, password: value })}
      />

      <Button onClick={() => submitForm(form.email, form.password)}>
        <Text style={styles.buttonText}>Acessar</Text>
      </Button>
    </View>
  );
}
