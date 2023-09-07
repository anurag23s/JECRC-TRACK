// import React from 'react';
// import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
// import tw from 'tailwind-react-native-classnames';

// const AboutUsScreen = () => {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.pageHeading}>Welcome to JECRCTrack</Text>
//       <View style={styles.imageContainer}>
//         <Image
//           source={require('./images/JECRC.png')}
//           style={styles.image}
//           resizeMode="cover"
//         />
//       </View>

//       <View>
//       <View style={tw `border-t border-black mt-09`}></View>
//       <View style={styles.textContainer}>
//         <Text style={styles.heading}>Revolutionizing College Transportation</Text>
//         <Text style={styles.description}>
//           Welcome to the future of college transportation! Our College Bus Management System with Real-Time Bus Tracking and Route Information Portal is your ticket to a smarter, safer, and more efficient campus commute.
//           </Text>
//           <Text style={styles.description}>
//           </Text>
//           <Text style={styles.description}>
//           Say goodbye to waiting in uncertainty and hello to real-time tracking that puts you in control of your journey. With cutting-edge technologies and a user-centric approach, we're here to revolutionize how you experience college transportation. Join us on this journey towards a seamless and connected campus community. Your ride, your way, every day.
//           </Text>
//           <Text style={styles.description}>
//           </Text>
//           <Text style={styles.description}>
//           Welcome to the Bus Tracker App!
//           </Text>
//           <Text style={styles.description}>
//           </Text>
//           <Text style={styles.description}>
//           At Bus Tracker, our mission is to simplify your daily commute and enhance your travel experience by providing real-time tracking and information about buses in your city. Whether you're a student, a working professional, or a parent, our app is designed to make your journey smoother and more convenient.
//           </Text>
//           <Text style={styles.description}>
//           </Text>
//           <Text style={styles.description}>
//           Key Features:
//           </Text>
//           <Text style={styles.description}>
//           </Text>
//           <Text style={styles.description}>
//           - Real-time Bus Tracking: Get instant updates on the current location and status of buses on your route.
//           </Text>
//           <Text style={styles.description}>
//           - Accurate Arrival Times: Plan your trips with confidence using accurate arrival time estimates.
//           </Text>
//           <Text style={styles.description}>
//           - Notifications: Receive alerts about delays, route changes, and other important updates.
//           </Text>
//           <Text style={styles.description}>
//           - Easy-to-Use Interface: Our user-friendly app ensures that you have all the information you need at your fingertips.
//           </Text>
//           <Text style={styles.description}>
//           </Text>
//           <Text style={styles.description}>
//           Why Choose the Bus Tracker App?
//           </Text>
//           <Text style={styles.description}>
//           </Text>
//           <Text style={styles.description}>
//           - Stay Informed: Never miss a bus again with real-time tracking and alerts.
//           </Text>
//           <Text style={styles.description}>
//           - Efficient Commutes: Make better travel decisions by knowing when your bus will arrive.
//           </Text>
//           <Text style={styles.description}>
//           - Reduced Waiting Times: Spend less time waiting at bus stops and more time on what matters to you.
//           </Text>
//           <Text style={styles.description}>
//           </Text>
//           <Text style={styles.description}>
//           Connect with Us:
//           </Text>
//           <Text style={styles.description}>
//           </Text>
//           <Text style={styles.description}>
//           Visit our website at www.bustrackerapp.com for more information and updates. You can also follow us on social media for the latest news and tips.
//           </Text>
//           <Text style={styles.description}>
//           </Text>
//           <Text style={styles.description}>
//           Join us in revolutionizing the way you travel. Download the JECRC Track App today and enjoy a seamless and stress-free commute!
//           </Text>
//           <Text style={styles.description}>
//           </Text>
//           <Text style={styles.description}>
//           Happy traveling,
//           </Text>
//           <Text style={styles.description}>
//           The JECRC Track Team
//         </Text>
//         </View>
//         <View style={tw `border-t border-black mt-09`}></View>
//       </View>

//       <Text style={styles.sectionHeading}>Meet Our Team</Text>
//       <View style={styles.teamMember}>
//       <View style={tw `border-t border-black mt-09`}></View>
//         <View style={styles.memberInfo}>
//           <View>
//             <Text style={styles.memberName}>   Aarushi Goyal</Text>
            
