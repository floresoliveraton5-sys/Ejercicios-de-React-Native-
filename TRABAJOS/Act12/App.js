import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState(null);

  const convertir = () => {
    const c = parseFloat(celsius);
    if (!isNaN(c)) {
      setFahrenheit((c * 1.8 + 32).toFixed(2));
    }
  };

  const reset = () => {
    setCelsius('');
    setFahrenheit(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Conversor de Celsius a Fahrenheit</Text>
      
      <TextInput
        placeholder="Introduce grados Celsius"
        keyboardType="numeric"
        value={celsius}
        onChangeText={setCelsius}
        style={styles.input}
      />
      
      <Button title="Convertir" onPress={convertir} color="red" />
      <View style={styles.space} />
      <Button title="Reset" onPress={reset} color="gray" />

      {fahrenheit && (
        <Text style={styles.result}>
          {celsius}°C = {fahrenheit}°F
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: '80%',
    textAlign: 'center',
  },
  result: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  space: {
    marginTop: 5,
  },
});
