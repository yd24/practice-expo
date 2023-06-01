import { Radio, VStack, Text } from 'native-base';
import { StyleSheet } from 'react-native';

export default function Types(props) {

  return (
    <Radio.Group
      name='MassageTypes'
      accessbilityLabel='Types of massage'
      value={props.massageType}
      onChange={newValue => setMassageType(newValue)}
    >
      <VStack style={styles.stack}>
        <Radio 
          value='steady'
          style={styles.radio}
        >
          <Text style={styles.text}>
            Steady
          </Text>
        </Radio>
        <Radio 
          value ='pulse'
          style={styles.radio}
        >
          <Text style={styles.text}>
            Pulse
          </Text>
        </Radio>
        <Radio 
          value='fast-pulse'
          style={styles.radio}
        >
          <Text style={styles.text}>
            Fast Pulse
          </Text>
        </Radio>
        <Radio 
          value='wave'
          style={styles.radio}
        >
          <Text style={styles.text}>
            Wave
          </Text>
        </Radio>
      </VStack>
    </Radio.Group>
  );
};

const styles = StyleSheet.create({
  stack: {
    gap: 10,
    marginTop: 40
  },
  text: {
    color: 'white',
    fontSize: 15
  }
});