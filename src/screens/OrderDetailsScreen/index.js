import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  ScrollView,
  Pressable,
  View,
  Text,
  Image,
} from 'react-native';

import colors from '../../components/config/colors';
import fonts from '../../components/config/fonts';

import ChevronLeft from '../../assets/images/icons/chevron-left.svg';

export const OrderDetailsScreen = ({ route }) => {
  const navigation = useNavigation();

  const backNavigation = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.screenWrapper}>
      <View style={styles.container}>
        <Pressable onPress={() => backNavigation()} style={styles.backbtn}>
          <ChevronLeft width={24} height={24} stroke={colors.gray} />
          <Text style={styles.backText}>Order Summery</Text>
        </Pressable>
        <View style={styles.productDetyailsCover}>
          <View style={styles.productProfile}>
            <Image
              style={styles.productImg}
              source={require('../../assets/images/icon.png')}
            />
            <View style={styles.productListDesc}>
              <Text style={styles.productDetailsName}>
                {route.params.id} - Product Details Name
              </Text>
              <Text style={styles.productDetailsPriceLabel}>
                Price: &nbsp;&nbsp;
                <Text style={styles.productDetailsPrice}>Rs. 125</Text>
              </Text>
            </View>
            <View style={styles.productAllDesc}>
              <View style={styles.prodescItem}>
                <Text style={styles.proLevel}>Name :</Text>
                <Text style={styles.proDetls}>Papaya Juice</Text>
              </View>
              <View style={styles.prodescItem}>
                <Text style={styles.proLevel}>Size :</Text>
                <Text style={styles.proDetls}>500 ml canne</Text>
              </View>
            </View>
          </View>
        </View>
        {/* <View style={styles.segmentInformation}>
          <Text style={styles.segmentHeading}>Ratings</Text>
        </View> */}
        <View style={styles.segmentInformation}>
          <Text style={styles.segmentHeading}>Order &nbsp;Details</Text>
          <View style={styles.orderDetails}>
            <View style={styles.orderDescItem}>
              <Text style={styles.proLevel}>Order No. :</Text>
              <Text style={styles.proDetls}>JUC000874</Text>
            </View>
            <View style={styles.orderDescItem}>
              <Text style={styles.proLevel}>Status :</Text>
              <Text
                style={[
                  styles.proDetls,
                  {
                    color: colors.orange,
                    fontFamily: fonts.bold,
                  },
                ]}>
                On the way
              </Text>
            </View>
            <View style={styles.orderDescItem}>
              <Text style={styles.proLevel}>Date :</Text>
              <Text style={styles.proDetls}>December 12, 2022</Text>
            </View>
            <View style={styles.orderDescItem}>
              <Text style={styles.proLevel}>Payment :</Text>
              <Text style={styles.proDetls}>GooglePay</Text>
            </View>
            <View style={styles.orderImage}>
              <Image
                style={styles.deliveredImage}
                source={require('../../assets/images/delivered.jpeg')}
              />
            </View>
          </View>
        </View>
        <View style={styles.segmentInformation}>
          <Text style={styles.segmentHeading}>Customer &nbsp;Details</Text>
          <View style={styles.orderDetails}>
            <View style={styles.orderDescItem}>
              <Text style={styles.proLevel}>Name :</Text>
              <Text style={styles.proDetls}>Abhishek Paul</Text>
            </View>
            <View style={styles.orderDescItem}>
              <Text style={styles.proLevel}>Phone :</Text>
              <Text style={styles.proDetls}>9803456702</Text>
            </View>
            <View style={styles.orderDescItem}>
              <Text style={styles.proLevel}>Address :</Text>
              <Text style={styles.proDetls}>
                18/2, Manjunath Nilaya, 1st B Main Road, Koramangala 8th Block,
                Karnataka - 560095.
              </Text>
            </View>
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
  productDetyailsCover: {
    display: 'flex',
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: colors.white,
    shadowOffset: { width: 1, height: 2 },
    shadowColor: colors.shadow,
    shadowOpacity: 0.06,
    shadowRadius: 2,
    marginBottom: 10,
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
  productProfile: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
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
  productDetailsName: {
    fontSize: 18,
    color: colors.black,
    fontFamily: fonts.regular,
    marginTop: 12,
  },
  productDetailsPriceLabel: {
    fontSize: 16,
    marginTop: 4,
    color: colors.gray,
    fontFamily: fonts.regular,
  },
  productDetailsPrice: {
    color: colors.green,
    fontFamily: fonts.bold,
  },
  productAllDesc: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 14,
    borderTopWidth: 1,
    paddingTop: 14,
    borderTopColor: colors.lgray,
  },
  prodescItem: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 2,
    marginLeft: 4,
  },
  orderImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  deliveredImage: {
    width: 160,
    height: 160,
  },
  proLevel: {
    width: 80,
    fontSize: 14,
    marginRight: 10,
    color: colors.gray,
    fontFamily: fonts.regular,
  },
  proDetls: {
    fontSize: 15,
    width: '70%',
    fontFamily: fonts.regular,
  },
  segmentInformation: {
    display: 'flex',
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: colors.white,
    shadowOffset: { width: 1, height: 2 },
    shadowColor: colors.shadow,
    shadowOpacity: 0.06,
    shadowRadius: 2,
    marginBottom: 10,
  },
  segmentHeading: {
    fontSize: 13,
    marginBottom: 10,
    color: colors.green,
    textTransform: 'uppercase',
    fontFamily: fonts.bold,
  },
  orderDetails: {
    display: 'flex',
    flexDirection: 'column',
  },
  orderDescItem: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 6,
  },
});
