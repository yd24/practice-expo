import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, Vibration } from 'react-native';
import { NativeBaseProvider } from 'native-base';

import Header from './components/Header';
import Toggle from './components/Toggle';
import Types from './components/Types';

export default function App() {
  const [massageOn, setMassageOn] = useState(false);
  const [massageType, setMassageType] = useState('steady');

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
      <Header />
      <View style={styles.container}>
        <Toggle massageOn={massageOn} setMassageOn={setMassageOn}/>
        <Types massageType={massageType} setMassageType={setMassageType}/>
        <Text>{`${massageOn}`}</Text>
        <Text>{`${massageType}`}</Text>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#146C94',
    alignItems: 'center',
    justifyContent: 'center',
  }
});