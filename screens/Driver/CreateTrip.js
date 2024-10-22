import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import styles from '../styles';

const CreateTrip = () => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [seats, setSeats] = useState('');

  const handleCreateTrip = async () => {
    try {
      const response = await axios.post('https://example.com/api/trips', {
        destination,
        date,
        time,
        seats,
      });
      Alert.alert('Succès', 'Trajet créé avec succès!');
    } catch (error) {
      Alert.alert('Erreur', 'Erreur lors de la création du trajet.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Créer un Trajet</Text>
      <TextInput
        placeholder="Destination"
        value={destination}
        onChangeText={setDestination}
        style={styles.input}
      />
      <TextInput
        placeholder="Date"
        value={date}
        onChangeText={setDate}
        style={styles.input}
      />
      <TextInput
        placeholder="Heure"
        value={time}
        onChangeText={setTime}
        style={styles.input}
      />
      <TextInput
        placeholder="Nombre de Places"
        value={seats}
        onChangeText={setSeats}
        keyboardType="numeric"
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleCreateTrip}>
        <Text style={styles.buttonText}>Créer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateTrip;
