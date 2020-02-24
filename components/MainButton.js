import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/colors';

const MainButton = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onClick}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'open-sans-regular',
    fontSize: 18
  }
});

export default MainButton;
