import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const dummyBusRoutes = [
  // Your bus route data...
  {
    id: 'routeA',
    name: 'Route A : NIRWARU-JECRC',
    stops: [
      { id: 1, name: 'Stop 1 : NIRWARU', expectedArrival: '10:00 AM' },
      { id: 2, name: 'Stop 2 : AMBEY HOSPITAL', expectedArrival: '10:15 AM' },
      { id: 3, name: 'Stop 3 : VAIDH Jl', expectedArrival: '10:30 AM' },
      { id: 4, name: 'Stop 4 : NATH JI Kl THADI', expectedArrival: '10:00 AM' },
      { id: 5, name: 'Stop 5 : NIWARU BYE PAS', expectedArrival: '10:15 AM' },
      { id: 6, name: 'Stop 6 : KHIRNI PHATAK', expectedArrival: '10:30 AM' },
      { id: 7, name: 'Stop 7 : HANUMAN NAGAR', expectedArrival: '10:00 AM' },
      { id: 8, name: 'Stop 8 : VAISHALI CIRCLE', expectedArrival: '10:15 AM' },
      { id: 9, name: 'Stop 9 : GUPTA STORE', expectedArrival: '10:30 AM' },
      { id: 10, name: 'Stop 10 : BHARAT APPARTMENT', expectedArrival: '10:00 AM' },
      { id: 11, name: 'Stop 11 : AKSHAR DHAM', expectedArrival: '10:15 AM' },
      { id: 12, name: 'Stop 12 : CHITRAKOOT', expectedArrival: '10:30 AM' },
      { id: 13, name: 'Stop 13 : CHITRAKOOT BANK CIRCLE', expectedArrival: '10:15 AM' },
      { id: 14, name: 'Stop 14 : DABAS PULIA', expectedArrival: '10:30 AM' },
      { id: 15, name: 'Stop 15 : 200 FEET BYEPASS', expectedArrival: '10:00 AM' },
      { id: 16, name: 'Stop 16 : PUNJABI DHABA', expectedArrival: '10:15 AM' },
      { id: 17, name: 'Stop 17 : OM HOTEL', expectedArrival: '10:30 AM' },
      { id: 18, name: 'Stop 18 : METRO STATION', expectedArrival: '10:15 AM' },
      { id: 19, name: 'Stop 19 : JECRC COLLEGE', expectedArrival: '10:30 AM' },
    ],
  },
  {
    id: 'routeB',
    name: 'Route B : MEENA PETROL PUMP-JECRC',
    stops: [
      { id: 1, name: 'Stop 1 : MEENA PETROL PUMP', expectedArrival: '11:00 AM' },
      { id: 2, name: 'Stop 2 : KHOLE KE HANUMAN JI', expectedArrival: '11:15 AM' },
      { id: 3, name: 'Stop 3 : RAMGRAH MODE', expectedArrival: '11:30 AM' },
      { id: 4, name: 'Stop 4 : DUSSEHRA KOTHI', expectedArrival: '10:00 AM' },
      { id: 5, name: 'Stop 5 : JORAWAR SINGH GATE', expectedArrival: '10:15 AM' },
      { id: 6, name: 'Stop 6 : BADI CHOPA', expectedArrival: '10:30 AM' },
      { id: 7, name: 'Stop 7 : JOHARI BAZAR', expectedArrival: '10:00 AM' },
      { id: 8, name: 'Stop 8 : NEW GATE', expectedArrival: '10:15 AM' },
      { id: 9, name: 'Stop 9 : AJMERI GATE', expectedArrival: '10:30 AM' },
      { id: 10, name: 'Stop 10 : S M.S HOSPITAL', expectedArrival: '10:00 AM' },
      { id: 11, name: 'Stop 11 : LAL KOTHI', expectedArrival: '10:15 AM' },
      { id: 12, name: 'Stop 12 : GANDHI NAGAR CLUB', expectedArrival: '10:30 AM' },
      { id: 13, name: 'Stop 13 : AG COLANY', expectedArrival: '10:30 AM' },
      { id: 14, name: 'Stop 14 : BHARADWAJ PETROL PUMP', expectedArrival: '10:00 AM' },
      { id: 15, name: 'Stop 15 : JAWAHAR CIRCLE', expectedArrival: '10:15 AM' },
      { id: 16, name: 'Stop 16 : JECRC COLLEGE', expectedArrival: '10:30 AM' },
    ],
  },
  {
    id: 'routeC',
    name: 'Route C : GANDHI PATH PULIYA',
    stops: [
      { id: 1, name: 'Stop 1 : GANDHI PATH PULIYA', expectedArrival: '10:00 AM' },
      { id: 2, name: 'Stop 2 : CHITRAKOOT CHAURAHA', expectedArrival: '10:15 AM' },
      { id: 3, name: 'Stop 3 : AKSHAR DHAM', expectedArrival: '10:30 AM' },
      { id: 4, name: 'Stop 4 : SBI BANK', expectedArrival: '10:00 AM' },
      { id: 5, name: 'Stop 5 : NIRMAN NAGAR', expectedArrival: '10:15 AM' },
      { id: 6, name: 'Stop 6 : SHYAM NAGAR', expectedArrival: '10:30 AM' },
      { id: 7, name: 'Stop 7 : SANJEEVANI HOSPITAL', expectedArrival: '10:00 AM' },
      { id: 8, name: 'Stop 8 : VIVEK VIHAR', expectedArrival: '10:15 AM' },
      { id: 9, name: 'Stop 9 : GURJAR KI THADI', expectedArrival: '10:30 AM' },
      { id: 10, name: 'Stop 10 : RIDDHI SIDDHI', expectedArrival: '10:00 AM' },
      { id: 11, name: 'Stop 11 : TRIVENI NAGAR CHAURAHA', expectedArrival: '10:15 AM' },
      { id: 12, name: 'Stop 12 : GOPAL PURA CHOKI', expectedArrival: '10:30 AM' },
      { id: 10, name: 'Stop 13 : MAHAVEER NAGAR', expectedArrival: '10:00 AM' },
      { id: 11, name: 'Stop 14 : DURGAPURA ROAD', expectedArrival: '10:15 AM' },
      { id: 12, name: 'Stop 15 : JECRC COLLEGE', expectedArrival: '10:30 AM' },
    ],
  },
  {
    id: 'routeD',
    name: 'Route D : KHORA BEESAL-JECRC',
    stops: [
      { id: 1, name: 'Stop 1 : KHORA BEESAL', expectedArrival: '10:00 AM' },
      { id: 2, name: 'Stop 2 : SITAWALI PHATAK', expectedArrival: '10:15 AM' },
      { id: 3, name: 'Stop 3 : NADI KA PHATAK', expectedArrival: '10:30 AM' },
      { id: 4, name: 'Stop 4 : DADI KAPHATAK', expectedArrival: '10:00 AM' },
      { id: 5, name: 'Stop 5 : MURLIPUR THANA', expectedArrival: '10:15 AM' },
      { id: 6, name: 'Stop 6 : GORAS BHANDAR', expectedArrival: '10:30 AM' },
      { id: 7, name: 'Stop 7 : SONI HOSPITAL', expectedArrival: '10:00 AM' },
      { id: 8, name: 'Stop 8 : AGRASEN TOWER', expectedArrival: '10:15 AM' },
      { id: 9, name: 'Stop 9 : BIYANI COLLEGE', expectedArrival: '10:30 AM' },
      { id: 10, name: 'Stop 10 : BANSAL FURNITURE', expectedArrival: '10:00 AM' },
      { id: 11, name: 'Stop 11 : AMBA BARI', expectedArrival: '10:15 AM' },
      { id: 12, name: 'Stop 12 : BANI PARK THANA', expectedArrival: '10:30 AM' },
      { id: 13, name: 'Stop 13 : ANGLESHWER', expectedArrival: '10:15 AM' },
      { id: 14, name: 'Stop 14 : KHASA KOTH', expectedArrival: '10:30 AM' },
      { id: 15, name: 'Stop 15 : IMLI PHATAK ', expectedArrival: '10:00 AM' },
      { id: 16, name: 'Stop 16 : TONK PHATAK GUTTA', expectedArrival: '10:15 AM' },
      { id: 17, name: 'Stop 17 : KAMAL & COMPANY', expectedArrival: '10:30 AM' },
      { id: 18, name: 'Stop 18 : GOPAL PURA PULIA', expectedArrival: '10:00 AM' },
      { id: 19, name: 'Stop 19 : JAIPUR HOSPITAL', expectedArrival: '10:15 AM' },
      { id: 20, name: 'Stop 20 : TIDEA OFFICE DURGA PURA', expectedArrival: '10:30 AM' },
      { id: 21, name: 'Stop 21 : SITA BARI', expectedArrival: '10:15 AM' },
      { id: 22, name: 'Stop 22 : JECRC COLLEGE', expectedArrival: '10:30 AM' },
    ],
  },
];

