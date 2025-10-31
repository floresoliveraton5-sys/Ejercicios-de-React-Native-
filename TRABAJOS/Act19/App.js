import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from "react-native";

export default function App() {
  const [numero, setNumero] = useState("");
  const [resultado1, setResultado1] = useState("");
  const [resultado2, setResultado2] = useState("");

  // Ejercicio 1: Números anteriores al ingresado
  const mostrarAnteriores = () => {
    const n = parseInt(numero);

    if (isNaN(n) || n <= 0) {
      setResultado1("⚠️ Ingresa un número entero positivo mayor que 0.");
      return;
    }

    const lista = [];
    for (let i = 1; i < n; i++) {
      lista.push(i);
    }

    setResultado1(`🔢 Números antes de ${n}: \n${lista.join(", ")}`);
  };

  // Ejercicio 2: Números del 1 al 30 con salto cada 7
  const imprimirDel1al30 = () => {
    let salida = "";
    for (let i = 1; i <= 30; i++) {
      salida += i + " ";
      if (i % 7 === 0) salida += "\n"; // salto de línea cada 7
    }
    setResultado2(salida);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🧮 Programas con Números</Text>

      {/* EJERCICIO 1 */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>1️⃣ Números anteriores al ingresado</Text>

        <TextInput
          style={styles.input}
          placeholder="Ingresa un número"
          keyboardType="numeric"
          value={numero}
          onChangeText={setNumero}
        />

        <Button title="Mostrar Números Anteriores" onPress={mostrarAnteriores} />

        {resultado1 !== "" && (
          <Text style={styles.resultado}>{resultado1}</Text>
        )}
      </View>

      {/* EJERCICIO 2 */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>2️⃣ Números del 1 al 30 (salto cada 7)</Text>

        <Button title="Imprimir Números del 1 al 30" onPress={imprimirDel1al30} />

        {resultado2 !== "" && (
          <Text style={styles.resultado}>{resultado2}</Text>
        )}
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
    width: "90%",
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
  resultado: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "bold",
    color: "#0A4D68",
    textAlign: "center",
    whiteSpace: "pre-line", // muestra saltos de línea
  },
});
