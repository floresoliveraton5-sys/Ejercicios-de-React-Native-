import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from "react-native";

export default function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularHipotenusa = () => {
    const catA = parseFloat(a);
    const catB = parseFloat(b);

    if (isNaN(catA) || isNaN(catB)) {
      setResultado("❌ Ingresa valores numéricos válidos");
      return;
    }

    const h = Math.sqrt(catA * catA + catB * catB).toFixed(2);
    setResultado(`La hipotenusa es: ${h}`);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f3f4f6", padding: 20 }}>
      <View style={{ marginTop: 60, alignItems: "center" }}>
        <Text style={{ fontSize: 26, fontWeight: "bold", color: "#1e3a8a", marginBottom: 30 }}>
          📐 Calculadora de Hipotenusa
        </Text>
      </View>

      <View style={{ backgroundColor: "white", padding: 20, borderRadius: 20, shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 4, elevation: 5 }}>
        
        <TextInput
          placeholder="Ingresa Cateto A"
          keyboardType="numeric"
          value={a}
          onChangeText={setA}
          style={{
            borderWidth: 1,
            borderColor: "#d1d5db",
            padding: 12,
            borderRadius: 10,
            marginBottom: 15,
            fontSize: 16,
          }}
        />

        <TextInput
          placeholder="Ingresa Cateto B"
          keyboardType="numeric"
          value={b}
          onChangeText={setB}
          style={{
            borderWidth: 1,
            borderColor: "#d1d5db",
            padding: 12,
            borderRadius: 10,
            marginBottom: 20,
            fontSize: 16,
          }}
        />

        <TouchableOpacity
          onPress={calcularHipotenusa}
          style={{
            backgroundColor: "#2563eb",
            padding: 15,
            borderRadius: 12,
          }}
        >
          <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 18 }}>
            Calcular
          </Text>
        </TouchableOpacity>
      </View>

      {resultado !== "" && (
        <View style={{ marginTop: 30, alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "600", color: "#374151" }}>{resultado}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
