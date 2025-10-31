import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  // Estados para los balones
  const [balones, setBalones] = useState('');
  const [resultadoBalones, setResultadoBalones] = useState('');

  // Estados para los lápices
  const [lapices, setLapices] = useState('');
  const [resultadoLapices, setResultadoLapices] = useState('');

  // Función para calcular el precio de los balones
  const calcularBalones = () => {
    const cantidad = parseInt(balones);
    if (isNaN(cantidad) || cantidad <= 0) {
      setResultadoBalones('⚠️ Ingresa una cantidad válida.');
      return;
    }

    let precioUnitario = 0;

    if (cantidad > 15) {
      precioUnitario = 85;
    } else if (cantidad > 10 && cantidad <= 15) {
      precioUnitario = 92;
    } else {
      precioUnitario = 99;
    }

    const total = cantidad * precioUnitario;
    setResultadoBalones(
      `⚽ Precio unitario: $${precioUnitario}\n💰 Total a pagar: $${total}`
    );
  };

  // Función para calcular el precio de los lápices
  const calcularLapices = () => {
    const cantidad = parseInt(lapices);
    if (isNaN(cantidad) || cantidad <= 0) {
      setResultadoLapices('⚠️ Ingresa una cantidad válida.');
      return;
    }

    let precioUnitario = 0;

    if (cantidad >= 100) {
      precioUnitario = 0.8;
    } else if (cantidad > 50 && cantidad < 100) {
      precioUnitario = 1.2;
    } else if (cantidad >= 30 && cantidad <= 50) {
      precioUnitario = 1.5;
    } else {
      precioUnitario = 2.1;
    }

    const total = cantidad * precioUnitario;
    setResultadoLapices(
      `🖍️ Precio unitario: $${precioUnitario.toFixed(2)}\n💵 Total a pagar: $${total.toFixed(2)}`
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🛒 Cálculos de Compra</Text>

      {/* Ejercicio 1: Balones */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>⚽ Venta de Balones de Fútbol</Text>

        <TextInput
          style={styles.input}
          placeholder="Cantidad de balones"
          keyboardType="numeric"
          value={balones}
          onChangeText={setBalones}
        />

        <Button title="Calcular Total" onPress={calcularBalones} />

        {resultadoBalones !== '' && (
          <Text style={styles.resultado}>{resultadoBalones}</Text>
        )}
      </View>

      {/* Ejercicio 2: Lápices */}
      <View style={styles.card}>
        <Text style={styles.subtitle}>🖍️ Venta de Lápices de Colores</Text>

        <TextInput
          style={styles.input}
          placeholder="Cantidad de lápices"
          keyboardType="numeric"
          value={lapices}
          onChangeText={setLapices}
        />

        <Button title="Calcular Total" onPress={calcularLapices} />

        {resultadoLapices !== '' && (
          <Text style={styles.resultado}>{resultadoLapices}</Text>
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
