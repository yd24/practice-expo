import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Haptics from 'expo-haptics';

export default function App() {
  const [massageOn, setMassgeOn] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Phone Massager</Text>
      <View style={styles.button}>
        <Button
          title="Level 1"
          onPress={() => {
            Haptics.notificationAsync(
              Haptics.NotificationFeedbackType.Success
            );
          }}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Level 2"
          style={styles.button}
          onPress={() => {
            Haptics.notificationAsync(
              Haptics.NotificationFeedbackType.Error
            );
          }}
        />
      </View>

      <View>
        <Button
          title="Level 3"
          onPress={() => {
            Haptics.notificationAsync(
              Haptics.NotificationFeedbackType.Warning
            );
          }}
        />
      </View>

      <View>
        <Button
          title="Level 4"
          onPress={() => {
            Haptics.impactAsync(
              Haptics.ImpactFeedbackStyle.Light
            );
          }}
        />
      </View>

      <View>
        <Button
          title="Level 5"
          onPress={() => {
            Haptics.impactAsync(
              Haptics.ImpactFeedbackStyle.Medium
            );
          }}
        />
      </View>


      <View>
        <Button
          title="Level 6"
          onPress={() => {
            Haptics.impactAsync(
              Haptics.ImpactFeedbackStyle.Heavy
            );
          }}
        />
      </View>
    </View>
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