import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';

import Logo from '../../components/Logo/Logo';
import InitButton from '../../components/InitButton/InitButton';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../helpers/navigation';
import styles from './styles';

type HomeScreenNavigationProp = StackNavigationProp<StackParamList>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home: React.FC<Props> = ({navigation}) => {
  const goToSearch = () => {
    navigation.navigate('Search');
  };
  return (
    <SafeAreaView style={styles.safeAerea}>
      <StatusBar backgroundColor="#eb636b" barStyle="light-content" />
      <View style={styles.mainView}>
        <Logo />
        <InitButton onPress={goToSearch} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
