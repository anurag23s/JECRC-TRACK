import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const driversData = [
  { id: '1', name: 'Driver 1', busNumber: 'BUS123', route: 'Route A', phoneNumber: '987-654-XXXX', avatar: require('./images/Avatar1.png') },
  { id: '2', name: 'Driver 2', busNumber: 'BUS456', route: 'Route B', phoneNumber: '987-123-XXXX', avatar: require('./images/Avatar2.png') },
  { id: '3', name: 'Driver 3', busNumber: 'BUS123', route: 'Route C', phoneNumber: '987-456-XXXX', avatar: require('./images/Avatar1.png') },
  { id: '4', name: 'Driver 4', busNumber: 'BUS456', route: 'Route D', phoneNumber: '987-789-XXXX', avatar: require('./images/Avatar2.png') },
  // Add more drivers here
];

const DriverList = () => {
  const handleCall = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.driverItem}>
       <View style={styles.avatarContainer}>
        <Image source={item.avatar} style={styles.avatar} />
      </View>
      <View style={styles.driverDetails}>
        <Text style={styles.driverName}>{item.name}</Text>
        <Text>Bus Number: {item.busNumber}</Text>
        <Text>Route: {item.route}</Text>
        <Text>Phone Number: {item.phoneNumber}</Text>
      </View>
      <TouchableOpacity onPress={() => handleCall(item.phoneNumber)} style={styles.callButton}>
        <FontAwesome name="phone" size={20} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>DRIVER LIST</Text>
      <FlatList
        data={driversData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  driverItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
  },
  avatarContainer: {
    marginRight: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  driverDetails: {
    flex: 1,
  },
  driverName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  callButton: {
    backgroundColor: '#008000',
    borderRadius: 20,
    padding: 8,
  },
});

export default DriverList;