//             <Text style={styles.memberYear}>     CSE'25</Text>
//           </View>
//           <Image
//             source={require('./images/Aarushi.jpg')} // Replace with actual avatar image
//             style={styles.avatar}
//           />
//         </View>
//         <View style={tw `border-t border-black mt-09`}></View>
//       </View>


//       <View style={styles.teamMember}>
//       <View style={tw `border-t border-black mt-09`}></View>
//         <View style={styles.memberInfo}>
//           <View>
//             <Text style={styles.memberName}>   Aayushi Jain</Text>
            
//             <Text style={styles.memberYear}>     CSE'25</Text>
//           </View>
//           <Image
//             source={require('./images/Aayushi.jpg')} // Replace with actual avatar image
//             style={styles.avatar}
//           />
//         </View>
//         <View style={tw `border-t border-black mt-09`}></View>
//       </View>


//       <View style={styles.teamMember}>
//       <View style={tw `border-t border-black mt-09`}></View>
//         <View style={styles.memberInfo}>
//           <View>
//             <Text style={styles.memberName}>   Ansh Goyal</Text>
            
//             <Text style={styles.memberYear}>     CSE'25</Text>
//           </View>
//           <Image
//             source={require('./images/Ansh.jpg')} // Replace with actual avatar image
//             style={styles.avatar}
//           />
//         </View>
//         <View style={tw `border-t border-black mt-09`}></View>
//       </View>


//       <View style={styles.teamMember}>
//       <View style={tw `border-t border-black mt-09`}></View>
//         <View style={styles.memberInfo}>
//           <View>
//             <Text style={styles.memberName}>   Anurag Sinha</Text>
            
//             <Text style={styles.memberYear}>     CSE'25</Text>
//           </View>
//           <Image
//             source={require('./images/Anurag.jpg')} // Replace with actual avatar image
//             style={styles.avatar}
//           />
//         </View>
//         <View style={tw `border-t border-black mt-09`}></View>
//       </View>
//       {/* Add more team members as needed */}


//       <Text style={styles.sectionHeading}>Under the guidance of</Text>
      


//       <View style={styles.teamMember}>
//       <View style={tw `border-t border-black mt-09`}></View>
//         <View style={styles.memberInfo}>
//           <View>
//             <Text style={styles.memberName}>   Dr. Arpit Agrawal</Text>
            
//             <Text style={styles.memberYear}>     Director</Text>
//           </View>
//           <Image
//             source={require('./images/Director.jpg')} // Replace with actual avatar image
//             style={styles.avatar}
//           />
//         </View>
//         <View style={tw `border-t border-black mt-09`}></View>
//       </View>


//       <View style={styles.teamMember}>
//       <View style={tw `border-t border-black mt-09`}></View>
//         <View style={styles.memberInfo}>
        
//           <View>
//             <Text style={styles.memberName}>   Dr. Vinay Kumar Chandna</Text>
            
//             <Text style={styles.memberYear}>     Principal</Text>
//           </View>
//           <Image
//             source={require('./images/Principal.png')} // Replace with actual avatar image
//             style={styles.avatar}
//           />
//         </View>
//         <View style={tw `border-t border-black mt-09`}></View>
//       </View>

//       <View style={styles.teamMember}>
//       <View style={tw `border-t border-black mt-09`}></View>
//         <View style={styles.memberInfo}>
//           <View>
//             <Text style={styles.memberName}>   Dr. Sanjay Gour</Text>
            
//             <Text style={styles.memberYear}>     HOD CSE</Text>
//           </View>
//           <Image
//             source={require('./images/hod.jpg')} // Replace with actual avatar image
//             style={styles.avatar}
//           />
//         </View>
//         <View style={tw `border-t border-black mt-09`}></View>
//       </View>


//       <View style={styles.teamMember}>
//       <View style={tw `border-t border-black mt-09`}></View>
//         <View style={styles.memberInfo}>
//           <View>
//             <Text style={styles.memberName}>   Dr. Vijeta Kumawat</Text>
            
//             <Text style={styles.memberYear}>     Deputy HOD CSE</Text>
//           </View>
//           <Image
//             source={require('./images/Deputy_hod.jpg')} // Replace with actual avatar image
//             style={styles.avatar}
//           />
//         </View>
//         <View style={tw `border-t border-black mt-09`}></View>
//         </View>


//       <View style={styles.teamMember}>
//       <View style={tw `border-t border-black mt-09`}></View>
//         <View style={styles.memberInfo}>
//           <View>
//             <Text style={styles.memberName}>   Ms. Madhu Choudhary</Text>
            
