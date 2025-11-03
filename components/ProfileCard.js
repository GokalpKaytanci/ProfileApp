import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

export default function ProfileCard({ name, role, imageSource }) {

  const handlePress = () => {
    Alert.alert(`${name}’in profiline dokundunuz.`);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.card}>
        <Image source={imageSource} style={styles.avatar} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 10,

    // gölge
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  role: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
