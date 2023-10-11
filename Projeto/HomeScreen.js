import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🥅 Cadastro de técnicos de futebol ⚽</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Agendamento')}>
        <Text style={styles.buttonText}>Cadastrar Tecnicos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('VisualizarTecnico')}>
        <Text style={styles.buttonText}> Visualizar Tecnicos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('JogadoresCadastrados')}>
        <Text style={styles.buttonText}> Visualizar Jogadores </Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFE7BA',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FCB17E',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
  },

  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default HomeScreen;
