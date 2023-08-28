import {Text, TouchableOpacity, View, StyleSheet ,Animated,Dimensions, ScrollView } from 'react-native';
import React  ,{useRef,useState}from 'react';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { ChevronLeftIcon} from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MIco from 'react-native-vector-icons/Foundation';
import MIcon from 'react-native-vector-icons/FontAwesome5';
import MIcons from 'react-native-vector-icons/MaterialIcons';
const { width: screenWidth } = Dimensions.get('window');
import AntDesign from "react-native-vector-icons/Feather";



const Student_route = () => {
  const navigation = useNavigation();
  
  const [menuVisible, setMenuVisible ] = useState(false);
  const menuAnimation = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    const toValue = menuVisible ? 0 : 1;
    Animated.timing(menuAnimation, {
      toValue: 1,
      duration: 100,
      useNativeDriver: false,
    }).start();
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    Animated.timing(menuAnimation, {
      toValue:0,
      duration: 0,
      useNativeDriver: false,
    }).start();
    setMenuVisible(false);
  };
  const translateX = menuAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-screenWidth, 0], 
    
  });


  return (
    
    <View  style={tw` p-1   top-7`} >
         <View style={tw`   top-1 m-2  rounded-full`}backgroundColor="#191970">
        
         <TouchableOpacity  style={tw` top-4  rounded-full  left-4 mr-0.5`} 
               onPress={toggleMenu}   >
          <AntDesign name={"menu"} size={50} color={"white"} />
        </TouchableOpacity>
        
         {menuVisible && ( // Only render the overlay when the menu is open
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent', // Change this to a semi-transparent color if desired
          }}
          onPress={closeMenu} // Close the menu when overlay is pressed
        />
      )}
        

   
       
        <Text style={tw`bottom-4 text-center justify-evenly text-3xl font-bold text-blue-50`} > Select Route </Text>
        {menuVisible && ( // Only render the overlay when the menu is open
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent', // Change this to a semi-transparent color if desired
          }}
          onPress={closeMenu} // Close the menu when overlay is pressed
        />
      )}</View>

    <Animated.View
        style={{
          position: 'absolute',
          left: -10,
          top: 0,
          width: '70%',
          height: "1400%",
          backgroundColor: 'white',
          transform: [{translateX}],
          zIndex: 1,
          
          borderBottomRightRadius: 40,
        }}
      > 

        <Text style={tw`text-4xl font-bold top-4 p-2 text-center`}> Menu </Text>
      
        <View style={tw `border-t  border-2 border-black mt-8 `}></View>

         <TouchableOpacity style={tw` m-3  top-4  rounded-full bg-blue-400  p-2`} onPress={ () => navigation.navigate("BusStop")}>
         <MIcon style={tw` p-3 absolute  `}
          name="route" size={15} color="black" />
           <Text style={tw`  text-left  text-lg  left-4`}>   Bus Route</Text>
         </TouchableOpacity>


         <TouchableOpacity style={tw` m-3 top-2 p-2 rounded-full bg-blue-400   `} onPress={ () => navigation.navigate("DriverList")}>
          <Ionicons style={tw` p-3   absolute `}
          
          name="person-outline" size={22} color="black" />
           <Text style={tw` text-lg text-left  left-4`}>    Driver Details </Text>
         </TouchableOpacity>

         <TouchableOpacity style={tw` m-3   top-1 rounded-full bg-blue-400  p-2`} onPress={ () => navigation.navigate("EmergencyContactsList")}>
          
         
         <Ionicons style={tw` p-3   absolute `}
         name="chatbox-ellipses-outline" size={22} color="black" />

           <Text style={tw` text-lg text-left  left-4`}>    Emergency Contact</Text>
         </TouchableOpacity>



         <TouchableOpacity style={tw` m-3    rounded-full bg-blue-400  p-2`} onPress={ () => navigation.navigate("AboutUsScreen")}>
        
         <Ionicons style={tw` p-3  absolute `}
         name="information-circle-outline" size={25} color="black" />

           <Text style={tw` text-lg text-left  left-4`}>    About us</Text>
         </TouchableOpacity>
         <TouchableOpacity style={tw` m-3    rounded-full bg-blue-400  p-2`} onPress={ () => navigation.navigate("ReportIssue")}>
        
         <MIcons style={tw` p-3  absolute `}
          name="report" size={22}  color="black" />

          <Text style={tw` text-lg text-left  left-4`}>    ReportIssue</Text>
        </TouchableOpacity>

         <TouchableOpacity style={tw` m-3   rounded-full bg-blue-400  p-2`} onPress={ () => navigation.navigate("Tnc")}>
        
        < MIco style={tw` p-3  absolute `}
        name="clipboard-pencil" size={25} color="black" />

          <Text style={tw` text-lg text-left  left-4`}>   Terms and conditions </Text>
        </TouchableOpacity>
        
         </Animated.View>  

    
    <View style={tw`h-1/4 w-full `}>
                             
                             <LottieView source={require('../assets/animation_llbvztm8.json')} autoPlay loop />
                             {menuVisible && ( // Only render the overlay when the menu is open
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent', // Change this to a semi-transparent color if desired
          }}
          onPress={closeMenu} // Close the menu when overlay is pressed
        />
      )}
        </View> 

    <View style={{ marginTop: 35}} >
    <View style={{ flexDirection: 'row' , alignItems: 'center',marginTop: 7 }}>
      <Icon style={tw` p-4  left-4  p-5 absolute  `}
       name="bus" size={30} color="black" />
      <Text style={tw` p-1  font-bold text-blue-50 `}backgroundColor="#191970">1</Text>  
       <Text style={tw`top-9 p-2  font-bold text-blue-50 rounded-full`}backgroundColor="#191970" >NIRWARU - JECRC </Text> 
       {menuVisible && ( // Only render the overlay when the menu is open
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent', // Change this to a semi-transparent color if desired
          }}
          onPress={closeMenu} // Close the menu when overlay is pressed
        />
      )}
    </View>
   
    {/* <View style={{flex: 1, height: 1, backgroundColor: 'black'}} /> */}

      <TouchableOpacity    
                     onPress={() => navigation.navigate('Map1')}

       >
        <View>
        {menuVisible && ( // Only render the overlay when the menu is open
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent', // Change this to a semi-transparent color if desired
          }}
          onPress={closeMenu} // Close the menu when overlay is pressed
        />
      )}
      <Icon  style={tw `bg-gray-100 absolute top-0  right-10`}
       name="location-arrow" size={32} color="black" />
        <Text style={tw `p-2  font-bold text-blue-50  absolute z-30 mr-12 right-4 rounded-full `}backgroundColor="#191970">TRACK</Text>
       </View>
       </TouchableOpacity>
       <View style={tw `border-t border-black mt-10`}></View>

    </View>
    <View>
    {menuVisible && ( // Only render the overlay when the menu is open
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent', // Change this to a semi-transparent color if desired
          }}
          onPress={closeMenu} // Close the menu when overlay is pressed
        />
      )}
    <View style={{ flexDirection: 'row' , alignItems: 'center',marginTop: 35 }}>
      <Icon style={tw` p-4  left-4  p-5 absolute   `}
       name="bus" size={30} color="black" />
      <Text style={tw` p-1  font-bold text-blue-50 `}backgroundColor="#191970">2</Text>  
       <Text style={tw`top-9 p-2  font-bold text-blue-50 rounded-full`}backgroundColor="#191970" >MEENA PETROL PUMP - JECRC</Text>      
    </View>
   

   
    <TouchableOpacity

