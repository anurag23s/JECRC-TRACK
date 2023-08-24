/*import React from 'react';
import { View, Text, Modal, Button, StyleSheet, TouchableOpacity } from 'react-native';
import ProfileScreen from './route_select/ProfileScreen'; 
// Import the UserProfile component
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, get } from 'firebase/database';
import { auth1 } from './firebase';
import { color } from 'react-native-tailwindcss';

const UserAvatar = ({ onClose }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <ProfileScreen />

          <View style={styles.spacer} />
          { Close Button }
          <Button title="Close" onPress={onClose}  />
         
          { Spacer }
          <View style={styles.spacer} />

          {/* Logout Button }
          <TouchableOpacity onPress={() => auth1.signOut()} style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'lightgrey',
    padding: 20,
    borderRadius: 30,
    width: '80%',
    marginTop:20
    
  },
  spacer: {
    height: 10 // Add a vertical space between Close and Logout buttons
  },
  logoutButton: {
    // Add top margin to push Logout button below Close button
    backgroundColor: 'red',
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: 'white',
    textAlign : 'center'
    
  },

});

export default UserAvatar;

*/