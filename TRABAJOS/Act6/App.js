import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

export default function App() {
  const [lado, setLado] = useState("");
  const [resCuadrado, setResCuadrado] = useState("");

  const [base, setBase] = useState("");
  const [altura, setAltura] = useState("");
  const [resTriangulo, setResTriangulo] = useState("");

  const [kilos, setKilos] = useState("");
  const [resLibras, setResLibras] = useState("");

  // Calcular área y perímetro de cuadrado
  const calcularCuadrado = () => {
    if (!lado) {
      setResCuadrado("Por favor ingresa el lado.");
      return;
    }
    let l = parseFloat(lado);
    let area = l * l;
    let perimetro = 4 * l;
    setResCuadrado(`Área: ${area} | Perímetro: ${perimetro}`);
  };

  // Calcular área de triángulo
  const calcularTriangulo = () => {
    if (!base || !altura) {
      setResTriangulo("Ingresa base y altura.");
      return;
    }
    let b = parseFloat(base);
    let h = parseFloat(altura);
    let area = (b * h) / 2;
    setResTriangulo(`Área: ${area}`);
  };

  // Convertir kilos a libras
  const convertirLibras = () => {
    if (!kilos) {
      setResLibras("Ingresa los kilos.");
      return;
    }
    let k = parseFloat(kilos);
    let libras = (k * 2.20462).toFixed(2);
    setResLibras(`${k} kg = ${libras} lb`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Mini App de Cálculos</Text>

      {/* Cuadrado */}
      <View style={styles.card}>
        <Text style={styles.subtitulo}>Área y Perímetro de un Cuadrado</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa el lado"
          keyboardType="numeric"
          value={lado}
          onChangeText={setLado}
        />
        <TouchableOpacity style={styles.boton} onPress={calcularCuadrado}>
          <Text style={styles.textoBoton}>Calcular</Text>
        </TouchableOpacity>
        <Text style={styles.resultado}>{resCuadrado}</Text>
      </View>

      {/* Triángulo */}
      <View style={styles.card}>
        <Text style={styles.subtitulo}>Área de un Triángulo</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa la base"
          keyboardType="numeric"
          value={base}
          onChangeText={setBase}
        />
        <TextInput
          style={styles.input}
          placeholder="Ingresa la altura"
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
        />
        <TouchableOpacity style={styles.boton} onPress={calcularTriangulo}>
          <Text style={styles.textoBoton}>Calcular</Text>
        </TouchableOpacity>
        <Text style={styles.resultado}>{resTriangulo}</Text>
      </View>

      {/* Kilos a libras */}
      <View style={styles.card}>
        <Text style={styles.subtitulo}>Convertir Kilos a Libras</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa kilos"
          keyboardType="numeric"
          value={kilos}
          onChangeText={setKilos}
        />
        <TouchableOpacity style={styles.boton} onPress={convertirLibras}>
          <Text style={styles.textoBoton}>Convertir</Text>
        </TouchableOpacity>
        <Text style={styles.resultado}>{resLibras}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#2c3e50",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    elevation: 5,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: "#34495e",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
  },
  boton: {
    backgroundColor: "#3498db",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  textoBoton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  resultado: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#27ae60",
  },
});
