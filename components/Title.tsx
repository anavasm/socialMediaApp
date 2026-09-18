import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';
import { getFontFamily } from '../assets/fonts/helper';

interface TitleProps extends TextProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <Text style={styles.title} accessibilityRole="header" accessibilityLabel={typeof children === 'string' ? children : 'Title'}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 24,
  },
});

export default Title