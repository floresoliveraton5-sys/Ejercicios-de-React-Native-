import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularMenor = () => {
    const n1 = parseInt(num1);
    const n2 = parseInt(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado('⚠️ Ingresa dos números válidos.');
      return;
    }

    if (n1 === n2) {
      setResultado('🔸 Ambos números son iguales.');
    } else if (n1 < n2) {
      setResultado(`✅ El menor es: ${n1}`);
    } else {
      setResultado(`✅ El menor es: ${n2}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔢 Número Menor</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingresa el primer número"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      <TextInput
        style={styles.input}
        placeholder="Ingresa el segundo número"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      <Button title="Calcular Menor" onPress={calcularMenor} />

      {resultado !== '' && <Text style={styles.resultado}>{resultado}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  input: {
    width: '80%',
    height: 45,
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0A4D68',
  },
});
