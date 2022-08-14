import React, { useContext, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CoreContext } from '../../services/context/coreContext';
import { LoadButton } from '../../components/shared/LoadButton';
import { CustomButton } from '../../components/shared/CustomButton';
import { CustomInput } from '../../components/shared/CustomInput';
import { CustomMsg } from '../../components/shared/CustomMsg';
import { CustomTextMsg } from '../../components/shared/CustomTextMsg';

import ChevronLeft from '../../assets/images/icons/chevron-left.svg';
import colors from '../../components/config/colors';
import fonts from '../../components/config/fonts';

export const ChangePasswordScreen = () => {
  const navigation = useNavigation();
  const { errMsg, isPasswordLoading, setNewPasswordForUser } =
    useContext(CoreContext);

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [notMatch, setNotMatch] = useState({
    oldPassErr: '',
    newPassErr: '',
    conPassErr: '',
  });

  const backNavigation = () => {
    navigation.goBack();
  };

  const onChangePassword = () => {
    if (oldPassword === '') {
      setNotMatch({
        oldPassErr: 'Please enter your current password',
      });
      return;
    }
    if (newPassword === '') {
      setNotMatch({
        newPassErr: 'Please enter your new password',
      });
      return;
    }
    if (confirmPassword === '') {
      setNotMatch({
        conPassErr: 'Please enter your confirm password',
      });
      return;
    }
    if (newPassword !== confirmPassword) {
      setNotMatch({
        conPassErr: 'Confirm password does not match with new password',
      });
      return;
    }

    const payload = {
      oldPassword: oldPassword,
      newPassword: newPassword,
      newPasswordConfirmation: confirmPassword,
    };
    setNewPasswordForUser(payload);
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setNotMatch({
      oldPassErr: '',
      newPassErr: '',
      conPassErr: '',
    });
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
              labelText="Current Password"
              value={oldPassword}
              setValue={setOldPassword}
              secureText={true}
              editable={isPasswordLoading ? false : true}
            />
            {notMatch.oldPassErr && (
              <CustomTextMsg
                colorText={colors.red}
                message={notMatch.oldPassErr}
              />
            )}
            <CustomInput
              labelText="New Password"
              value={newPassword}
              setValue={setNewPassword}
              secureText={true}
              editable={isPasswordLoading ? false : true}
            />
            {notMatch.newPassErr && (
              <CustomTextMsg
                colorText={colors.red}
                message={notMatch.newPassErr}
              />
            )}
            <CustomInput
              labelText="Confirm Password"
              value={confirmPassword}
              setValue={setConfirmPassword}
              secureText={true}
              editable={isPasswordLoading ? false : true}
            />
            {notMatch.conPassErr && (
              <CustomTextMsg
                colorText={colors.red}
                message={notMatch.conPassErr}
              />
            )}
            {isPasswordLoading ? (
              <LoadButton />
            ) : (
              <CustomButton
                onPress={() => onChangePassword()}
                bottonText="Change Password"
                bgcolor="#028a0f"
                color="#ffffff"
              />
            )}
          </View>
        </View>
        {errMsg && (
          <CustomMsg
            colorBack={
              errMsg === 'Password Successfully Updated'
                ? colors.greBg
                : colors.redBg
            }
            colorText={
              errMsg === 'Password Successfully Updated'
                ? colors.green
                : colors.red
            }
            message={errMsg}
          />
        )}
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
