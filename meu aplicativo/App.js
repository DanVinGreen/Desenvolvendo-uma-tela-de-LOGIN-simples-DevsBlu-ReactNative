// App.js

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Button,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const App = () => {
  // Estados para armazenar o e-mail e a senha digitados pelo usuário
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Verifica se ambos os campos estão preenchidos para habilitar o botão
  const isButtonDisabled = email === '' || password === '';

  // Função chamada ao pressionar o botão "ENTRAR"
  const handleLogin = () => {
    Alert.alert('Sucesso!', 'Login realizado com sucesso!');
  };

  // Função para o link "Registrar-se"
  const handleRegister = () => {
    Alert.alert('Aviso', 'Tela de Registro em breve!');
  };

  // Função para o link "Redefinir a Senha"
  const handleForgotPassword = () => {
    Alert.alert('Aviso', 'Tela de redefinição de senha em breve!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <View style={styles.content}>
          {/* 1. Imagem (Logo) */}
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.logo}
          />
          <Text style={styles.title}>Bem-vindo!</Text>

          {/* 2. Campo de E-mail */}
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="digite seu e-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          {/* 3. Campo de Senha */}
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="digite sua senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry // Oculta o texto da senha
          />

          {/* 4. Botão de Entrar */}
          <View style={styles.buttonContainer}>
            <Button
              title="ENTRAR"
              onPress={handleLogin}
              disabled={isButtonDisabled} // Habilitado/desabilitado dinamicamente
              color="#007BFF"
            />
          </View>

          {/* 5. Links */}
          <View style={styles.linksContainer}>
            <Pressable onPress={handleRegister}>
              <Text style={styles.linkText}>Registrar-se</Text>
            </Pressable>
            <Pressable onPress={handleForgotPassword}>
              <Text style={styles.linkText}>Redefinir a Senha</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

// StyleSheet para estilizar os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Um fundo cinza claro
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  label: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#FFF',
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 10,
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  linkText: {
    color: '#007BFF',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});

//last code

export default App;