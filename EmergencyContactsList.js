import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Linking, Image, StyleSheet } from 'react-native';

const emergencyContacts = [
  { name: 'Principal', phoneNumber: '0141-2770232', avatar: require('./images/Principal.png') },
  { name: 'Transport Incharge', phoneNumber: '9024149459', avatar: require('./images/AvatarIncharge.png') },
  { name: 'Security Officer', phoneNumber: '987-654-XXXX', avatar: require('./images/AvatarSecuruty.png') },
  { name: 'Health Center', phoneNumber: '555-123-XXXX', avatar: require('./images/AvatarMedical.png') },
  
  // Add more emergency contacts as needed
];

const EmergencyContactsList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.contactItem}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactNumber}>{item.phoneNumber}</Text>
      </View>
      <TouchableOpacity
        style={styles.callButton}
        onPress={() => Linking.openURL(`tel:${item.phoneNumber}`)}
      >
        <Text style={styles.callButtonText}>Call</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Emergency Contacts</Text>
      <FlatList
        data={emergencyContacts}
        renderItem={renderItem}
        keyExtractor={(item) => item.phoneNumber}
        style={styles.flatList}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  flatList: {
    flex: 1,
  },
  contactItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
    padding: 10,
    borderRadius: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  contactInfo: {
    flex: 1,
    marginRight: 10,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactNumber: {
    fontSize: 16,
    color: 'gray',
  },
  callButton: {
    backgroundColor: '#008000',
    borderRadius: 5,
    padding: 8,
    alignItems: 'center',
  },
  callButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default EmergencyContactsList;