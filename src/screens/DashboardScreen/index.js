import React, { useContext } from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CoreContext } from '../../services/context/coreContext';
import colors from '../../components/config/colors';
import fonts from '../../components/config/fonts';

export const DashboardScreen = () => {
  const navigation = useNavigation();
  const { authLogout, userProfile } = useContext(CoreContext);

  const checkIndexIsEven = n => {
    return n % 2 === 0;
  };

  const moreItem = () => {
    navigation.navigate('Order');
  };

  const detailsItem = id => {
    navigation.navigate('OrderDetails', { id: id });
  };

  return (
    <ScrollView style={styles.screenWrapper}>
      <View style={styles.container}>
        <View style={styles.profileCover}>
          <View style={styles.mainProfileName}>
            <Text style={styles.mainProftext}>Hello</Text>
            <Text style={styles.mainProfName}>
              {userProfile && userProfile.data.name.split(' ')[0]}
            </Text>
          </View>
          <Pressable onPress={authLogout} style={styles.logoutBtn}>
            <Text style={styles.logtext}>Logout</Text>
          </Pressable>
        </View>
        <View style={styles.latestAssignItem}>
          <Text style={styles.latestAssignHeading}>Latest Assigned</Text>
          <View style={styles.latestItemCover}>
            {[1, 2, 3].map(item => (
              <Pressable
                onPress={() => detailsItem(item)}
                style={styles.latestItem}
                key={item}>
                <Image
                  style={styles.productImg}
                  source={require('../../assets/images/icon.png')}
                />
                <View style={styles.productListDesc}>
                  <Text style={styles.proMainName}>
                    ({item}) - Product Name
                  </Text>
                  <Text style={styles.subtext}>Sub text content</Text>
                  <Text style={styles.weighttext}>350 g pack</Text>
                </View>
              </Pressable>
            ))}
            <Pressable onPress={moreItem} style={styles.moreBtn}>
              <Text style={styles.moretext}>more view</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.latestAssignItem}>
          <Text style={styles.latestAssignHeading}>Yesterday Delivered</Text>
          <View style={styles.deliveredItemCover}>
            {[11, 12, 13, 14, 15, 16].map(item => (
              <Pressable
                onPress={() => detailsItem(item)}
                style={[
                  styles.deliveredItem,
                  { marginRight: checkIndexIsEven(item) ? 0 : '4%' },
                ]}
                key={item}>
                <Image
                  style={styles.deliveryImg}
                  source={require('../../assets/images/icon.png')}
                />
                <View style={styles.deliveryListDesc}>
                  <Text style={styles.delvMainName}>
                    ({item}) - Product Name
                  </Text>
                  <Text style={styles.weightdel}>350 g pack</Text>
                  <Text style={styles.deltext}>Sub text content</Text>
                </View>
              </Pressable>
            ))}
            <Pressable
              onPress={moreItem}
              style={[styles.moreBtn, { marginBottom: 30 }]}>
              <Text style={styles.moretext}>more view</Text>
            </Pressable>
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
  profileCover: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainProfileName: {
    display: 'flex',
    flexDirection: 'row',
  },
  logoutBtn: {
    fontFamily: fonts.regular,
  },
  logtext: {
    fontFamily: fonts.regular,
    color: colors.black,
  },
  mainProftext: {
    marginRight: 6,
    fontSize: 20,
    color: colors.gray,
    fontFamily: fonts.regular,
  },
  mainProfName: {
    fontSize: 20,
    color: colors.green,
    fontFamily: fonts.bold,
  },
  latestAssignItem: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 30,
  },
  latestAssignHeading: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: colors.green,
    fontFamily: fonts.bold,
    marginBottom: 10,
  },
  latestItemCover: {
    display: 'flex',
  },
  latestItem: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: colors.white,
    shadowOffset: { width: 1, height: 2 },
    shadowColor: colors.shadow,
    shadowOpacity: 0.06,
    shadowRadius: 2,
  },
  productImg: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 16,
    backgroundColor: colors.gray,
  },
  productListDesc: {
    display: 'flex',
    flexDirection: 'column',
  },
  proMainName: {
    fontSize: 16,
    color: colors.black,
    fontFamily: fonts.regular,
    marginTop: 1,
  },
  subtext: {
    fontSize: 13,
    color: colors.gray,
    fontFamily: fonts.regular,
    marginBottom: 10,
  },
  weighttext: {
    fontSize: 13,
    color: colors.green,
    fontFamily: fonts.regular,
  },
  moreBtn: {
    display: 'flex',
    width: '100%',
    fontFamily: fonts.regular,
    marginTop: 6,
  },
  moretext: {
    textTransform: 'uppercase',
    fontFamily: fonts.bold,
    color: colors.gray,
    textAlign: 'center',
    fontSize: 12,
  },
  deliveredItemCover: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  deliveredItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '48%',
    marginBottom: 14,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: colors.white,
    shadowOffset: { width: 1, height: 2 },
    shadowColor: colors.shadow,
    shadowOpacity: 0.06,
    shadowRadius: 2,
  },
  deliveryImg: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginBottom: 6,
    backgroundColor: colors.gray,
  },
  deliveryListDesc: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  delvMainName: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.regular,
    textAlign: 'center',
  },
  deltext: {
    fontSize: 13,
    color: colors.gray,
    fontFamily: fonts.regular,
    textAlign: 'center',
  },
  weightdel: {
    fontSize: 13,
    color: colors.green,
    fontFamily: fonts.regular,
    textAlign: 'center',
    marginBottom: 10,
  },
});
