import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

interface InitButtonProps {
  onPress: () => void;
}
const InitButton = ({onPress}: InitButtonProps) => {
  return (
    <View style={styles.searchWrapper}>
      <Icon.Button
        onPress={onPress}
        name="search"
        color="#eb636b"
        backgroundColor="#eee"
        style={styles.iconButton}>
        <Text style={styles.initButton}>Search your favorite cocktail</Text>
      </Icon.Button>
    </View>
  );
};

export default InitButton;
