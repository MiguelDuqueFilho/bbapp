import React, {useEffect, useState} from 'react';
import path from 'path';
import {useNavigation} from '@react-navigation/native';
import {useEvent} from '../../contexts/event';
import {useAuth} from '../../contexts/auth';

import styles from './styles';
import {Feather} from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';

export default function Events() {
  const {events, total, loadEvents, eventselected} = useEvent();
  const {signOut} = useAuth();

  const navigation = useNavigation();

  async function logoff() {
    await signOut();
  }

  function navigateToDetails(event) {
    eventselected(event);
    navigation.navigate('Detail');
  }

  async function handleLoadEvents() {
    await loadEvents();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={logoImg} />
        <TouchableOpacity onPress={logoff}>
          <Feather
            name="user-x"
            size={32}
            backgroundColor="#3b5998"
            color="#593f60"
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.headerText}>
        Total de
        <Text style={styles.headerTextBold}>{` ${total} eventos`}</Text>.
      </Text>
      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.description}>
        Escolha um dos eventos abaixo para gerencia-lo.
      </Text>
      <FlatList
        data={events}
        style={styles.eventList}
        keyExtractor={(event) => String(event.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={handleLoadEvents}
        onEndReachedThreshold={0.1}
        renderItem={({item: event}) => (
          <View style={styles.event}>
            <View style={styles.header}>
              <Image
                source={{
                  uri: `http://192.168.100.68:3030/images/events/${path.basename(
                    event.eventFilename,
                  )}`,
                }}
                style={styles.avatar}
              />
            </View>
            <Text style={styles.eventValue}>{event.eventName}</Text>

            <TouchableOpacity
              style={styles.detailsButtom}
              onPress={() => navigateToDetails(event)}>
              <Text style={styles.detailsButtomText}>Ver mais detalhes</Text>
              <Feather name="arrow-right-circle" size={26} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
