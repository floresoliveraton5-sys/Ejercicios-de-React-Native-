import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function App() {
  const [calificaciones, setCalificaciones] = useState("", "", "", "");
  const [promedio, setPromedio] = useState(null);

  const handleChange = (text, index) => {
    const nuevasCalificaciones = [...calificaciones];
    nuevasCalificaciones[index] = text;
    setCalificaciones(nuevasCalificaciones);
  };

  const calcularPromedio = () => {
    const valores = calificaciones.map((c) => parseFloat(c)).filter((c) => !isNaN(c));
    if (valores.length === 4) {
      const suma = valores.reduce((a, b) => a + b, 0);
      setPromedio((suma / 4).toFixed(2));
    } else {
      setPromedio("⚠️ Ingrese todas las calificaciones");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📊 Promedio de Calificaciones</Text>

      {/* Layout en fila: formulario a la izquierda, resultado a la derecha */}
      <View style={styles.row}>
        <ScrollView style={styles.card}>
          <Text style={styles.subtitle}>Formulario de Calificaciones</Text>

          {/* Botón arriba */}
          <TouchableOpacity style={styles.button} onPress={calcularPromedio}>
            <Text style={styles.buttonText}>Calcular Promedio</Text>
          </TouchableOpacity>

          {/* Entradas */}
          {calificaciones.map((c, index) => (
            <TextInput
              key={index}
              style={styles.input}
              keyboardType="numeric"
              placeholder={`Calificación ${index + 1}`}
              value={c}
              onChangeText={(text) => handleChange(text, index)}
            />
          ))}
        </ScrollView>

        {/* Resultado a un lado */}
        <View style={styles.resultCard}>
          <Text style={styles.resultTitle}>Resultado</Text>
          {promedio ? (
            <Text style={styles.resultText}>
              {typeof promedio === "string" ? promedio : `✅ Promedio: ${promedio}`}
            </Text>
          ) : (
            <Text style={styles.placeholder}>Aún no hay cálculo</Text>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f9",
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    color: "#2c3e50",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    flex: 1,
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginRight: 10,
    elevation: 4,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 15,
    color: "#34495e",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#bdc3c7",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: "#ecf0f1",
  },
  button: {
    backgroundColor: "#2980b9",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  resultCard: {
    width: 150,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
    color: "#2c3e50",
  },
  resultText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#27ae60",
    textAlign: "center",
  },
  placeholder: {
    fontSize: 14,
    color: "#7f8c8d",
    textAlign: "center",
  },
});
