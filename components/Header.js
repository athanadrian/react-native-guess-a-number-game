import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 36,
    backgroundColor: Colors.primary //'#4682b4' //'#0086BD'
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20
  }
});
export default Header;
