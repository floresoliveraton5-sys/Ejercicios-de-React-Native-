import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [dm, setDm] = useState("");
  const [resultado, setResultado] = useState(null);

  const convertir = () => {
    const valor = parseFloat(dm);
    if (!isNaN(valor)) {
      const pulgadas = (valor * 10 / 2.54).toFixed(2);
      setResultado(`${pulgadas} in`);
    } else {
      setResultado("⚠️ Ingrese un número válido en dm");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📏 Conversor de Decímetros a Pulgadas</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ejemplo: 5 dm"
        value={dm}
        onChangeText={setDm}
      />

      <TouchableOpacity style={styles.button} onPress={convertir}>
        <Text style={styles.buttonText}>Convertir</Text>
      </TouchableOpacity>

      {resultado && <Text style={styles.result}>{resultado}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f6f9",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2c3e50",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#bdc3c7",
    borderRadius: 8,
    padding: 12,
    width: "80%",
    backgroundColor: "#ecf0f1",
    fontSize: 16,
    marginBottom: 15,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#2980b9",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "700",
    color: "#27ae60",
  },
});
