import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from "react-native";

export default function App() {
  // Ejercicio 1: Validar calificación
  const [calificacion, setCalificacion] = useState("");
  const [resultado1, setResultado1] = useState("");

  const validarCalificacion = () => {
    const c = parseFloat(calificacion);
    if (isNaN(c)) {
      setResultado1("⚠️ Ingresa un número válido.");
      return;
    }
    if (c < 0 || c > 10) {
      setResultado1("❌ Calificación fuera de rango (debe ser entre 0 y 10).");
    } else {
      setResultado1(`✅ Calificación válida: ${c}`);
    }
  };

  // Ejercicio 2: Calificaciones de 5 alumnos, 3 calificaciones cada uno
  const [calificaciones, setCalificaciones] = useState(
    Array.from({ length: 5 }, () => ["", "", ""])
  );
  const [resultado2, setResultado2] = useState("");

  const actualizarCalificacion = (iAlumno, iNota, valor) => {
    const copia = [...calificaciones];
    copia[iAlumno][iNota] = valor;
    setCalificaciones(copia);
  };

  const calcularPromedios = () => {
    let promedios = [];
    let sumaGeneral = 0;

    for (let i = 0; i < 5; i++) {
      const notas = calificaciones[i].map(Number);
      if (notas.some(isNaN)) {
        setResultado2("⚠️ Ingresa todas las calificaciones antes de calcular.");
        return;
      }
      const promedio = notas.reduce((a, b) => a + b, 0) / 3;
      promedios.push(promedio);
      sumaGeneral += promedio;
    }

    const promedioGeneral = sumaGeneral / 5;
    let texto = "📋 Promedio de cada alumno:\n";
    promedios.forEach((p, i) => {
      texto += `Alumno ${i + 1}: ${p.toFixed(2)}\n`;
    });
    texto += `\n🎯 Promedio general del grupo: ${promedioGeneral.toFixed(2)}`;

    setResultado2(texto);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🎓 Programas de Calificaciones</Text>

      {/* EJERCICIO 1 */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>1️⃣ Validar Calificación</Text>

        <TextInput
          style={styles.input}
          placeholder="Ingresa una calificación (0 - 10)"
          keyboardType="numeric"
          value={calificacion}
          onChangeText={setCalificacion}
        />

        <Button title="Validar Calificación" onPress={validarCalificacion} />

        {resultado1 !== "" && (
          <Text style={styles.resultado}>{resultado1}</Text>
        )}
      </View>

      {/* EJERCICIO 2 */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>2️⃣ Calificaciones de 5 Alumnos</Text>

        {calificaciones.map((alumno, i) => (
          <View key={i} style={styles.alumnoCard}>
            <Text style={styles.alumnoTitulo}>Alumno {i + 1}</Text>
            {alumno.map((nota, j) => (
              <TextInput
                key={j}
                style={styles.inputPeque}
                placeholder={`Calificación ${j + 1}`}
                keyboardType="numeric"
                value={nota}
                onChangeText={(v) => actualizarCalificacion(i, j, v)}
              />
            ))}
          </View>
        ))}

        <Button title="Calcular Promedios" onPress={calcularPromedios} />

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
  alumnoCard: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  alumnoTitulo: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#0A4D68",
    marginBottom: 5,
  },
  inputPeque: {
    height: 40,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    paddingHorizontal: 8,
    marginVertical: 5,
    backgroundColor: "#F9F9F9",
  },
  resultado: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "bold",
    color: "#0A4D68",
    whiteSpace: "pre-line",
  },
});
