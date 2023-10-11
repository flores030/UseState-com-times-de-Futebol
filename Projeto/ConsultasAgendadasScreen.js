import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const VisualizarTecnico = ({ navigation, route }) => {
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    if (route.params?.novaConsulta) {
      setConsultas([...consultas, route.params.novaConsulta]);
    }
  }, [route.params?.novaConsulta]);

  return (
    <View style={styles.container}>
      {consultas.map((consulta, index) => (
        <View key={index} style={styles.consultaCard}>
          <Text>Nome: {consulta.nome}</Text>
          <Text>Idade: {consulta.idade}</Text>
          <Text>Nacionalidade: {consulta.nacionalidade}</Text>
          <Text>Endereço: {consulta.experiencia}</Text>
        </View>
      ))}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    padding: 16,
  },
  consultaCard: {
    backgroundColor: '#F8F9FA',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FCB17E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 150, 
    alignSelf: 'center', 
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default VisualizarTecnico;
