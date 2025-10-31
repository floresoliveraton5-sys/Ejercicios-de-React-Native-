import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [galones, setGalones] = useState('');
  const [litros, setLitros] = useState(null);

  const convertir = () => {
    const g = parseFloat(galones);
    if (!isNaN(g)) {
      setLitros((g * 3.78541).toFixed(4)); // 4 decimales
    }
  };

  const reset = () => {
    setGalones('');
    setLitros(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Conversor de Galones a Litros</Text>
      
      <TextInput
        placeholder="Introduce galones"
        keyboardType="numeric"
        value={galones}
        onChangeText={setGalones}
        style={styles.input}
      />
      
      <Button title="Convertir" onPress={convertir} color="red" />
      <View style={styles.space} />
      <Button title="Reset" onPress={reset} color="gray" />

      {litros && (
        <Text style={styles.result}>
          {galones} galones = {litros} litros
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
