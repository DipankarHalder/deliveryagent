import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const UpdateProfileScreen = () => {
  const navigation = useNavigation();

  const backNavigation = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.screenWrapper}>
      <View style={styles.container}>
        <Text onPress={backNavigation}>Back Profile</Text>
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
});
