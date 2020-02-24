import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BodyText from './BodyText';
import Colors from '../constants/colors';

const ListItem = ({ guess, pastGuesses, index }) => {
  return (
    <View style={styles.listItem}>
      <BodyText>
        {' '}
        Guess No <Text style={styles.guess}>
          {pastGuesses.length - index}
        </Text>{' '}
        is :{' '}
      </BodyText>
      <BodyText style={styles.guess}>{guess}</BodyText>
    </View>
  );
};
const styles = StyleSheet.create({
  listItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },
  guess: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary,
    fontSize: 18
  }
});

export default ListItem;
