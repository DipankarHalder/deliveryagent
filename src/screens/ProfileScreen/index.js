import React, { useContext } from 'react';
import {
  StyleSheet,
  ScrollView,
  Pressable,
  View,
  Text,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CoreContext } from '../../services/context/coreContext';
import { CustomImage } from '../../components/shared/CustomImage';
import { CustomButton } from '../../components/shared/CustomButton';

import colors from '../../components/config/colors';
import fonts from '../../components/config/fonts';

import Truck from '../../assets/images/icons/truck.svg';
import Star from '../../assets/images/icons/star.svg';

export const ProfileScreen = () => {
  const navigation = useNavigation();
  const { userProfile } = useContext(CoreContext);
  const dataUser = userProfile && userProfile.data;

  const onGetStart = () => {
    console.warn('Profile refer');
  };

  const onUpdateProfile = () => {
    navigation.navigate('UpdateProfile');
  };

  const onChangePassword = () => {
    navigation.navigate('ChangePassword');
  };

  return (
    <ScrollView style={styles.screenWrapper}>
      <View style={styles.avatarBackground}>
        <Image
          style={styles.bgAvatar}
          source={require('../../assets/images/bg.jpg')}
          blurRadius={8}
        />
        <View style={styles.avatar}>
          {dataUser && dataUser.image !== null ? (
            <Image
              style={styles.avtr}
              source={require('../../assets/images/avatar.jpg')}
            />
          ) : (
            <CustomImage
              nameText={dataUser && dataUser.name}
              size={140}
              radius={140}
              bgColor={colors.yellow}
            />
          )}
        </View>
      </View>
      <View style={styles.mainProfile}>
        <Text style={styles.mainTitle}>{dataUser && dataUser.name}</Text>
        <View style={styles.mainInfoDiv}>
          <View style={styles.rowInfo}>
            <Text style={styles.rowlabel}>ID :</Text>
            <Text style={styles.rowField}>JCF36543264</Text>
          </View>
          <View style={styles.rowInfo}>
            <Text style={styles.rowlabel}>Phone :</Text>
            <Text style={styles.rowField}>{dataUser && dataUser.phone}</Text>
          </View>
          <View style={styles.rowInfoLast}>
            <Text style={styles.rowlabel}>Email :</Text>
            <Text style={styles.rowField}>{dataUser && dataUser.email}</Text>
          </View>
        </View>
        <View style={styles.buttonType}>
          <Pressable
            onPress={onUpdateProfile}
            style={styles.buttonProfileUpdate}>
            <Text style={styles.buttonUpdateText}>Update Profile</Text>
          </Pressable>
          <Pressable
            onPress={onChangePassword}
            style={[styles.buttonProfileUpdate, { marginRight: 0 }]}>
            <Text style={styles.buttonUpdateText}>Change Password</Text>
          </Pressable>
        </View>
        <View style={styles.referDivItem}>
          <Text style={styles.referText}>
            Refered People: <Text style={styles.referItem}>124</Text>
          </Text>
          <CustomButton
            onPress={onGetStart}
            bottonText="Refer a Customer"
            bgcolor={colors.green}
            color={colors.white}
          />
        </View>
        <View style={styles.specialsection}>
          <View style={styles.splsec}>
            <Truck
              width={24}
              height={24}
              style={styles.icColor}
              stroke={colors.green}
            />
            <Text style={styles.icLabel}>Agerage Delivery</Text>
          </View>
          <View style={styles.splsec}>
            <Star
              width={24}
              height={24}
              style={styles.icColor}
              stroke={colors.green}
            />
            <Text style={styles.icLabel}>Get Stars</Text>
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
  avatarBackground: {
    marginHorizontal: 25,
    marginBottom: 84,
  },
  bgAvatar: {
    width: '100%',
    height: 140,
    borderRadius: 7,
  },
  avatar: {
    width: 140,
    height: 140,
    position: 'absolute',
    left: '50%',
    bottom: 0,
    marginLeft: -70,
    marginBottom: -64,
    shadowColor: colors.black,
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
  avtr: {
    width: 140,
    height: 140,
    borderRadius: 140,
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: colors.white,
  },
  mainProfile: {
    marginHorizontal: 25,
    shadowOffset: { width: 1, height: 2 },
    shadowColor: colors.shadow,
    shadowOpacity: 0.06,
    shadowRadius: 2,
  },
  mainTitle: {
    fontSize: 24,
    color: colors.green,
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: fonts.bold,
  },
  mainInfoDiv: {
    backgroundColor: colors.white,
    paddingHorizontal: 28,
    paddingVertical: 22,
    borderRadius: 4,
    marginBottom: 16,
  },
  rowInfo: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 8,
  },
  rowInfoLast: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 0,
  },
  rowlabel: {
    width: 80,
    fontSize: 15,
    color: colors.gray,
    fontFamily: fonts.regular,
  },
  rowField: {
    fontSize: 16,
    fontFamily: fonts.regular,
  },
  buttonType: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 36,
  },
  buttonProfileUpdate: {
    marginRight: 14,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 4,
    backgroundColor: colors.white,
  },
  buttonUpdateText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts.regular,
  },
  specialsection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  splsec: {
    width: '47%',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 4,
    backgroundColor: colors.white,
    shadowOffset: { width: 1, height: 2 },
    shadowColor: colors.shadow,
    shadowOpacity: 0.06,
    shadowRadius: 2,
    dispaly: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  referDivItem: {
    display: 'flex',
    marginHorizontal: 60,
    marginBottom: 50,
  },
  referText: {
    fontSize: 15,
    textAlign: 'center',
    color: colors.gray,
    fontFamily: fonts.regular,
  },
  referItem: {
    fontSize: 18,
    color: colors.black,
    fontFamily: fonts.bold,
  },
  icColor: {
    marginBottom: 10,
  },
  icLabel: {
    fontSize: 14,
    fontFamily: fonts.regular,
  },
});
