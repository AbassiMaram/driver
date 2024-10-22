import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DriverHome from './screens/Driver/DriverHome';
import CreateTrip from './screens/Driver/CreateTrip';
import ManageTrips from './screens/Driver/ManageTrips';
import DriverProfile from './screens/Driver/DriverProfile';
import DriverHistory from './screens/Driver/DriverHistory';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DriverHome">
        <Stack.Screen name="DriverHome" component={DriverHome} options={{ title: 'Accueil Conducteur' }} />
        <Stack.Screen name="CreateTrip" component={CreateTrip} options={{ title: 'Créer un Trajet' }} />
        <Stack.Screen name="ManageTrips" component={ManageTrips} options={{ title: 'Gérer mes Trajets' }} />
        <Stack.Screen name="DriverProfile" component={DriverProfile} options={{ title: 'Mon Profil' }} />
        <Stack.Screen name="DriverHistory" component={DriverHistory} options={{ title: 'Historique des Trajets' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
