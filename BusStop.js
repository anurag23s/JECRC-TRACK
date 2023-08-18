import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const dummyBusRoutes = [
  // Your bus route data...
  {
    id: 'routeA',
    name: 'Route A',
    stops: [
      { id: 1, name: 'Stop 1', expectedArrival: '10:00 AM' },
      { id: 2, name: 'Stop 2', expectedArrival: '10:15 AM' },
      { id: 3, name: 'Stop 3', expectedArrival: '10:30 AM' },
      { id: 4, name: 'Stop 4', expectedArrival: '10:00 AM' },
      { id: 5, name: 'Stop 5', expectedArrival: '10:15 AM' },
      { id: 6, name: 'Stop 6', expectedArrival: '10:30 AM' },
      { id: 7, name: 'Stop 7', expectedArrival: '10:00 AM' },
      { id: 8, name: 'Stop 8', expectedArrival: '10:15 AM' },
      { id: 9, name: 'Stop 9', expectedArrival: '10:30 AM' },
      { id: 10, name: 'Stop 10', expectedArrival: '10:00 AM' },
      { id: 11, name: 'Stop 11', expectedArrival: '10:15 AM' },
      { id: 12, name: 'Stop 12', expectedArrival: '10:30 AM' },
    ],
  },
  {
    id: 'routeB',
    name: 'Route B',
    stops: [
      { id: 1, name: 'Stop 1', expectedArrival: '11:00 AM' },
      { id: 2, name: 'Stop 2', expectedArrival: '11:15 AM' },
      { id: 3, name: 'Stop 3', expectedArrival: '11:30 AM' },
      { id: 4, name: 'Stop 4', expectedArrival: '10:00 AM' },
      { id: 5, name: 'Stop 5', expectedArrival: '10:15 AM' },
      { id: 6, name: 'Stop 6', expectedArrival: '10:30 AM' },
      { id: 7, name: 'Stop 7', expectedArrival: '10:00 AM' },
      { id: 8, name: 'Stop 8', expectedArrival: '10:15 AM' },
      { id: 9, name: 'Stop 9', expectedArrival: '10:30 AM' },
      { id: 10, name: 'Stop 10', expectedArrival: '10:00 AM' },
      { id: 11, name: 'Stop 11', expectedArrival: '10:15 AM' },
      { id: 12, name: 'Stop 12', expectedArrival: '10:30 AM' },
    ],
  },
  {
    id: 'routeC',
    name: 'Route C',
    stops: [
      { id: 1, name: 'Stop 1', expectedArrival: '10:00 AM' },
      { id: 2, name: 'Stop 2', expectedArrival: '10:15 AM' },
      { id: 3, name: 'Stop 3', expectedArrival: '10:30 AM' },
      { id: 4, name: 'Stop 4', expectedArrival: '10:00 AM' },
      { id: 5, name: 'Stop 5', expectedArrival: '10:15 AM' },
      { id: 6, name: 'Stop 6', expectedArrival: '10:30 AM' },
      { id: 7, name: 'Stop 7', expectedArrival: '10:00 AM' },
      { id: 8, name: 'Stop 8', expectedArrival: '10:15 AM' },
      { id: 9, name: 'Stop 9', expectedArrival: '10:30 AM' },
      { id: 10, name: 'Stop 10', expectedArrival: '10:00 AM' },
      { id: 11, name: 'Stop 11', expectedArrival: '10:15 AM' },
      { id: 12, name: 'Stop 12', expectedArrival: '10:30 AM' },
    ],
  },
  {
    id: 'routeD',
    name: 'Route D',
    stops: [
      { id: 1, name: 'Stop 1', expectedArrival: '10:00 AM' },
      { id: 2, name: 'Stop 2', expectedArrival: '10:15 AM' },
      { id: 3, name: 'Stop 3', expectedArrival: '10:30 AM' },
      { id: 4, name: 'Stop 4', expectedArrival: '10:00 AM' },
      { id: 5, name: 'Stop 5', expectedArrival: '10:15 AM' },
      { id: 6, name: 'Stop 6', expectedArrival: '10:30 AM' },
      { id: 7, name: 'Stop 7', expectedArrival: '10:00 AM' },
      { id: 8, name: 'Stop 8', expectedArrival: '10:15 AM' },
      { id: 9, name: 'Stop 9', expectedArrival: '10:30 AM' },
      { id: 10, name: 'Stop 10', expectedArrival: '10:00 AM' },
      { id: 11, name: 'Stop 11', expectedArrival: '10:15 AM' },
      { id: 12, name: 'Stop 12', expectedArrival: '10:30 AM' },
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