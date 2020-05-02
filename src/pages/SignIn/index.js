import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../contexts/auth';
// import { StackActions, NavigationActions } from "@react-navigation";
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function SignIn() {
  const {signed, signIn, forgot} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigation = useNavigation();

  const handleEmailChange = (values) => {
    setEmail(values);
  };

  const handlePasswordChange = (values) => {
    setPassword(values);
  };

  // const handleCreateAccountPress = () => {
  //   console.log('chamando handleCreateAccountPress >>>>>>>>>>>>');
  // };

  const handleForgotPress = async () => {
    if (email.length === 0) {
      setError('Preencha E-mail para continuar!', () => false);
    } else {
      const response = await forgot(email);
      setEmail('');
      setPassword('');
      setError(response.message);
    }
  };

  const handleSignInPress = async () => {
    if (email.length === 0 || password.length === 0) {
      setError('Preencha E-mail e senha para continuar!', () => false);
    } else {
      const response = await signIn(email, password);
      if (!response) {
        setError(
          'login não efetuado, favor rever o credenciamento do usuário!',
        );
        setEmail('');
        setPassword('');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logoImg} />
      <View style={styles.inputView}>
        <TextInput
          value={email}
          autoCapitalize="none"
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#13131a"
          onChangeText={handleEmailChange}
          autoCorrect={false}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          autoCapitalize="none"
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#13131a"
          onChangeText={handlePasswordChange}
          autoCorrect={false}
        />
      </View>
      {error.length !== 0 && <Text style={styles.errorMessage}>{error}</Text>}
      <TouchableOpacity onPress={handleForgotPress}>
        <Text style={styles.forgot}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={handleSignInPress}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={handleCreateAccountPress}>
        <Text style={styles.signup}>Signup</Text>
      </TouchableOpacity> */}
    </View>
  );
}
