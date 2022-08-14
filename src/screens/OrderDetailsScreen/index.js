import React, { useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  ScrollView,
  Pressable,
  View,
  Text,
  Image,
} from 'react-native';

import { CoreContext } from '../../services/context/coreContext';
import colors from '../../components/config/colors';
import fonts from '../../components/config/fonts';
import ChevronLeft from '../../assets/images/icons/chevron-left.svg';

export const OrderDetailsScreen = ({ route }) => {
  const { userOrderItem, getOrderItem } = useContext(CoreContext);
  const proDetailsData = userOrderItem && userOrderItem.data;
  const navigation = useNavigation();

  const backNavigation = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const payload = {
      id: route.params.id,
    };
    getOrderItem(payload);
  }, [getOrderItem, route.params.id]);

  return (
    <ScrollView style={styles.screenWrapper}>
      <View style={styles.container}>
        <Pressable onPress={() => backNavigation()} style={styles.backbtn}>
          <ChevronLeft width={24} height={24} stroke={colors.gray} />
          <Text style={styles.backText}>Order Summary</Text>
        </Pressable>
        {proDetailsData ? (
          <View>
            <View style={styles.productDetyailsCover}>
              <View style={styles.productProfile}>
                <Image
                  style={styles.productImg}
                  source={{ uri: proDetailsData.product.mainImage.url }}
                />
                <View style={styles.productListDesc}>
                  <Text style={styles.productDetailsName}>
                    {proDetailsData.product.name}
                  </Text>
                  <Text style={styles.productDetailsPriceLabel}>
                    Price: &nbsp;
                    <Text style={styles.productDetailsPrice}>
                      Rs. {proDetailsData.price}/-
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.productAllDesc}>
              <Text style={styles.segmentHeading}>Order &nbsp;Details</Text>
              <View style={styles.prodescItem}>
                <Text style={styles.proLevel}>Order No. :</Text>
                <Text style={styles.proDetls}>
                  {proDetailsData.secondaryId}
                </Text>
              </View>
              <View style={styles.prodescItem}>
                <Text style={styles.proLevel}>Type :</Text>
                <Text
                  style={[
                    styles.proDetls,
                    {
                      color:
                        proDetailsData.product.type === 'SINGLE'
                          ? colors.orange
                          : colors.green,
                      fontFamily: fonts.bold,
                    },
                  ]}>
                  {proDetailsData.product.type === 'SINGLE'
                    ? 'Single'
                    : 'Bundle'}
                </Text>
              </View>
              <View style={styles.prodescItem}>
                <Text style={styles.proLevel}>Size :</Text>
                <Text style={styles.proDetls}>
                  {proDetailsData.product.sizeMl} ml
                </Text>
              </View>
              <View style={styles.prodescItem}>
                <Text style={styles.proLevel}>Quantity :</Text>
                <Text style={styles.proDetls}>
                  {proDetailsData.quantity > 1
                    ? `${proDetailsData.quantity} bottles`
                    : `${proDetailsData.quantity} bottle`}
                </Text>
              </View>
            </View>
            <View style={styles.segmentInformation}>
              <Text style={styles.segmentHeading}>Delivery &nbsp;Details</Text>
              <View style={styles.orderDetails}>
                <View style={styles.orderDescItem}>
                  <Text style={styles.proLevel}>Status :</Text>
                  <Text
                    style={[
                      styles.proDetls,
                      {
                        color:
                          proDetailsData.status === 'ASSIGNED_DELIVERY_AGENT'
                            ? colors.lgray
                            : proDetailsData.status === 'OUT_FOR_DELIVERY'
                            ? colors.orange
                            : colors.green,
                        fontFamily: fonts.bold,
                      },
                    ]}>
                    {proDetailsData.status === 'ASSIGNED_DELIVERY_AGENT'
                      ? 'Assigned'
                      : proDetailsData.status === 'OUT_FOR_DELIVERY'
                      ? 'Out for Delivery'
                      : 'Delivered'}
                  </Text>
                </View>
                <View style={styles.orderDescItem}>
                  <Text style={styles.proLevel}>Date :</Text>
                  <Text style={styles.proDetls}>
                    {proDetailsData.deliveryDate}
                  </Text>
                </View>
                {/* <View style={styles.orderImage}>
                  <Image
                    style={styles.deliveredImage}
                    source={require('../../assets/images/delivered.jpeg')}
                  />
                </View> */}
              </View>
            </View>
            <View style={styles.segmentInformation}>
              <Text style={styles.segmentHeading}>Customer &nbsp;Details</Text>
              <View style={styles.orderDetails}>
                <View style={styles.orderDescItem}>
                  <Text style={styles.proLevel}>Name :</Text>
                  <Text style={styles.proDetls}>
                    {proDetailsData.user.name}
                  </Text>
                </View>
                <View style={styles.orderDescItem}>
                  <Text style={styles.proLevel}>Phone :</Text>
                  <Text style={styles.proDetls}>
                    {proDetailsData.user.phone}
                  </Text>
                </View>
                <View style={styles.orderDescItem}>
                  <Text style={styles.proLevel}>Address :</Text>
                  <Text style={styles.proDetls}>
                    {proDetailsData.address.flatNo},{' '}
                    {proDetailsData.address.deliveryLocation},{' '}
                    {proDetailsData.address.locality}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.imgEmpty}>
            <Image
              style={styles.emptyImages}
              source={require('../../assets/images/empty-cart.png')}
            />
            <Text style={styles.ctempty}>Container empty</Text>
          </View>
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
    fontSize: 13,
    color: colors.gray,
    marginLeft: 10,
    fontFamily: fonts.bold,
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
    fontFamily: fonts.bold,
    marginTop: 12,
  },
  productDetailsPriceLabel: {
    fontSize: 15,
    marginTop: 4,
    color: colors.gray,
    fontFamily: fonts.regular,
  },
  productDetailsPrice: {
    color: colors.green,
    fontFamily: fonts.bold,
  },
  productAllDesc: {
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
  prodescItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 2,
  },
  orderImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  deliveredImage: {
    width: 180,
    height: 180,
  },
  proLevel: {
    width: 80,
    fontSize: 13,
    marginRight: 10,
    color: colors.gray,
    fontFamily: fonts.regular,
  },
  proDetls: {
    fontSize: 14,
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
    fontSize: 12,
    marginBottom: 10,
    color: colors.green,
    textTransform: 'uppercase',
    fontFamily: fonts.bold,
    width: '100%',
  },
  orderDetails: {
    display: 'flex',
    flexDirection: 'column',
  },
  orderDescItem: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 2,
  },
  imgEmpty: {
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyImages: {
    width: 70,
    height: 70,
    opacity: 0.2,
  },
  ctempty: {
    fontSize: 13,
    color: colors.black,
    fontFamily: fonts.regular,
    opacity: 0.2,
  },
});
