import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CustomButton } from '../../components/shared/CustomButton';
import { CustomInput } from '../../components/shared/CustomInput';

import ChevronLeft from '../../assets/images/icons/chevron-left.svg';

import colors from '../../components/config/colors';
import fonts from '../../components/config/fonts';

export const ChangePasswordScreen = () => {
  const navigation = useNavigation();

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const backNavigation = () => {
    navigation.goBack();
  };

  const onChangePassword = () => {
    const payload = {
      oldPassword: oldPassword,
      newPassword: newPassword,
      newPasswordConfirmation: confirmPassword,
    };
    console.log(payload);
  };

  return (
    <ScrollView style={styles.screenWrapper}>
      <View style={styles.container}>
        <Pressable onPress={() => backNavigation()} style={styles.backbtn}>
          <ChevronLeft width={24} height={24} stroke={colors.gray} />
          <Text style={styles.backText}>Order Summery</Text>
        </Pressable>
        <View style={styles.formCover}>
          <View style={styles.formContainer}>
            <CustomInput
              labelText="Old Password"
              value={oldPassword}
              setValue={setOldPassword}
            />
            <CustomInput
              labelText="New Password"
              value={newPassword}
              setValue={setNewPassword}
            />
            <CustomInput
              labelText="Confirm Password"
              value={confirmPassword}
              setValue={setConfirmPassword}
            />
            <CustomButton
              onPress={onChangePassword}
              bottonText="Change Password"
              bgcolor="#028a0f"
              color="#ffffff"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screenWrapper: {
    marginTop: 70,
  },
  container: {
    marginHorizontal: 25,
  },
  backbtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 'auto',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  backText: {
    fontSize: 16,
    color: colors.gray,
    marginLeft: 10,
    fontFamily: fonts.regular,
  },
  formCover: {
    borderRadius: 4,
    backgroundColor: colors.white,
    shadowOffset: { width: 1, height: 2 },
    shadowColor: colors.shadow,
    shadowOpacity: 0.06,
    shadowRadius: 2,
  },
  formContainer: {
    display: 'flex',
    paddingHorizontal: 22,
    paddingVertical: 20,
    marginBottom: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
