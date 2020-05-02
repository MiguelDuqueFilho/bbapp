import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

import {useAuth} from '../contexts/auth';

import AppRoutes from './AppRoutes';
import AuthRoutes from './AuthRoutes';

const Routes = () => {
  const {signed, loading} = useAuth();
  if (loading) {
    return (
      <View styles={{flex: 1, justifyContent: 'center', alignItens: 'center'}}>
        <Text>Aguardando Servidor...</Text>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }
  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
