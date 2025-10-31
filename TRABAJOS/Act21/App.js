import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from "react-native";

export default function App() {
  // EJERCICIO 1: Calificaciones entre 6 y 10
  const [calificaciones, setCalificaciones] = useState(Array(10).fill(""));
  const [resultado1, setResultado1] = useState("");

  const actualizarCalificacion = (index, valor) => {
    const nuevas = [...calificaciones];
    nuevas[index] = valor;
    setCalificaciones(nuevas);
  };

  const validarCalificaciones = () => {
    const notas = calificaciones.map(Number);
    if (notas.some(isNaN)) {
      Alert.alert("Error", "⚠️ Ingresa todas las calificaciones correctamente.");
      return;
    }

    // Filtramos las que no estén entre 6 y 10
    const invalidas = notas.filter((n) => n < 6 || n > 10);

    if (invalidas.length > 0) {
      setResultado1("❌ Solo se aceptan calificaciones entre 6 y 10.");
    } else {
      const promedio = notas.reduce((a, b) => a + b, 0) / notas.length;
      setResultado1(`✅ Todas las calificaciones son válidas.\n📊 Promedio: ${promedio.toFixed(2)}`);
    }
  };

  // EJERCICIO 2: Números pares de 2 a 15
  const [resultado2, setResultado2] = useState("");

  const mostrarPares = () => {
    const pares = [];
    for (let i = 2; i <= 15; i++) {
      if (i % 2 === 0) pares.push(i);
    }
    setResultado2(`🔢 Números pares del 2 al 15:\n${pares.join(", ")}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📘 Ejercicios de Calificaciones y Números Pares</Text>

      {/* EJERCICIO 1 */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>1️⃣ Calificaciones (solo entre 6 y 10)</Text>

        {calificaciones.map((valor, i) => (
          <TextInput
            key={i}
            style={styles.input}
            placeholder={`Calificación ${i + 1}`}
            keyboardType="numeric"
            value={valor}
            onChangeText={(v) => actualizarCalificacion(i, v)}
          />
        ))}

        <Button title="Validar Calificaciones" onPress={validarCalificaciones} />
        {resultado1 !== "" && <Text style={styles.result}>{resultado1}</Text>}
      </View>

      {/* EJERCICIO 2 */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>2️⃣ Números Pares del 2 al 15</Text>

        <Button title="Mostrar Números Pares" onPress={mostrarPares} />
        {resultado2 !== "" && <Text style={styles.result}>{resultado2}</Text>}
      </View>
    </ScrollView>
  );
}

// 🎨 ESTILOS
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#EAF4FF",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#004E89",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 20,
    width: "95%",
    marginBottom: 25,
    elevation: 4,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#004E89",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#AAA",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    marginVertical: 5,
    backgroundColor: "#F9F9F9",
  },
  result: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "600",
    color: "#004E89",
    whiteSpace: "pre-line",
  },
});
