import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function App() {
  const [numeros, setNumeros] = useState(["", "", "", "", ""]);

  // Función para actualizar cada número
  const handleChange = (text, index) => {
    const nuevosNumeros = [...numeros];
    nuevosNumeros[index] = text;
    setNumeros(nuevosNumeros);
  };

  // Función para calcular el máximo
  const calcularMaximo = () => {
    const convertidos = numeros.map(num => parseFloat(num));
    if (convertidos.some(isNaN)) {
      Alert.alert("Error", "Por favor ingresa solo números válidos.");
      return;
    }
    const maximo = Math.max(...convertidos);
    Alert.alert("Resultado", `El número máximo es: ${maximo}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Número máximo de cinco valores</Text>

      {/* Botón arriba */}
      <Button title="Calcular Máximo" onPress={calcularMaximo} />

      {/* Campos debajo */}
      <View style={styles.inputsContainer}>
        {numeros.map((num, index) => (
          <TextInput
            key={index}
            style={styles.input}
            placeholder={`Número ${index + 1}`}
            keyboardType="numeric"
            value={num}
            onChangeText={text => handleChange(text, index)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E8F0FE',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputsContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 45,
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
  },
});
