import { Pressable, Text, StyleSheet } from 'react-native';

export default function Toggle(props) {
  return(
    <Pressable 
      onPress={() => props.setMassageOn(!props.massageOn)}
      style={{ ...styles.toggle, ...(props.massageOn ? styles.toggleOff : styles.toggleOn) }}
    >
      <Text style={styles.toggleText}>
        {props.massageOn ? 'Turn Off' : 'Turn On'}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  toggle: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 50,
    paddingRight: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  toggleOn: {
    backgroundColor: '#FEFF86',
  },
  toggleOff: {
    backgroundColor: '#DDE6ED',
  },
  toggleText: {
    fontSize: 20,
    color: '#555555',
  }
});