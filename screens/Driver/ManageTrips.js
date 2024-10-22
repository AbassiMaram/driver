import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';
import styles from '../styles';

const ManageTrips = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      const response = await axios.get('https://example.com/api/trips');
      setTrips(response.data);
    } catch (error) {
      Alert.alert('Erreur', 'Erreur lors de la récupération des trajets.');
    }
  };

  const handleDeleteTrip = async (tripId) => {
    try {
      await axios.delete(`https://example.com/api/trips/${tripId}`);
      Alert.alert('Succès', 'Trajet annulé avec succès!');
      fetchTrips(); // Récupérer les trajets à jour
    } catch (error) {
      Alert.alert('Erreur', 'Erreur lors de l\'annulation du trajet.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gérer mes Trajets</Text>
      <FlatList
        data={trips}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.trip}>
            <Text>{item.destination}</Text>
            <Text>{item.date} à {item.time}</Text>
            <TouchableOpacity style={styles.button} onPress={() => handleDeleteTrip(item.id)}>
              <Text style={styles.buttonText}>Annuler</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default ManageTrips;
