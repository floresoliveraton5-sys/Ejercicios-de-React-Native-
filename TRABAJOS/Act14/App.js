import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  // Estados para el salario
  const [horas, setHoras] = useState(8); // horas diarias
  const [dias, setDias] = useState(15); // días por quincena
  const [salarioNeto, setSalarioNeto] = useState(null);

  // Estados para el segundo ejercicio (mayor de dos números)
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [mayor, setMayor] = useState(null);

  // Función para calcular salario neto
  const calcularSalario = () => {
    const pagoHora = 50;
    const horasTotales = horas * dias;
    const salarioBruto = horasTotales * pagoHora;
    const compensacion = salarioBruto * 0.02;
    const descuentoIMSS = salarioBruto * 0.015;
    const descuentoISPT = salarioBruto * 0.012;
    const salarioFinal = salarioBruto + compensacion - descuentoIMSS - descuentoISPT;
    setSalarioNeto(salarioFinal.toFixed(2));
  };

  // Función para calcular el mayor de dos números
  const calcularMayor = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setMayor('⚠️ Ingresa dos números válidos.');
      return;
    }

    if (a === b) {
      setMayor('🔹 Ambos números son iguales.');
    } else {
      setMayor(`✅ El número mayor es: ${a > b ? a : b}`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>💼 Cálculo del salario neto del trabajador</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Horas trabajadas por día:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={horas.toString()}
          onChangeText={setHoras}
        />

        <Text style={styles.label}>Días trabajados (quincena):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={dias.toString()}
          onChangeText={setDias}
        />

        <Button title="Calcular Salario Neto" onPress={calcularSalario} />

        {salarioNeto && (
          <Text style={styles.resultado}>
            💰 Salario Neto: ${salarioNeto}
          </Text>
        )}
      </View>

      <Text style={styles.title}>🔢 Número mayor de dos valores</Text>

      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Primer número"
          keyboardType="numeric"
          value={num1}
          onChangeText={setNum1}
        />

        <TextInput
          style={styles.input}
          placeholder="Segundo número"
          keyboardType="numeric"
          value={num2}
          onChangeText={setNum2}
        />

        <Button title="Calcular Número Mayor" onPress={calcularMayor} />

        {mayor && <Text style={styles.resultado}>{mayor}</Text>}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E8F0FE',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 25,
    elevation: 4,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#F9F9F9',
  },
  resultado: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0A4D68',
    textAlign: 'center',
  },
});
