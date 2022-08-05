import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  LogBox,
  ScrollView,
  Pressable,
  Image,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CoreContext } from '../../services/context/coreContext';
import DatePicker from 'react-native-datepicker';

import colors from '../../components/config/colors';
import fonts from '../../components/config/fonts';

import Calendar from '../../assets/images/icons/calendar.svg';

export const OrderScreen = () => {
  const navigation = useNavigation();
  const { getAllProductList, userProdList } = useContext(CoreContext);
  const [date, setDate] = useState(new Date());

  const detailsItem = id => {
    navigation.navigate('OrderDetails', { id: id });
  };

  useEffect(() => {
    const payload = {
      page: 1,
      perPage: 10,
      deliveryDate: '2022-07-26',
      status: 'ASSIGNED_DELIVERY_AGENT',
    };
    getAllProductList(payload);
  }, [date, getAllProductList]);

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

  return (
    <ScrollView style={styles.screenWrapper}>
      <View style={styles.container}>
        <Text style={styles.mainHeading}>Delivery Product Lists</Text>
        <Text style={styles.subHeading}>
          You have to collect the following products from the booth.
        </Text>
        <View style={styles.datePickerCover}>
          <Text style={styles.datetext}>Search with Date</Text>
          <DatePicker
            date={date}
            mode="date"
            placeholder="Select Date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            useNativeDriver={true}
            iconComponent={
              <Calendar width={24} height={24} stroke={colors.gray} />
            }
            customStyles={{
              dateInput: {
                borderWidth: 0,
                textAlign: 'left',
                fontFamily: fonts.regular,
              },
            }}
            style={styles.datapickerItem}
            onDateChange={dateItem => setDate(dateItem)}
          />
        </View>
        <View style={styles.deliveryList}>
          {userProdList &&
            userProdList.data.map(item => (
              <Pressable
                style={styles.deliveryItem}
                onPress={() => detailsItem(item.id)}
                key={item.id}>
                <Image
                  style={styles.productImg}
                  source={require('../../assets/images/icon.png')}
                />
                <View style={styles.productListDesc}>
                  <Text style={styles.proMainName}>{item.secondaryId}</Text>
                  <Text style={styles.subtext}>Price: Rs. {item.price}/-</Text>
                  <Text style={styles.weighttext}>
                    {item.quantity} items,{' '}
                    {item.status === 'ASSIGNED_DELIVERY_AGENT'
                      ? 'Assigned'
                      : item.status}
                  </Text>
                </View>
              </Pressable>
            ))}
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
  mainHeading: {
    fontSize: 22,
    color: colors.green,
    textAlign: 'left',
    marginBottom: 4,
    fontFamily: fonts.bold,
  },
  subHeading: {
    fontSize: 16,
    color: colors.gray,
    textAlign: 'left',
    marginBottom: 30,
    fontFamily: fonts.regular,
  },
  deliveryList: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 30,
  },
  datePickerCover: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  datetext: {
    fontSize: 15,
    color: colors.gray,
    fontFamily: fonts.regular,
  },
  datapickerItem: {
    display: 'flex',
  },
  deliveryItem: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    marginBottom: 12,
    borderRadius: 4,
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
});
