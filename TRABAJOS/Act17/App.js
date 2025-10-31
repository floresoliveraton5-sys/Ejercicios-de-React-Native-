import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  // Estados para los bates
  const [bates, setBates] = useState('');
  const [resultadoBates, setResultadoBates] = useState('');

  // Estados para el obrero
  const [horas, setHoras] = useState('');
  const [resultadoObrero, setResultadoObrero] = useState('');

  // Función para calcular el costo de los bates
  const calcularBates = () => {
    const cantidad = parseInt(bates);
    if (isNaN(cantidad) || cantidad <= 0) {
      setResultadoBates('⚠️ Ingresa una cantidad válida.');
      return;
    }

    let total = 0;

    if (cantidad <= 10) {
      total = cantidad * 250;
    } else {
      const primeros10 = 10 * 250;
      const restantes = (cantidad - 10) * 230;
      total = primeros10 + restantes;
    }

    setResultadoBates(
      `🏏 Número de bates: ${cantidad}\n💰 Costo total: $${total}`
    );
  };

  // Función para calcular el salario del obrero
  const calcularSalario = () => {
    const horasTrabajadas = parseInt(horas);
    if (isNaN(horasTrabajadas) || horasTrabajadas < 0) {
      setResultadoObrero('⚠️ Ingresa un número válido de horas.');
      return;
    }

    let salario = 0;

    if (horasTrabajadas <= 40) {
      salario = horasTrabajadas * 50;
    } else {
      const normales = 40 * 50;
      const extras = (horasTrabajadas - 40) * 70;
      salario = normales + extras;
    }

    setResultadoObrero(
      `👷 Horas trabajadas: ${horasTrabajadas}\n💵 Salario semanal: $${salario}`
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🏪 Cálculos de Bates y Salario</Text>

      {/* Ejercicio 1: Bates */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>🏏 Compra de Bates de Béisbol</Text>

        <TextInput
          style={styles.input}
          placeholder="Cantidad de bates"
          keyboardType="numeric"
          value={bates}
          onChangeText={setBates}
        />

        <Button title="Calcular Costo" onPress={calcularBates} />

        {resultadoBates !== '' && (
          <Text style={styles.resultado}>{resultadoBates}</Text>
        )}
      </View>

      {/* Ejercicio 2: Salario */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>👷 Cálculo del Salario del Obrero</Text>

        <TextInput
          style={styles.input}
          placeholder="Horas trabajadas"
          keyboardType="numeric"
          value={horas}
          onChangeText={setHoras}
        />

        <Button title="Calcular Salario" onPress={calcularSalario} />

        {resultadoObrero !== '' && (
          <Text style={styles.resultado}>{resultadoObrero}</Text>
        )}
      </View>
    </ScrollView>
  );
}

// 🎨 Estilos
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
    textAlign: 'center',
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
