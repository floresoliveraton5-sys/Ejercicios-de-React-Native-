import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function App() {
  const [dato, setDato] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularRadio = () => {
    let valor = parseFloat(dato);
    if (!isNaN(valor)) {
      // Ejemplo: calcular radio a partir del diámetro
      let radio = valor / 2;
      setResultado(radio);
    } else {
      setResultado("Ingrese un número válido");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text>Ingrese el diámetro de la circunferencia:</Text>
      <TextInput
        style={{ borderWidth: 1, marginVertical: 10, padding: 5 }}
        keyboardType="numeric"
        value={dato}
        onChangeText={setDato}
      />
      <Button title="Calcular radio" onPress={calcularRadio} />
      {resultado && <Text style={{ marginTop: 20 }}>Radio: {resultado}</Text>}
    </View>
  );
}
