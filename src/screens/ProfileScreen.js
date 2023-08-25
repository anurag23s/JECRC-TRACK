import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { User, getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, get } from 'firebase/database';
// import { auth1 } from './firebase';
// import { db1 } from './firebase';
import { onValue } from 'firebase/database';

const ProfileScreen = () => {
  const [userEmail, setUserEmail] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const db = getDatabase();

    const authStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);

        if (user.email) {
          const sanitizedEmail = user.email.replace(/[^a-zA-Z0-9]/g, '_');
          const dbPath = `users/userDetail_${sanitizedEmail}`;
          const userRef = ref(db, dbPath);

          onValue(
            userRef,
            (snapshot) => {
              if (snapshot.exists()) {
                const userData = snapshot.val();
                console.log('Retrieved User Data:', userData);
                setUserInfo(userData);
              }
            },
            {
              onlyOnce: true // This ensures that the listener fetches the data only once
            }
          );
        }
      }
    });

    return () => {
      authStateChanged();
    };
  }, []);

  return (
    <View style={styles.container}>
      {userEmail && (
        <Text style={styles.userInfo}>Driver's Email: {userEmail}</Text>
      )}

      {userInfo ? (
        <View>
          <Text style={styles.userInfo}>Contact: {userInfo.Contact}</Text>
          <Text style={styles.userInfo}>Name: {userInfo.Name}</Text>
          <Text style={styles.userInfo}>Bus_No: {userInfo.Bus_No}</Text>
          <Text style={styles.userInfo}>Route_No: {userInfo.Route_No}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  userInfo: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ProfileScreen;
