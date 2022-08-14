import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import fonts from '../../../components/config/fonts';
import colors from '../../../components/config/colors';

export const CustomMsg = ({ colorBack, colorText, message }) => {
  return (
    <View style={[styles.msgItems, { backgroundColor: colorBack }]}>
      <Text style={[styles.messageText, { color: colorText }]}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  msgItems: {
    display: 'flex',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    marginTop: 26,
    shadowOffset: { width: 1, height: 2 },
    shadowColor: colors.shadow,
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  messageText: {
    textAlign: 'left',
    fontSize: 13,
    fontFamily: fonts.regular,
  },
});
