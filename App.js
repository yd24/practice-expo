import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, Vibration } from 'react-native';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  const [massageOn, setMassageOn] = useState(false);
  const [massageType, setMassageType] = useState(null);

  const massage = (action) => {
    switch(action) {
      case 'pulse':
        Vibration.vibrate([1000, 500], true);
        break;
      case 'fast-pulse':
        Vibration.vibrate([50, 50], true);
        break;
      case 'wave':
        Vibration.vibrate([100, 600, 80, 400, 60, 300, 50, 200, 40, 100, 30, 50, 30, 50, 40, 100, 50, 200, 60, 300, 80, 400], true);
        break;
      case 'steady':
        Vibration.vibrate([0, 500], true);
        break;
      default:
        Vibration.vibrate([0, 500], true);
        break;
    }
  };

  useEffect(() => {
    if (massageOn) {
      massage(massageType);
    } else {
      Vibration.cancel();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [massageOn])

  useEffect(() => {
    if (massageOn) {
      massage(massageType);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [massageType])

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Phone Massager</Text>

        <Text>{`${massageOn}`}</Text>
        <Text>{`${massageType}`}</Text>

        <View style={styles.button}>
          <Button
            title={massageOn ? 'Turn off' : 'Turn on'}
            onPress={() => {
              setMassageOn(!massageOn);
            }}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Level 1"
            onPress={() => {
              setMassageType('pulse');
            }}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Level 2"
            onPress={() => {
              setMassageType('fast-pulse');
            }}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Level 3"
            onPress={() => {
              setMassageType('wave');
            }}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Level 4"
            onPress={() => {
              setMassageType('steady');
            }}
          />
        </View>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20
  },
  button: {
    marginBottom: 15,
  }
});