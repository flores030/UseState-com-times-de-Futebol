import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const JogadoresScreen = ({ navigation, route }) => {
  const [consultas, setConsultas] = useState([]);
  const consultasExemplo = [
    {  name: "Cristiano Ronaldo", position: "Forward", age: 36 },
    {
      name: "Lionel Messi",
      position: "Attacking Midfielder",
      age: 34,
    },
    {
      name: "Neymar Jr.",
      position: "Forward",
      age: 29,
    },
    {
      name: "Kylian Mbappé",
      position: "Forward",
      age: 23,
    },
    {
      name: "Sergio Ramos",
      position: "Defender",
      age: 35,
    },
    {
      name: "Kevin De Bruyne",
      position: "Midfielder",
      age: 30,
    },
    {
      name: "Robert Lewandowski",
      position: "Forward",
      age: 32,
    },
    {
      name: "Virgil van Dijk",
      position: "Defender",
      age: 30,
    },
    {
      name: "Luka Modric",
      position: "Midfielder",
      age: 35,
    },
    {
      name: "Erling Haaland",
      position: "Forward",
      age: 21,
    },
  
    // Adicionar mais tecnicos
  ];


  useState(() => {
    setConsultas(consultasExemplo);
  }, []);

  return (
    <View style={styles.container}>
      {consultas.map((consulta, index) => (
        <View key={index} style={styles.consultaCard}>
          <Text>Name: {consulta.name}</Text>
          <Text>Position {consulta.position}</Text>
          <Text>Age: {consulta.age}</Text>
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
    backgroundColor: '#FCD6B4',
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
    color: '#A86D54',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default JogadoresScreen;
