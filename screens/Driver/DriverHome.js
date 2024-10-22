import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles';

const DriverHome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue Conducteur</Text>
      <Button
        title="Créer un Trajet"
        onPress={() => navigation.navigate('CreateTrip')}
      />
      <Button
        title="Gérer mes Trajets"
        onPress={() => navigation.navigate('ManageTrips')}
      />
      <Button
        title="Mon Profil"
        onPress={() => navigation.navigate('DriverProfile')}
      />
      <Button
        title="Historique des Trajets"
        onPress={() => navigation.navigate('DriverHistory')}
      />
    </View>
  );
};

export default DriverHome;
