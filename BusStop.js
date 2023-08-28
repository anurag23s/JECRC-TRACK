import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const dummyBusRoutes = [
  // Your bus route data...
  {
    id: 'routeA',
    name: 'Route A : NIRWARU-JECRC',
    stops: [
      { id: 1, name: 'Stop 1 : NIRWARU', Pickup: '06:50 AM', Dropoff: '05:35 PM'},
      { id: 2, name: 'Stop 2 : AMBEY HOSPITAL', Pickup: '06:52 AM', Dropoff: '05:30 PM' },
      { id: 3, name: 'Stop 3 : VAIDH Jl', Pickup: '06:55 AM', Dropoff: '05:27 PM' },
      { id: 4, name: 'Stop 4 : NATH JI Kl THADI', Pickup: '06:56 AM', Dropoff: '05:25 PM' },
      { id: 5, name: 'Stop 5 : NIWARU BYE PAS',Pickup: '06:57 AM', Dropoff: '05:20 PM' },
      { id: 6, name: 'Stop 6 : KHIRNI PHATAK', Pickup: '07:10 AM', Dropoff: '04:55 PM' },
      { id: 7, name: 'Stop 7 : HANUMAN NAGAR', Pickup: '07:13 AM', Dropoff: '04:51 PM' },
      { id: 8, name: 'Stop 8 : VAISHALI CIRCLE', Pickup: '07:16 AM', Dropoff: '04:47 PM' },
      { id: 9, name: 'Stop 9 : GUPTA STORE', Pickup: '07:18 AM', Dropoff: '04:45 PM' },
      { id: 10, name: 'Stop 10 : BHARAT APPARTMENT', Pickup: '07:19 AM', Dropoff: '04:44 PM' },
      { id: 11, name: 'Stop 11 : AKSHAR DHAM', Pickup: '07:20 AM', Dropoff: '04:42 PM' },
      { id: 12, name: 'Stop 12 : CHITRAKOOT', Pickup: '07:23 AM', Dropoff: '04:40 PM' },
      { id: 13, name: 'Stop 13 : CHITRAKOOT BANK CIRCLE', Pickup: '07:25 AM', Dropoff: '04:38 PM' },
      { id: 14, name: 'Stop 14 : DABAS PULIA', Pickup: '07:26 AM', Dropoff: '04:37 PM' },
      { id: 15, name: 'Stop 15 : 200 FEET BYEPASS', Pickup: '07:30 AM', Dropoff: '04:36 PM' },
      { id: 16, name: 'Stop 16 : PUNJABI DHABA', Pickup: '07:35 AM', Dropoff: '04:35 PM'},
      { id: 17, name: 'Stop 17 : OM HOTEL', Pickup: '07:36 AM', Dropoff: '04:32 PM' },
      { id: 18, name: 'Stop 18 : METRO STATION', Pickup: '07:37 AM', Dropoff: '04:49 PM' },
      { id: 19, name: 'Stop 19 : JECRC COLLEGE', Pickup: '08:25 AM', Dropoff: '04:00 PM' },
    ],
  },
  {
    id: 'routeB',
    name: 'Route B : MEENA PETROL PUMP-JECRC',
    stops: [
      { id: 1, name: 'Stop 1 : MEENA PETROL PUMP',  Pickup: '07:10 AM', Dropoff: '05:40 PM' },
      { id: 2, name: 'Stop 2 : KHOLE KE HANUMAN JI', Pickup: '07:13 AM', Dropoff: '05:35 PM' },
      { id: 3, name: 'Stop 3 : RAMGRAH MODE', Pickup: '07:20 AM', Dropoff: '05:29 PM' },
      { id: 4, name: 'Stop 4 : DUSSEHRA KOTHI', Pickup: '07:23 AM', Dropoff: '05:25 PM' },
      { id: 5, name: 'Stop 5 : JORAWAR SINGH GATE', Pickup: '07:26 AM', Dropoff: '05:20 PM' },
      { id: 6, name: 'Stop 6 : BADI CHOPA', Pickup: '07:32 AM', Dropoff: '05:07 PM'  },
      { id: 7, name: 'Stop 7 : JOHARI BAZAR', Pickup: '07:35 AM', Dropoff: '05:20 PM' },
      { id: 8, name: 'Stop 8 : NEW GATE', Pickup: '07:38 AM', Dropoff: '04:58 PM' },
      { id: 9, name: 'Stop 9 : AJMERI GATE', Pickup: '07:41 AM', Dropoff: '04:53 PM' },
      { id: 10, name: 'Stop 10 : S M.S HOSPITAL', Pickup: '07:45 AM', Dropoff: '04:50 PM' },
      { id: 11, name: 'Stop 11 : LAL KOTHI', Pickup: '07:50 AM', Dropoff: '04:45 PM' },
      { id: 12, name: 'Stop 12 : GANDHI NAGAR CLUB',  Pickup: '07:55 AM', Dropoff: '04:40 PM'},
      { id: 13, name: 'Stop 13 : AG COLANY', Pickup: '07:58 AM', Dropoff: '04:37 PM' },
      { id: 14, name: 'Stop 14 : BHARADWAJ PETROL PUMP', Pickup: '08:07 AM', Dropoff: '04:27 PM' },
      { id: 15, name: 'Stop 15 : JAWAHAR CIRCLE', Pickup: '08:13 AM', Dropoff: '04:20 PM' },
      { id: 16, name: 'Stop 16 : JECRC COLLEGE', Pickup: '08:25 AM', Dropoff: '04:00 PM' },
    ],
  },
  {
    id: 'routeC',
    name: 'Route C : GANDHI PATH PULIYA',
    stops: [
      { id: 1, name: 'Stop 1 : GANDHI PATH PULIYA', Pickup: '07:05 AM', Dropoff: '05:45 PM' },
      { id: 2, name: 'Stop 2 : CHITRAKOOT CHAURAHA', Pickup: '07:10 AM', Dropoff: '05:40 PM' },
      { id: 3, name: 'Stop 3 : AKSHAR DHAM', Pickup: '07:13 AM', Dropoff: '05:35 PM' },
      { id: 4, name: 'Stop 4 : SBI BANK', Pickup: '07:20 AM', Dropoff: '05:30 PM' },
      { id: 5, name: 'Stop 5 : NIRMAN NAGAR', Pickup: '07:23 AM', Dropoff: '05:28 PM' },
      { id: 6, name: 'Stop 6 : SHYAM NAGAR',  Pickup: '07:26 AM', Dropoff: '05:25 PM' },
      { id: 7, name: 'Stop 7 : SANJEEVANI HOSPITAL', Pickup: '07:20 AM', Dropoff: '05:23 PM' },
      { id: 8, name: 'Stop 8 : VIVEK VIHAR', Pickup: '07:35 AM', Dropoff: '05:20 PM' },
      { id: 9, name: 'Stop 9 : GURJAR KI THADI',Pickup: '07:38 AM', Dropoff: '04:58 PM'},
      { id: 10, name: 'Stop 10 : RIDDHI SIDDHI', Pickup: '07:45 AM', Dropoff: '04:50 PM' },
      { id: 11, name: 'Stop 11 : TRIVENI NAGAR CHAURAHA', Pickup: '07:50 AM', Dropoff: '04:45 PM' },
      { id: 12, name: 'Stop 12 : GOPAL PURA CHOKI', Pickup: '07:55 AM', Dropoff: '04:40 PM' },
      { id: 10, name: 'Stop 13 : MAHAVEER NAGAR',Pickup: '08:07 AM', Dropoff: '04:27 PM'},
      { id: 11, name: 'Stop 14 : DURGAPURA ROAD', Pickup: '08:13 AM', Dropoff: '04:20 PM' },
      { id: 12, name: 'Stop 15 : JECRC COLLEGE', Pickup: '08:25 AM', Dropoff: '04:00 PM' },
    ],
  },
  {
    id: 'routeD',
    name: 'Route D : KHORA BEESAL-JECRC',
    stops: [
      { id: 1, name: 'Stop 1 : KHORA BEESAL', Pickup: '06:45 AM', Dropoff: '05:25 PM' },
      { id: 2, name: 'Stop 2 : SITAWALI PHATAK', Pickup: '06:55 AM', Dropoff: '05:15 PM' },
      { id: 3, name: 'Stop 3 : NADI KA PHATAK',Pickup: '06:58 AM', Dropoff: '05:13 PM' },
      { id: 4, name: 'Stop 4 : DADI KAPHATAK', Pickup: '07:00 AM', Dropoff: '05:10 PM'  },
      { id: 5, name: 'Stop 5 : MURLIPUR THANA', Pickup: '07:08 AM', Dropoff: '05:07 PM' },
      { id: 6, name: 'Stop 6 : GORAS BHANDAR', Pickup: '07:10 AM', Dropoff: '05:05 PM' },
      { id: 7, name: 'Stop 7 : SONI HOSPITAL', Pickup: '07:13 AM', Dropoff: '05:03 PM' },
      { id: 8, name: 'Stop 8 : AGRASEN TOWER', Pickup: '07:15 AM', Dropoff: '05:00 PM' },
      { id: 9, name: 'Stop 9 : BIYANI COLLEGE', Pickup: '07:17 AM', Dropoff: '04:59 PM' },
      { id: 10, name: 'Stop 10 : BANSAL FURNITURE',Pickup: '07:19 AM', Dropoff: '04:58 PM' },
      { id: 11, name: 'Stop 11 : AMBA BARI', Pickup: '07:20 AM', Dropoff: '04:55 PM' },
      { id: 12, name: 'Stop 12 : BANI PARK THANA', Pickup: '07:24 AM', Dropoff: '04:45 PM'},
      { id: 13, name: 'Stop 13 : JANGLESHWER', Pickup: '07:28 AM', Dropoff: '04:39 PM'},
      { id: 14, name: 'Stop 14 : KHASA KOTH', Pickup: '07:30 AM', Dropoff: '04:38 PM' },
      { id: 15, name: 'Stop 15 : IMLI PHATAK ', Pickup: '07:35 AM', Dropoff: '04:28 PM' },
      { id: 16, name: 'Stop 16 : TONK PHATAK GUTTA', Pickup: '07:38 AM', Dropoff: '04:25 PM' },
      { id: 17, name: 'Stop 17 : KAMAL & COMPANY', Pickup: '07:40 AM', Dropoff: '04:22 PM' },
      { id: 18, name: 'Stop 18 : GOPAL PURA PULIA', Pickup: '07:45 AM', Dropoff: '04:20 PM' },
      { id: 19, name: 'Stop 19 : JAIPUR HOSPITAL', Pickup: '07:48 AM', Dropoff: '04:18 PM' },
      { id: 20, name: 'Stop 20 : IDEA OFFICE DURGA PURA', Pickup: '07:50 AM', Dropoff: '04:15 PM' },
      { id: 21, name: 'Stop 21 : SITA BARI', Pickup: '07:55 AM', Dropoff: '04:10 PM' },
      { id: 22, name: 'Stop 22 : JECRC COLLEGE', Pickup: '08:10 AM', Dropoff: '04:00 PM' },
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
              <Text>Expected Pick up: {stop.Pickup}</Text>
              <Text>Expected Drop off: {stop.Dropoff}</Text>
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