import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from "react-native";

export default function App() {
  // EJERCICIO 1: Números del 0 al 100 de 10 en 10
  const [resultado1, setResultado1] = useState("");

  const mostrarDeDiezEnDiez = () => {
    let numeros = [];
    for (let i = 10; i <= 100; i += 10) {
      numeros.push(i);
    }
    setResultado1(`🔢 Números del 0 al 100 de diez en diez:\n${numeros.join(", ")}`);
  };

  // EJERCICIO 2: Tabla de multiplicar
  const [numero, setNumero] = useState("");
  const [resultado2, setResultado2] = useState("");

  const generarTabla = () => {
    const n = parseInt(numero);
    if (isNaN(n)) {
      setResultado2("⚠️ Ingresa un número válido.");
      return;
    }

    let tabla = `📘 Tabla de multiplicar del ${n}:\n`;
    for (let i = 1; i <= 10; i++) {
      tabla += `${n} × ${i} = ${n * i}\n`;
    }
    setResultado2(tabla);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📗 Ejercicios de Números y Tablas</Text>

      {/* EJERCICIO 1 */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>1️⃣ Números del 0 al 100 de diez en diez</Text>
        <Button title="Mostrar Números" onPress={mostrarDeDiezEnDiez} />
        {resultado1 !== "" && <Text style={styles.result}>{resultado1}</Text>}
      </View>

      {/* EJERCICIO 2 */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>2️⃣ Tabla de Multiplicar</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa un número"
          keyboardType="numeric"
          value={numero}
          onChangeText={setNumero}
        />
        <Button title="Mostrar Tabla" onPress={generarTabla} />
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
  },
  result: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "bold",
    color: "#0A4D68",
    whiteSpace: "pre-line",
  },
});
