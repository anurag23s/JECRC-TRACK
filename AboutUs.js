import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const AboutUsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.pageHeading}>Welcome to JECRCTrack</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('./images/JECRC.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Revolutionizing College Transportation</Text>
        <Text style={styles.description}>
          Welcome to the future of college transportation! Our College Bus Management System with Real-Time Bus Tracking and Route Information Portal is your ticket to a smarter, safer, and more efficient campus commute.
          </Text>
          <Text style={styles.description}>
          </Text>
          <Text style={styles.description}>
          Say goodbye to waiting in uncertainty and hello to real-time tracking that puts you in control of your journey. With cutting-edge technologies and a user-centric approach, we're here to revolutionize how you experience college transportation. Join us on this journey towards a seamless and connected campus community. Your ride, your way, every day.
          </Text>
          <Text style={styles.description}>
          </Text>
          <Text style={styles.description}>
          Welcome to the Bus Tracker App!
          </Text>
          <Text style={styles.description}>
          </Text>
          <Text style={styles.description}>
          At Bus Tracker, our mission is to simplify your daily commute and enhance your travel experience by providing real-time tracking and information about buses in your city. Whether you're a student, a working professional, or a parent, our app is designed to make your journey smoother and more convenient.
          </Text>
          <Text style={styles.description}>
          </Text>
          <Text style={styles.description}>
          Key Features:
          </Text>
          <Text style={styles.description}>
          </Text>
          <Text style={styles.description}>
          - Real-time Bus Tracking: Get instant updates on the current location and status of buses on your route.
          </Text>
          <Text style={styles.description}>
          - Accurate Arrival Times: Plan your trips with confidence using accurate arrival time estimates.
          </Text>
          <Text style={styles.description}>
          - Notifications: Receive alerts about delays, route changes, and other important updates.
          </Text>
          <Text style={styles.description}>
          - Easy-to-Use Interface: Our user-friendly app ensures that you have all the information you need at your fingertips.
          </Text>
          <Text style={styles.description}>
          </Text>
          <Text style={styles.description}>
          Why Choose the Bus Tracker App?
          </Text>
          <Text style={styles.description}>
          </Text>
          <Text style={styles.description}>
          - Stay Informed: Never miss a bus again with real-time tracking and alerts.
          </Text>
          <Text style={styles.description}>
          - Efficient Commutes: Make better travel decisions by knowing when your bus will arrive.
          </Text>
          <Text style={styles.description}>
          - Reduced Waiting Times: Spend less time waiting at bus stops and more time on what matters to you.
          </Text>
          <Text style={styles.description}>
          </Text>
          <Text style={styles.description}>
          Connect with Us:
          </Text>
          <Text style={styles.description}>
          </Text>
          <Text style={styles.description}>
          Visit our website at www.bustrackerapp.com for more information and updates. You can also follow us on social media for the latest news and tips.
          </Text>
          <Text style={styles.description}>
          </Text>
          <Text style={styles.description}>
          Join us in revolutionizing the way you travel. Download the JECRC Track App today and enjoy a seamless and stress-free commute!
          </Text>
          <Text style={styles.description}>
          </Text>
          <Text style={styles.description}>
          Happy traveling,
          </Text>
          <Text style={styles.description}>
          The JECRC Track Team
        </Text>
      </View>

      <Text style={styles.sectionHeading}>Meet Our Team</Text>
      <View style={styles.teamMember}>
        <View style={styles.memberInfo}>
          <View>
            <Text style={styles.memberName}>John Doe</Text>
            <Text style={styles.memberRole}>CEO</Text>
            <Text style={styles.memberYear}>CSE'25</Text>
          </View>
          <Image
            source={require('./images/AvatarStudent.png')} // Replace with actual avatar image
            style={styles.avatar}
          />
        </View>
        <Text style={styles.memberDescription}>
          John is a visionary leader who founded our company with the goal of
          transforming the college transportation experience. He brings a wealth of
          experience in both technology and management.
        </Text>
      </View>
      <View style={styles.teamMember}>
        <View style={styles.memberInfo}>
          <View>
            <Text style={styles.memberName}>Jane Smithe</Text>
            <Text style={styles.memberRole}>Lead Developer</Text>
            <Text style={styles.memberYear}>CSE'25</Text>
          </View>
          <Image
            source={require('./images/AvatarStudent.png')} // Replace with actual avatar image
            style={styles.avatar}
          />
        </View>
        <Text style={styles.memberDescription}>
            Jane is a talented developer with a passion for crafting exceptional user
            experiences. She leads our development team and is dedicated to pushing
            the boundaries of what our technology can achieve.
        </Text>
      </View>
      <View style={styles.teamMember}>
        <View style={styles.memberInfo}>
          <View>
            <Text style={styles.memberName}>Jack Doe</Text>
            <Text style={styles.memberRole}>Lead Developer</Text>
            <Text style={styles.memberYear}>CSE'25</Text>
          </View>
          <Image
            source={require('./images/AvatarStudent.png')} // Replace with actual avatar image
            style={styles.avatar}
          />
        </View>
        <Text style={styles.memberDescription}>
          John is a visionary leader who founded our company with the goal of
          transforming the college transportation experience. He brings a wealth of
          experience in both technology and management.
        </Text>
      </View>
      <View style={styles.teamMember}>
        <View style={styles.memberInfo}>
          <View>
            <Text style={styles.memberName}>Michael Johnson</Text>
            <Text style={styles.memberRole}>Design Lead</Text>
            <Text style={styles.memberYear}>CSE'25</Text>
          </View>
          <Image
            source={require('./images/AvatarStudent.png')} // Replace with actual avatar image
            style={styles.avatar}
          />
        </View>
        <Text style={styles.memberDescription}>
            Michael is the creative force behind our app's sleek and user-friendly
            design. He combines his artistic skills with a deep understanding of user
            behavior to create stunning visuals.
        </Text>
      </View>
      {/* Add more team members as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  pageHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    alignSelf: 'center',
  },
  imageContainer: {
    flex: 1,
    marginTop: 10,
    marginVertical: 5,
  },
  image: {
    flex: 1,
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: 'white',
  },
  sectionHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'center',
  },
  teamMember: {
    marginBottom: 20,
  },
  memberInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  memberName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
    //backgroundColor: 'rgba(0, 0, 0, 0.6)',
    //color: 'white',
  },
  memberRole: {
    fontSize: 16,
    color: 'black',
    //backgroundColor: 'rgba(0, 0, 0, 0.6)',
    //color: 'white',
  },
  memberYear: {
    fontSize: 16,
    color: 'black',
    //backgroundColor: 'rgba(0, 0, 0, 0.6)',
    //color: 'white',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  memberDescription: {
    fontSize: 14,
    color: 'black',
  },
});

export default AboutUsScreen;