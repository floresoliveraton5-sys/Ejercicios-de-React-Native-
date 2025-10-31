import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from "react-native";

export default function App() {
  // EJERCICIO 1: Desea continuar S/N
  const [respuesta, setRespuesta] = useState("");
  const [contador, setContador] = useState(0);
  const [resultado1, setResultado1] = useState("");

  const preguntarContinuar = () => {
    const r = respuesta.trim().toUpperCase();

    if (r !== "S" && r !== "N") {
      Alert.alert("⚠️ Error", "Por favor ingresa 'S' para sí o 'N' para no.");
      return;
    }

    if (r === "S") {
      setContador(contador + 1);
      setResultado1(`🔁 Has decidido continuar ${contador + 1} veces.`);
      setRespuesta("");
    } else {
      setResultado1(`✅ Programa finalizado.\nContinuaste ${contador} veces.`);
      setRespuesta("");
    }
  };

  // EJERCICIO 2: Suma de los cuadrados de los 100 primeros números
  const [resultado2, setResultado2] = useState("");

  const calcularSumaCuadrados = () => {
    let suma = 0;
    for (let i = 1; i <= 100; i++) {
      suma += i * i;
    }
    setResultado2(`📘 La suma de los cuadrados de los primeros 100 números es:\n${suma}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📙 Ejercicios de Lógica y Cálculo</Text>

      {/* EJERCICIO 1 */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>1️⃣ ¿Desea continuar? (S/N)</Text>

        <TextInput
          style={styles.input}
          placeholder="Escribe S o N"
          value={respuesta}
          onChangeText={setRespuesta}
        />
        <Button title="Responder" onPress={preguntarContinuar} />
        {resultado1 !== "" && <Text style={styles.result}>{resultado1}</Text>}
      </View>

      {/* EJERCICIO 2 */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>2️⃣ Suma de los Cuadrados (1 al 100)</Text>
        <Button title="Calcular Suma" onPress={calcularSumaCuadrados} />
        {resultado2 !== "" && <Text style={styles.result}>{resultado2}</Text>}
      </View>
    </ScrollView>
  );
}

// 🎨 Estilos
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#E8F0FE",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 25,
    color: "#0A4D68",
    textAlign: "center",
  },
  card: {
    width: "95%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 25,
    elevation: 4,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#0A4D68",
  },
  input: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "#F9F9F9",
    textAlign: "center",
  },
  result: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "bold",
    color: "#0A4D68",
    textAlign: "center",
    whiteSpace: "pre-line",
  },
});
