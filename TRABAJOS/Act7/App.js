import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  // ---------- Salario del obrero ----------
  const [horas, setHoras] = useState('');
  const [extras, setExtras] = useState('');
  const [salarioNeto, setSalarioNeto] = useState(null);

  const calcularSalario = () => {
    const h = parseFloat(horas);
    const e = parseFloat(extras);
    if (!isNaN(h) && !isNaN(e)) {
      const pagoHora = 50;
      const pagoBase = h * pagoHora * 15; // 15 días
      const pagoExtras = e * pagoHora * 1.5; // horas extras al 150%
      const salarioBruto = pagoBase + pagoExtras;
      const compensacion = salarioBruto * 0.02;
      const imss = salarioBruto * 0.015;
      const ispt = salarioBruto * 0.012;
      const neto = salarioBruto + compensacion - imss - ispt;
      setSalarioNeto(neto.toFixed(2));
    }
  };
  const resetSalario = () => {
    setHoras('');
    setExtras('');
    setSalarioNeto(null);
  };

  // ---------- Operaciones básicas ----------
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularOperaciones = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (!isNaN(a) && !isNaN(b)) {
      setResultado({
        suma: a + b,
        resta: a - b,
        multiplicacion: a * b,
        division: b !== 0 ? (a / b).toFixed(2) : 'No se divide entre 0'
      });
    }
  };
  const resetOperaciones = () => {
    setNum1('');
    setNum2('');
    setResultado(null);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Calculadora Profesional</Text>

      {/* Salario */}
      <View style={styles.section}>
        <Text style={styles.title}>Cálculo de Salario Neto</Text>
        <TextInput
          placeholder="Horas diarias"
          keyboardType="numeric"
          value={horas}
          onChangeText={setHoras}
          style={styles.input}
        />
        <TextInput
          placeholder="Horas extras"
          keyboardType="numeric"
          value={extras}
          onChangeText={setExtras}
          style={styles.input}
        />
        <Button title="Calcular Salario" onPress={calcularSalario} color="black" />
        <View style={styles.space} />
        <Button title="Reset" onPress={resetSalario} color="gray" />
        {salarioNeto && (
          <Text style={styles.result}>Salario Neto: ${salarioNeto} MXN</Text>
        )}
      </View>

      {/* Operaciones */}
      <View style={styles.section}>
        <Text style={styles.title}>Operaciones Básicas</Text>
        <TextInput
          placeholder="Número 1"
          keyboardType="numeric"
          value={num1}
          onChangeText={setNum1}
          style={styles.input}
        />
        <TextInput
          placeholder="Número 2"
          keyboardType="numeric"
          value={num2}
          onChangeText={setNum2}
          style={styles.input}
        />
        <Button title="Calcular" onPress={calcularOperaciones} color="black" />
        <View style={styles.space} />
        <Button title="Reset" onPress={resetOperaciones} color="gray" />
        {resultado && (
          <Text style={styles.result}>
            Suma: {resultado.suma}{"\n"}
            Resta: {resultado.resta}{"\n"}
            Multiplicación: {resultado.multiplicacion}{"\n"}
            División: {resultado.division}
          </Text>
        )}
      </View>
    </ScrollView>
  );
}

// ---------- ESTILOS ----------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
    backgroundColor: '#8a8383ff',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#ebece496',
    shadowColor: '#181717ff',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  result: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#161414ff',
  },
  space: {
    marginTop: 5,
  },
});
