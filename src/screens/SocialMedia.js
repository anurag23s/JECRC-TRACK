import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';

const SocialMediaLinks = () => {
  const openFacebook = () => {
    Linking.openURL('https://www.facebook.com/JECRCfoundation');
  };

  const openInstagram = () => {
    Linking.openURL('https://www.instagram.com/jecrcfoundationofficial');
  };

  const openYT = () => {
    Linking.openURL('https://www.youtube.com/channel/UC6YxytDmSyAPqtLhnY5axhg');
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
      <TouchableOpacity onPress={openFacebook}>
        <Image
          source={require('./fb.png')} // Replace with the path to your Facebook icon image
          style={{ width: 40, height: 40, marginRight: 20 }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={openInstagram}>
        <Image
          source={require('./insta.jpeg')} // Replace with the path to your Instagram icon image
          style={{ width: 40, height: 40, marginRight: 20 }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={openYT}>
        <Image
          source={require('./yt.png')} // Replace with the path to your Instagram icon image
          style={{ width: 40, height: 40 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SocialMediaLinks;
