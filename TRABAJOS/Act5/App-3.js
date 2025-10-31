import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";

export default function App() {
  const [catetoA, setCatetoA] = useState("");
  const [catetoB, setCatetoB] = useState("");
  const [edad, setEdad] = useState("");
  const [lado, setLado] = useState("");
  const [resultado, setResultado] = useState("");

  // Funciones de cálculo
  const calcularHipotenusa = () => {
    const a = parseFloat(catetoA);
    const b = parseFloat(catetoB);
    if (isNaN(a) || isNaN(b)) {
      setResultado("❌ Ingresa valores válidos para la hipotenusa");
      return;
    }
    const h = Math.sqrt(a * a + b * b).toFixed(2);
    setResultado(`📐 Hipotenusa: ${h}`);
  };

  const calcularMinutosVividos = () => {
    const e = parseInt(edad);
    if (isNaN(e) || e <= 0) {
      setResultado("❌ Ingresa una edad válida");
      return;
    }
    const minutos = e * 365 * 24 * 60;
    setResultado(`🕒 Minutos vividos aprox.: ${minutos.toLocaleString()}`);
  };

  const calcularPerimetroCuadrado = () => {
    const l = parseFloat(lado);
    if (isNaN(l) || l <= 0) {
      setResultado("❌ Ingresa un lado válido");
      return;
    }
    const perimetro = 4 * l;
    setResultado(`🔲 Perímetro del cuadrado: ${perimetro}`);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f3f4f6" }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={{ fontSize: 26, fontWeight: "bold", color: "#1e3a8a", marginBottom: 20, textAlign: "center" }}>
          📱 Calculadora Multiuso
        </Text>

        {/* Hipotenusa */}
        <View style={{ backgroundColor: "white", padding: 20, borderRadius: 20, marginBottom: 20, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 4, elevation: 5 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#2563eb", marginBottom: 10 }}>📐 Calcular Hipotenusa</Text>
          <TextInput placeholder="Cateto A" keyboardType="numeric" value={catetoA} onChangeText={setCatetoA} style={{ borderWidth: 1, borderColor: "#d1d5db", padding: 12, borderRadius: 10, marginBottom: 10, fontSize: 16 }} />
          <TextInput placeholder="Cateto B" keyboardType="numeric" value={catetoB} onChangeText={setCatetoB} style={{ borderWidth: 1, borderColor: "#d1d5db", padding: 12, borderRadius: 10, marginBottom: 10, fontSize: 16 }} />
          <TouchableOpacity onPress={calcularHipotenusa} style={{ backgroundColor: "#2563eb", padding: 15, borderRadius: 12 }}>
            <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 16 }}>Calcular</Text>
          </TouchableOpacity>
        </View>

        {/* Minutos vividos */}
        <View style={{ backgroundColor: "white", padding: 20, borderRadius: 20, marginBottom: 20, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 4, elevation: 5 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#16a34a", marginBottom: 10 }}>🕒 Minutos Vividos</Text>
          <TextInput placeholder="Edad en años" keyboardType="numeric" value={edad} onChangeText={setEdad} style={{ borderWidth: 1, borderColor: "#d1d5db", padding: 12, borderRadius: 10, marginBottom: 10, fontSize: 16 }} />
          <TouchableOpacity onPress={calcularMinutosVividos} style={{ backgroundColor: "#16a34a", padding: 15, borderRadius: 12 }}>
            <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 16 }}>Calcular</Text>
          </TouchableOpacity>
        </View>

        {/* Perímetro cuadrado */}
        <View style={{ backgroundColor: "white", padding: 20, borderRadius: 20, marginBottom: 20, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 4, elevation: 5 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#7c3aed", marginBottom: 10 }}>🔲 Perímetro Cuadrado</Text>
          <TextInput placeholder="Lado del cuadrado" keyboardType="numeric" value={lado} onChangeText={setLado} style={{ borderWidth: 1, borderColor: "#d1d5db", padding: 12, borderRadius: 10, marginBottom: 10, fontSize: 16 }} />
          <TouchableOpacity onPress={calcularPerimetroCuadrado} style={{ backgroundColor: "#7c3aed", padding: 15, borderRadius: 12 }}>
            <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 16 }}>Calcular</Text>
          </TouchableOpacity>
        </View>

        {/* Resultado */}
        {resultado !== "" && (
          <View style={{ backgroundColor: "#facc15", padding: 20, borderRadius: 20, shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 4, elevation: 5 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#1f2937", textAlign: "center" }}>{resultado}</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