onPress={() => navigation.navigate('Map2')}
>
      <View>
      {menuVisible && ( // Only render the overlay when the menu is open
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent', // Change this to a semi-transparent color if desired
          }}
          onPress={closeMenu} // Close the menu when overlay is pressed
        />
      )}
      <Icon  style={tw `bg-gray-100  absolute  flex-1  mr-7  right-4`}
       name="location-arrow" size={32} color="black" />
        <Text style={tw `p-2  font-bold text-blue-50 rounded-full  absolute z-30 mr-7 right-4 mr-12 `}backgroundColor="#191970">TRACK</Text>
       </View>
 </TouchableOpacity>
 <View style={tw `border-t border-black mt-10`}></View>
      
    </View>

    <View>
    {menuVisible && ( // Only render the overlay when the menu is open
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent', // Change this to a semi-transparent color if desired
          }}
          onPress={closeMenu} // Close the menu when overlay is pressed
        />
      )}
    <View style={{ flexDirection: 'row' , alignItems: 'center',marginTop: 35 }}>
      <Icon style={tw` p-4  left-4  p-5 absolute   `}
       name="bus" size={30} color="black" />
      <Text style={tw` p-1  font-bold text-blue-50  `}backgroundColor="#191970">3</Text>  
       <Text style={tw`top-9 p-2  font-bold text-blue-50 rounded-full`}backgroundColor="#191970" > GANDHI PATH PULIYA- JECRC </Text>      
    </View>

    <TouchableOpacity 
    onPress={() => navigation.navigate('Map3')}
    >
<Icon  style={tw `bg-gray-100  absolute z-30 mr-7 right-4 `}
 name="location-arrow" size={32} color="black" />
  <Text style={tw `p-2  font-bold text-blue-50 rounded-full  absolute z-30 mr-7 right-4 mr-12 `}backgroundColor="#191970">TRACK</Text>
 
 </TouchableOpacity>
 <View style={tw `border-t border-black mt-10`}></View>
</View>

<View>
{menuVisible && ( // Only render the overlay when the menu is open
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent', // Change this to a semi-transparent color if desired
          }}
          onPress={closeMenu} // Close the menu when overlay is pressed
        />
      )}
<View style={{ flexDirection: 'row' , alignItems: 'center',marginTop: 35 }}>
      <Icon style={tw` p-4  left-4  p-5 absolute   `}
       name="bus" size={30} color="black" />
      <Text style={tw` p-1 font-bold text-blue-50 `}backgroundColor="#191970">4</Text>  
       <Text style={tw`top-9 p-2  font-bold text-blue-50 rounded-full`}backgroundColor="#191970" > KHORA BEESAL- JECRC </Text>      
    </View>

<TouchableOpacity
 onPress={() => navigation.navigate('Map4')}>
<View>

<Icon  style={tw `bg-gray-100  absolute z-50 mr-7 right-4 `}
 name="location-arrow" size={32} color="black" />
 <Text style={tw `p-2  font-bold text-blue-50 rounded-full  absolute z-30 mr-7 right-4 mr-12 `}backgroundColor="#191970">TRACK</Text>
 </View>
 </TouchableOpacity> 
 <View style={tw `border-t border-black mt-10`}></View>
 
 {menuVisible && ( // Only render the overlay when the menu is open
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent', // Change this to a semi-transparent color if desired
          }}
          onPress={closeMenu} // Close the menu when overlay is pressed
        />
      )}
</View>


    </View> 
    
  )
}

export default Student_route;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

});
