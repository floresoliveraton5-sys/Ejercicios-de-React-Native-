import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  // Estados para el ejercicio 1 (bates)
  const [bates, setBates] = useState('');
  const [resultadoBates, setResultadoBates] = useState('');

  // Estados para el ejercicio 2 (salario)
  const [horas, setHoras] = useState('');
  const [resultadoSalario, setResultadoSalario] = useState('');

  // Función para calcular el precio de los bates
  const calcularBates = () => {
    const cantidad = parseInt(bates);
    if (isNaN(cantidad) || cantidad <= 0) {
      setResultadoBates('⚠️ Ingresa una cantidad válida.');
      return;
    }

    const precioUnitario = cantidad >= 10 ? 100 : 108;
    const total = cantidad * precioUnitario;

    setResultadoBates(
      `💰 Precio unitario: $${precioUnitario}\n🔸 Total a pagar: $${total}`
    );
  };

  // Función para calcular el salario del obrero
  const calcularSalario = () => {
    const h = parseFloat(horas);
    if (isNaN(h) || h <= 0) {
      setResultadoSalario('⚠️ Ingresa un número válido de horas.');
      return;
    }

    let salario;
    if (h <= 40) {
      salario = h * 14;
    } else {
      const extras = h - 40;
      salario = (40 * 14) + (extras * 26);
    }

    setResultadoSalario(`💵 Salario total del obrero: $${salario.toFixed(2)}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>⚾ Ejercicios en React Native</Text>

      {/* Ejercicio 1: BATES */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>🏏 Venta de Bates de Béisbol</Text>

        <TextInput
          style={styles.input}
          placeholder="Cantidad de bates"
          keyboardType="numeric"
          value={bates}
          onChangeText={setBates}
        />

        <Button title="Calcular Total" onPress={calcularBates} />

        {resultadoBates !== '' && (
          <Text style={styles.resultado}>{resultadoBates}</Text>
        )}
      </View>

      {/* Ejercicio 2: SALARIO */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>👷‍♂️ Cálculo del Salario del Obrero</Text>

        <TextInput
          style={styles.input}
          placeholder="Horas trabajadas"
          keyboardType="numeric"
          value={horas}
          onChangeText={setHoras}
        />

        <Button title="Calcular Salario" onPress={calcularSalario} />

        {resultadoSalario !== '' && (
          <Text style={styles.resultado}>{resultadoSalario}</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F0FE',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#0A4D68',
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 25,
    elevation: 4,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#0A4D68',
  },
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#F9F9F9',
  },
  resultado: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0A4D68',
    textAlign: 'center',
  },
});
