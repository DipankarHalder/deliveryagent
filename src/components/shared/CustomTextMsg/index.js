import React from 'react';
import { Text, StyleSheet } from 'react-native';
import fonts from '../../../components/config/fonts';

export const CustomTextMsg = ({ colorText, message }) => {
  return (
    <Text style={[styles.messageText, { color: colorText }]}>{message}</Text>
  );
};

const styles = StyleSheet.create({
  messageText: {
    textAlign: 'left',
    fontSize: 13,
    fontFamily: fonts.regular,
    marginTop: -10,
    marginBottom: 20,
  },
});
