import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

import fonts from '../../config/fonts';

export const CustomButton = ({
  onPress,
  bottonText,
  bgcolor,
  color,
  uppercase,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.buttonWrapper, { backgroundColor: bgcolor }]}>
      <Text
        style={[styles.buttonText, { color: color, textTransform: uppercase }]}>
        {bottonText}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    width: '100%',
    borderRadius: 4,
    fontSize: 12,
    marginTop: 14,
  },
  buttonText: {
    textAlign: 'center',
    height: 44,
    lineHeight: 44,
    fontSize: 15,
    fontFamily: fonts.bold,
  },
});
