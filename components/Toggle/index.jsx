import { Pressable, Text, StyleSheet } from 'react-native';

export default function Toggle() {
  return(
    <Pressable style={styles.toggle}>
      <Text style={styles.toggleText}>
        Turn On
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  toggle: {
    backgroundColor: '#FEFF86',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 50,
    paddingRight: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  toggleText: {
    fontSize: 20,
    color: '#555555',
  }
});