const BusRoutesList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.routeContainer}>
      <Text style={styles.routeName}>{item.name}</Text>
      <FlatList
        data={item.stops}
        renderItem={({ item: stop }) => (
          <View style={styles.busStopItem}>
            <Image source={require('./images/Bus.png')} style={styles.busAvatar} />
            <View style={styles.busStopInfo}>
              <Text style={styles.busStopName}>{stop.name}</Text>
              <Text>Expected Arrival: {stop.expectedArrival}</Text>
            </View>
          </View>
        )}
        keyExtractor={stop => stop.id.toString()}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dummyBusRoutes}
        renderItem={renderItem}
        keyExtractor={route => route.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // Your styles...
  
    container: {
      flex: 1,
      padding: 16,
    },
    routeContainer: {
      marginBottom: 20,
    },
    routeName: {
      fontSize: 18,
      fontWeight: 'bold',
      backgroundColor: '#4682b4',
      color: 'white',
      padding: 5,
      borderRadius: 5,
    },
    busStopItem: {
      flexDirection: 'row', // Align bus avatar and info side by side
      alignItems: 'center', // Vertically center the content
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      paddingVertical: 8,
      marginLeft: 20,
    },
    busAvatar: {
      width: 40,
      height: 40,
      marginRight: 10,
    },
    busStopInfo: {
      flex: 1, // Expand to fill available space
    },
    busStopName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  
});

export default BusRoutesList;