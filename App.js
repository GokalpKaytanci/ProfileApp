import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';

import ProfileCard from './components/ProfileCard';

export default function App() {
  return (
   <SafeAreaView style={styles.container}>
  <ScrollView contentContainerStyle={styles.scrollContent}>
    <View style={styles.content}>
      <ProfileCard
        name="Ada Lovelace"
        role="Mathematician"
        imageSource={require('./assets/AdaLovelace.jpg')}
      />

      <ProfileCard
        name="Grace Hopper"
        role="Software Pioneer"
        imageSource={require('./assets/GraceHopper.jpg')}
      />

      <ProfileCard
        name="Alan Turing"
        role="Cryptologist"
        imageSource={require('./assets/AlanTuring.jpg')}
      />
    </View>
  </ScrollView>
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
    scrollContent: {
    paddingVertical: 20,
  },
  content: {
    paddingHorizontal: 20,
  },
  content: {
    padding: 20,
  },
});
