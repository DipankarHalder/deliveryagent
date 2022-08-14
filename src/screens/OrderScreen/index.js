import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  LogBox,
  ScrollView,
  Pressable,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import { CoreContext } from '../../services/context/coreContext';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import colors from '../../components/config/colors';
import fonts from '../../components/config/fonts';
import Calendar from '../../assets/images/icons/calendar.svg';
import ChevronRight from '../../assets/images/icons/chevron-right.svg';

const dataList = [
  { label: 'Asigned', value: 'ASSIGNED_DELIVERY_AGENT' },
  { label: 'Out for delivery', value: 'OUT_FOR_DELIVERY' },
  { label: 'Delivered', value: 'DELIVERED' },
];

export const OrderScreen = () => {
  const navigation = useNavigation();
  const { getAllProductList, userProdList } = useContext(CoreContext);
  const productsData = userProdList && userProdList.data;

  const [mainDate, setMainDate] = useState(
    moment(new Date()).format('YYYY-MM-DD'),
  );
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dropDownValue, setDropDownValue] = useState(null);

  const detailsItem = id => {
    navigation.navigate('OrderDetails', { id: id });
  };

  const handleDatePicker = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };

  const handleConfirm = date => {
    setMainDate(moment(date).format('YYYY-MM-DD'));
    setDatePickerVisibility(false);
  };

  useEffect(() => {
    const payload = {
      page: 1,
      perPage: 10,
      deliveryDate: mainDate,
      status: dropDownValue,
    };
    getAllProductList(payload);
  }, [dropDownValue, getAllProductList, mainDate]);

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

  return (
    <ScrollView nestedScrollEnabled={true} style={styles.screenWrapper}>
      <View style={styles.container}>
        <Text style={styles.mainHeading}>Delivery Product Lists</Text>
        <Text style={styles.subHeading}>
          You have to collect the following products from the booth.
        </Text>
        <View style={styles.datePickerCover}>
          <Text style={styles.datetext}>Search items with...</Text>
          <View style={styles.filterCover}>
            <View style={styles.statusFilter}>
              <Text style={styles.filterText}>Status:</Text>
              <View style={styles.dropDownCover}>
                <Dropdown
                  style={styles.dropdownCov}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  data={dataList}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  searchPlaceholder="Search..."
                  value={dropDownValue}
                  fontFamily={fonts.regular}
                  onChange={item => {
                    setDropDownValue(item.value);
                  }}
                />
              </View>
            </View>
            <View style={styles.dateCoverDisplay}>
              <Text style={styles.filterText}>Date:</Text>
              <TouchableOpacity
                style={styles.displayDate}
                onPress={handleDatePicker}>
                <Text>{mainDate}</Text>
                <Calendar width={24} height={24} stroke={colors.gray} />
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={handleDatePicker}
              />
            </View>
          </View>
        </View>
        {productsData && productsData.length ? (
          <View style={styles.deliveryList}>
            {productsData.map(item => (
              <Pressable
                style={styles.deliveryItem}
                onPress={() => detailsItem(item.id)}
                key={item.id}>
                <Image
                  style={styles.productImg}
                  source={{ uri: item.product.mainImage.url }}
                />
                <View style={styles.productListDesc}>
                  <Text style={styles.proMainName}>{item.product.name}</Text>
                  <Text style={styles.prodPrice}>
                    <Text style={styles.prodSubText}>Price:</Text>
                    &nbsp; Rs. {item.price}/-
                  </Text>
                  <Text style={styles.prodSize}>
                    <Text style={styles.prodSubText}>Size:</Text>
                    &nbsp;&nbsp; {item.product.sizeMl} ml
                  </Text>
                  <Text
                    style={[
                      styles.prodStatus,
                      {
                        color:
                          item.status === 'ASSIGNED_DELIVERY_AGENT'
                            ? colors.lgray
                            : item.status === 'OUT_FOR_DELIVERY'
                            ? colors.orange
                            : colors.green,
                      },
                    ]}>
                    <Text style={styles.prodSubText}>Status:</Text>
                    &nbsp;{' '}
                    {item.status === 'ASSIGNED_DELIVERY_AGENT'
                      ? 'Assigned'
                      : item.status === 'OUT_FOR_DELIVERY'
                      ? 'Out for Delivery'
                      : 'Delivered'}
                  </Text>
                </View>
                <View style={styles.rightItemBtn}>
                  <ChevronRight width={24} height={24} stroke={colors.gray} />
                </View>
              </Pressable>
            ))}
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
    flexDirection: 'column',
    marginBottom: 4,
  },
  datetext: {
    fontSize: 15,
    color: colors.black,
    fontFamily: fonts.regular,
    marginBottom: 10,
  },
  filterCover: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  statusFilter: {
    marginLeft: 0,
    width: '48.5%',
  },
  filterText: {
    fontSize: 13,
    color: colors.gray,
    fontFamily: fonts.regular,
    marginBottom: 2,
  },
  dropdownCov: {
    color: colors.gray,
    backgroundColor: colors.white,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 4,
    shadowOffset: { width: 1, height: 2 },
    shadowColor: colors.shadow,
    shadowOpacity: 0.06,
    shadowRadius: 2,
  },
  placeholderStyle: {
    fontSize: 14,
    color: colors.gray,
    fontFamily: fonts.regular,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  inputSearchStyle: {
    height: 36,
    fontSize: 14,
    borderRadius: 4,
  },
  dateCoverDisplay: {
    marginLeft: '3%',
    width: '48.5%',
  },
  displayDate: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 4,
    shadowOffset: { width: 1, height: 2 },
    shadowColor: colors.shadow,
    shadowOpacity: 0.06,
    shadowRadius: 2,
  },
  mainDateDisplay: {
    marginRight: 10,
    marginTop: 2,
    fontSize: 14,
    color: colors.black,
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
    width: 90,
    height: 90,
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
    fontFamily: fonts.bold,
    marginTop: 3,
    marginBottom: 8,
  },
  prodPrice: {
    fontSize: 13,
    color: colors.black,
    fontFamily: fonts.bold,
  },
  prodSize: {
    fontSize: 13,
    color: colors.black,
    fontFamily: fonts.bold,
  },
  prodStatus: {
    fontSize: 13,
    fontFamily: fonts.bold,
  },
  prodSubText: {
    fontSize: 13,
    color: colors.gray,
    fontFamily: fonts.regular,
  },
  rightItemBtn: {
    position: 'absolute',
    top: '52%',
    right: 20,
  },
  imgEmpty: {
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 120,
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
