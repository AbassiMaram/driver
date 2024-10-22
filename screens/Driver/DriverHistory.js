import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';
import styles from '../styles';

const DriverHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await axios.get('https://example.com/api/trips/history');
      setHistory(response.data);
    } catch (error) {
      Alert.alert('Erreur', 'Erreur lors de la récupération de l\'historique.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historique des Trajets</Text>
      <FlatList
        data={history}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.trip}>
            <Text>Destination: {item.destination}</Text>
            <Text>Date: {item.date}</Text>
            <Text>Passagers: {item.passengers}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DriverHistory;
