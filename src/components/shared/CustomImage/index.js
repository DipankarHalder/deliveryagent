import { View, Text } from 'react-native';
import React from 'react';

import fonts from '../../config/fonts';
import colors from '../../config/colors';

export const CustomImage = ({ nameText, size, radius, bgColor }) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: radius,
        backgroundColor: bgColor,
        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: colors.white,
      }}>
      <Text
        style={{ fontFamily: fonts.bold, fontSize: 60, color: colors.white }}>
        {nameText.split('')[0]}
      </Text>
    </View>
  );
};
