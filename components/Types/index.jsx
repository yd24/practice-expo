import { Radio, VStack, Text } from 'native-base';
import { StyleSheet } from 'react-native';

export default function Types(props) {

  return (
    <Radio.Group
      name='MassageTypes'
      accessbilityLabel='Types of massage'
      value={props.massageType}
      onChange={newValue => props.setMassageType(newValue)}
    >
      <VStack style={styles.stack}>
        <Radio 
          value='steady'
        >
          <Text style={styles.text}>
            Steady
          </Text>
        </Radio>
        <Radio 
          value ='pulse'
        >
          <Text style={styles.text}>
            Pulse
          </Text>
        </Radio>
        <Radio 
          value='fast-pulse'
        >
          <Text style={styles.text}>
            Fast Pulse
          </Text>
        </Radio>
        <Radio 
          value='wave'
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