//             <Text style={styles.memberYear}>     Class Coordinator</Text>
//           </View>
//           <Image
//             source={require('./images/CC.jpg')} // Replace with actual avatar image
//             style={styles.avatar}
//           />
//         </View>
//         <View style={tw `border-t border-black mt-09`}></View>
//       </View>

      
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     //padding: 10,
//   },
//   pageHeading: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     marginTop: 20,
//     alignSelf: 'center',
//   },
//   imageContainer: {
//     flex: 1,
//     marginTop: 10,
//     marginVertical: 5,
    
//   },
//   image: {
//     flex: 1,
//   },
//   textContainer: {
//     backgroundColor: 'lightsteelblue',
//     padding: 18,
//   },
//   heading: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: 'black',
//     marginBottom: 10,
//   },
//   description: {
//     fontSize: 16,
//     color: 'black',
//     fontWeight: 'bold',
    
//   },
//   sectionHeading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginTop: 20,
//     marginBottom: 20,
//     alignSelf: 'center',
//   },
//   teamMember: {
//     marginBottom: 20,
//     backgroundColor: 'lightsteelblue',
//   },
//   memberInfo: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//     color:'white',
    
//   },
//   memberName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'black'
//     //backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     //color: 'white',
//   },
//   memberRole: {
//     fontSize: 16,
//     //color: 'black',
//     //backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     color: 'white',
//   },
//   memberYear: {
//     fontSize: 16,
//     color: 'black',
//     //backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     //color: 'white',
//   },
//   avatar: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     marginRight:10
//   },
//   memberDescription: {
//     fontSize: 14,
//     color: 'black',
//   },
// });

// export default AboutUsScreen;

















