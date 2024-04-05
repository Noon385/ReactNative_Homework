import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground, Image, Alert } from 'react-native';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    Alert.alert(
      'Login',
      `Username: ${username}, Password: ${password}`,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    );
  }

  return (

    <ImageBackground source={require('./background.jpg')} style={styles.container}>
      {
        <View>
           <Image source={require('./pokemongo.jpg')} style={styles.image}></Image>
          <Text >REGISTER</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={(text) => setUsername(text)}
            keyboardType="default"
            placeholder='Username'
            required

          />


          <TextInput
            style={styles.input}
            placeholder='Password'
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            required
          />

          <Text onPress={handleSubmit} style={styles.button}>Login</Text>
        </View>
      }
    </ImageBackground>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    width: 200,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: 12,
    borderRadius: 4,
    width: 200,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 16,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain', // Optional: adjusts the image position to maintain aspect ratio
  },
  
});

export default App;