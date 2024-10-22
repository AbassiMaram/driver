import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  primaryColor: '#FFA500',  // Orange
  secondaryColor: '#FFFFFF', // Blanc

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF', // Fond blanc
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFA500', // Titre en orange
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#FFA500', // Bordure orange
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#FFA500', // Fond orange
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // Texte en blanc
    fontWeight: 'bold',
  },
  trip: {
    marginBottom: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: '#FFA500', // Bordure orange
    borderRadius: 5,
    backgroundColor: '#FFFFFF', // Fond blanc pour les trajets
  },
});

export default styles;
