import { Pressable, Text, StyleSheet } from 'react-native';

export default function Toggle(props) {
  return(
    <Pressable 
      onPress={() => props.setMassageOn(!props.massageOn)}
      style={styles.toggle}
    >
      <Text style={styles.toggleText}>
        {props.massageOn ? 'Turn Off' : 'Turn On'}
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