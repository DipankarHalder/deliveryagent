import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ImageBackground, StyleSheet } from 'react-native';

import colors from '../../components/config/colors';
import { CustomButton } from '../../components/shared/CustomButton';

export const WelcomeScreen = () => {
  const navigation = useNavigation();

  const onGetStart = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.pageWrapper}>
      <ImageBackground
        source={require('../../assets/images/splash.jpg')}
        resizeMode="cover"
        style={styles.imageBackground}>
        <View style={styles.buttonCover}>
          <CustomButton
            onPress={onGetStart}
            bottonText="Let's Start"
            uppercase="uppercase"
            bgcolor={colors.green}
            color={colors.white}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonCover: {
    width: '100%',
    bottom: 40,
    position: 'absolute',
    paddingHorizontal: '16%',
  },
});
