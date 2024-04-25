import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

const HeaderRightIcon = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image
      source={require('../assets/DROPLET2.png')} // Update the path to your icon file
      style={{ width: 25, height: 25, marginRight: 10 }}
    />
  </TouchableOpacity>
);

export default HeaderRightIcon;
