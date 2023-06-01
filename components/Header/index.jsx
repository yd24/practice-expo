import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Phone Massager</Text>
      <Text style={styles.subtitle}>Use your phone for a soothing massage!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    paddingTop: 30,
  },
  subtitle: {
    color: '#B0DAFF',
    textAlign: 'center',
    marginTop: 10
  },
  container: {
    backgroundColor: '#146C94',
    width: '100%',
    marginTop: 25,
    padding: 20,
  }
});