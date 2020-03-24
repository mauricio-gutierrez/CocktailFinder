/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

const Logo = () => {
  return (
    <View style={styles.iconWrapper}>
      <Icon name="cocktail" size={30} color="#ffffff" />
      <View style={styles.titleArea}>
        <Text style={styles.titleStrong}>Cocktail</Text>
        <Text style={styles.titleNormal}>Finder</Text>
      </View>
    </View>
  );
};

export default Logo;
