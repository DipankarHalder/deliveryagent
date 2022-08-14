import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

import fonts from '../../config/fonts';
import colors from '../../config/colors';

export const CustomInput = ({
  labelText,
  placeholderText,
  value,
  editable,
  setValue,
  secureText,
}) => {
  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.inputLabel}>{labelText}</Text>
      <View style={styles.inputCover}>
        <TextInput
          value={value}
          editable={editable}
          onChangeText={setValue}
          placeholder={placeholderText}
          style={styles.inputField}
          secureTextEntry={secureText}
          autoCapitalize="none"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    width: '100%',
  },
  inputLabel: {
    color: colors.label,
    fontSize: 15,
    marginBottom: 8,
    textAlign: 'left',
    fontFamily: fonts.regular,
  },
  inputCover: {
    width: '100%',
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  inputField: {
    height: 46,
    lineHeight: 20,
    fontSize: 15,
    fontFamily: fonts.regular,
  },
});
