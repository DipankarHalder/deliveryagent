import React, { useState, useContext } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import { CoreContext } from '../../services/context/coreContext';
import { LoadButton } from '../../components/shared/LoadButton';
import { CustomButton } from '../../components/shared/CustomButton';
import { CustomInput } from '../../components/shared/CustomInput';
import colors from '../../components/config/colors';

export const LoginScreen = () => {
  const { authLogin, isLoading } = useContext(CoreContext);
  const [username, setUsername] = useState('dipankarhalder@gmail.com');
  const [password, setPassword] = useState('9999999999');

  const onLoginAuth = () => {
    const payload = {
      email: username,
      password: password,
    };
    authLogin(payload);
  };

  return (
    <View style={styles.screenWrapper}>
      <ImageBackground
        source={require('../../assets/images/login.jpg')}
        resizeMode="cover"
        style={styles.imageBackground}>
        <View style={styles.formContainer}>
          <CustomInput
            labelText="Username"
            placeholderText="example@jucify.com"
            value={username}
            setValue={setUsername}
            editable={isLoading ? false : true}
          />
          <CustomInput
            labelText="Password"
            placeholderText="**********"
            value={password}
            setValue={setPassword}
            secureText={true}
            editable={isLoading ? false : true}
          />
          {isLoading ? (
            <LoadButton />
          ) : (
            <CustomButton
              onPress={onLoginAuth}
              bottonText="Login"
              uppercase="uppercase"
              bgcolor={colors.green}
              color={colors.white}
            />
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  formContainer: {
    display: 'flex',
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: 120,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
