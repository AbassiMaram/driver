import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import styles from '../styles';

const DriverProfile = () => {
  const [profile, setProfile] = useState({ name: '', vehicle: '' });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await axios.get('https://example.com/api/profile');
      setProfile(response.data);
    } catch (error) {
      Alert.alert('Erreur', 'Erreur lors de la récupération du profil.');
    }
  };

  const handleUpdateProfile = async () => {
    try {
      await axios.put('https://example.com/api/profile', profile);
      Alert.alert('Succès', 'Profil mis à jour avec succès!');
    } catch (error) {
      Alert.alert('Erreur', 'Erreur lors de la mise à jour du profil.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mon Profil</Text>
      <TextInput
        placeholder="Nom"
        value={profile.name}
        onChangeText={(value) => setProfile({ ...profile, name: value })}
        style={styles.input}
      />
      <TextInput
        placeholder="Véhicule"
        value={profile.vehicle}
        onChangeText={(value) => setProfile({ ...profile, vehicle: value })}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleUpdateProfile}>
        <Text style={styles.buttonText}>Mettre à jour</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DriverProfile;
