import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getFontFamily } from '../assets/fonts/helper';

type Props = {
  title: string;
  isFocused: boolean;
};

const ProfileTabTitle: React.FC<Props> = ({ title, isFocused }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, isFocused && styles.titleFocused]} accessibilityRole="tab"
        accessibilityState={{ selected: isFocused }}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: 16,
    color: '#79869F',
    padding: 15
  },
  titleFocused: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: 16,
    color: '#022150',
  },
});

export default ProfileTabTitle;