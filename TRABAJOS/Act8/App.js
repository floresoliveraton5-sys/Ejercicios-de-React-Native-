import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [pies, setPies] = useState('');
  const [metros, setMetros] = useState(null);

  const convertir = () => {
    const p = parseFloat(pies);
    if (!isNaN(p)) {
      setMetros((p * 0.3048).toFixed(4)); // 4 decimales
    }
  };

  const reset = () => {
    setPies('');
    setMetros(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Conversor de Pies a Metros</Text>
      
      <TextInput
        placeholder="Introduce pies"
        keyboardType="numeric"
        value={pies}
        onChangeText={setPies}
        style={styles.input}
      />
      
      <Button title="Convertir" onPress={convertir} color="red" />
      <View style={styles.space} />
      <Button title="Reset" onPress={reset} color="gray" />

      {metros && (
        <Text style={styles.result}>
          {pies} pies = {metros} metros
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