import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import tw from 'tailwind-react-native-classnames';

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

      <View>
      <View style={tw `border-t border-black `}></View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Revolutionizing College Transportation</Text>
        <Text style={styles.description}>
          Welcome to the future of college transportation! Our College Bus Management System with Real-Time Bus Tracking and Route Information Portal is your ticket to a smarter, safer, and more efficient campus commute.
          </Text>
          <Text style={styles.description}>
          </Text>
          <Text style={styles.description}>
          Say goodbye to waiting in uncertainty and hello to real-time tracking that puts you in control of your journey. With cutting-edge technologies and a user-centric approach, we're here to revolutionize how you experience college transportation. Your ride, your way, every day.
          </Text>
          <Text style={styles.description}>
          </Text>
          <Text style={styles.description}>
          Welcome to the JECRC Track!
          </Text>
          <Text style={styles.description}>
          </Text>
          <Text style={styles.description}>
          At Bus Tracker, our mission is to simplify your daily commute and enhance your travel experience by providing real-time tracking and information about buses of your college. Our app is designed to make your journey smoother and more convenient.
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
          - Route Information Portal: Provides comprehensive information about bur routes, driver details, pick up and drop off points, timings etc.  
          </Text>
          <Text style={styles.description}>
          - Easy-to-Use Interface: Our user-friendly app ensures that you have all the information you need at your fingertips.
          </Text>
          <Text style={styles.description}>
          </Text>
          <Text style={styles.description}>
          Why Choose JECRC TRACK?
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
          </Text>
          <Text style={styles.description}>
          Happy traveling,
          </Text>
          <Text style={styles.description}>
          The JECRC Track Team
        </Text>
        </View>
        <View style={tw `border-t border-black `}></View>
      </View>

      <Text style={styles.sectionHeading}>Meet Our Team</Text>
      <View style={styles.teamMember}>
      <View style={tw `border-t border-black`}></View>
        <View style={styles.memberInfo}>
          <View>
            <Text style={styles.memberName}>   Aarushi Goyal</Text>
            
            <Text style={styles.memberYear}>     CSE'25</Text>
          </View>
          <Image
            source={require('./images/Aarushi.jpg')} // Replace with actual avatar image
            style={styles.avatar}
          />
        </View>
        <View style={tw `border-t border-black `}></View>
      </View>


      <View style={styles.teamMember}>
      <View style={tw `border-t border-black `}></View>
        <View style={styles.memberInfo}>
          <View>
            <Text style={styles.memberName}>   Aayushi Jain</Text>
            
            <Text style={styles.memberYear}>     CSE'25</Text>
          </View>
          <Image
            source={require('./images/Aayushi.jpg')} // Replace with actual avatar image
            style={styles.avatar}
          />
        </View>
        <View style={tw `border-t border-black `}></View>
      </View>


      <View style={styles.teamMember}>
      <View style={tw `border-t border-black `}></View>
        <View style={styles.memberInfo}>
          <View>
            <Text style={styles.memberName}>   Ansh Goyal</Text>
            
            <Text style={styles.memberYear}>     CSE'25</Text>
          </View>
          <Image
            source={require('./images/Ansh.jpg')} // Replace with actual avatar image
            style={styles.avatar}
          />
        </View>
        <View style={tw `border-t border-black `}></View>
      </View>


      <View style={styles.teamMember}>
      <View style={tw `border-t border-black `}></View>
        <View style={styles.memberInfo}>
          <View>
            <Text style={styles.memberName}>   Anurag Sinha</Text>
            
            <Text style={styles.memberYear}>     CSE'25</Text>
          </View>
          <Image
            source={require('./images/Anurag.jpg')} // Replace with actual avatar image
            style={styles.avatar}
          />
        </View>
        <View style={tw `border-t border-black `}></View>
      </View>
      {/* Add more team members as needed */}


      <Text style={styles.sectionHeading}>Under the guidance of</Text>
      


      <View style={styles.teamMember}>
      <View style={tw `border-t border-black `}></View>
        <View style={styles.memberInfo}>
          <View>
            <Text style={styles.memberName}>   Dr. Arpit Agrawal</Text>
            
            <Text style={styles.memberYear}>     Director</Text>
          </View>
          <Image
            source={require('./images/Director.jpg')} // Replace with actual avatar image
            style={styles.avatar}
          />
        </View>
        <View style={tw `border-t border-black `}></View>
      </View>


      <View style={styles.teamMember}>
      <View style={tw `border-t border-black `}></View>
        <View style={styles.memberInfo}>
        
          <View>
            <Text style={styles.memberName}>   Dr. Vinay Kumar Chandna</Text>
            
            <Text style={styles.memberYear}>     Principal</Text>
          </View>
          <Image
            source={require('./images/Principal.png')} // Replace with actual avatar image
            style={styles.avatar}
          />
        </View>
        <View style={tw `border-t border-black `}></View>
      </View>

      <View style={styles.teamMember}>
      <View style={tw `border-t border-black `}></View>
        <View style={styles.memberInfo}>
          <View>
            <Text style={styles.memberName}>   Dr. Sanjay Gour</Text>
            
            <Text style={styles.memberYear}>     HOD CSE</Text>
          </View>
          <Image
            source={require('./images/hod.jpg')} // Replace with actual avatar image
            style={styles.avatar}
          />
        </View>
        <View style={tw `border-t border-black `}></View>
      </View>


      <View style={styles.teamMember}>
      <View style={tw `border-t border-black `}></View>
        <View style={styles.memberInfo}>
          <View>
            <Text style={styles.memberName}>   Dr. Vijeta Kumawat</Text>
            
            <Text style={styles.memberYear}>     Deputy HOD CSE</Text>
          </View>
          <Image
            source={require('./images/Deputy_hod.jpg')} // Replace with actual avatar image
            style={styles.avatar}
          />
        </View>
        <View style={tw `border-t border-black `}></View>
        </View>


      <View style={styles.teamMember}>
      <View style={tw `border-t border-black `}></View>
        <View style={styles.memberInfo}>
          <View>
            <Text style={styles.memberName}>   Ms. Madhu Choudhary</Text>
            
            <Text style={styles.memberYear}>     Class Coordinator</Text>
          </View>
          <Image
            source={require('./images/CC.jpg')} // Replace with actual avatar image
            style={styles.avatar}
          />
        </View>
        <View style={tw `border-t border-black `}></View>
      </View>

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    //padding: 10,
  },
  pageHeading: {
    fontSize: 26,
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
    backgroundColor: 'lightsteelblue',
    padding: 18,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    
  },
  sectionHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
  },
  teamMember: {
    marginBottom: 20,
    backgroundColor: 'lightsteelblue',
  },
  memberInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    color:'white',
    
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
    //color: 'black',
    //backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
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
    marginRight:10
  },
  memberDescription: {
    fontSize: 14,
    color: 'black',
  },
});

export default AboutUsScreen;