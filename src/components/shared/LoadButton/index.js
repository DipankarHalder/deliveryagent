import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import colors from '../../config/colors';
import fonts from '../../config/fonts';

export const LoadButton = () => {
  return (
    <View style={styles.waitbtn}>
      <Text style={styles.waitText}>Please wait...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  waitbtn: {
    width: '100%',
    borderRadius: 4,
    fontSize: 12,
    marginTop: 14,
    backgroundColor: colors.lgray,
  },
  waitText: {
    textAlign: 'center',
    height: 44,
    lineHeight: 44,
    fontSize: 15,
    color: colors.gray,
    fontFamily: fonts.bold,
  },
});
