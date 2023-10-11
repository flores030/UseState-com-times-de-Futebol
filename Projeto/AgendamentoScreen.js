import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

const AgendamentoScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [nacionalidade, setNacionalidade] = useState('');
  const [experiencia, setExperiencia] = useState('');
  

  const handleCadastrarTecnico = () => {
    if (!nome || !idade || !nacionalidade || !experiencia ) {
      Alert.alert('Por favor, preencha todos os campos.');
      return;
    }

    const consultaInfo = {
      nome,
      idade,
      nacionalidade,
      experiencia,
    };

    console.log(consultaInfo);

    navigation.navigate('VisualizarTecnico', { novaConsulta: consultaInfo });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Idade"
        value={idade}
        onChangeText={(text) => setIdade(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nacionalidade"
        value={nacionalidade}
        onChangeText={(text) => setNacionalidade(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Experiência do técnico"
        value={experiencia}
        onChangeText={(text) => setExperiencia(text)}
      />
      
      <Button title="Cadastrar Tecnico" onPress={handleCadastrarTecnico} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: '#FCB17E',
    borderWidth: 3,
    marginBottom: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  button: {
    backgroundColor: '#FCB17E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 150, 
    alignSelf: 'center', 
  },
});

export default AgendamentoScreen;
