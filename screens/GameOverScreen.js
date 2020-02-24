import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = ({ numOfRounds, userNumber, handleRestartGame }) => {
  return (
    <View style={styles.screen}>
      <TitleText>THE GAME IS OVER</TitleText>
      <View style={styles.imageContainer}>
        <Image
          //fadeDuration={300}
          style={styles.image}
          source={require('../assets/summit_success.jpg')}
          //   source={{
          //     uri:
          //       'https://38cnsy2ees0v3wanzd1lt0vq-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/shutterstock_167769761.jpg'
          //   }}
          //resizeMode='cover'
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed <Text style={styles.highlight}>{numOfRounds}</Text>{' '}
          rounds to guess the number{' '}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </BodyText>
      </View>
      <MainButton onClick={handleRestartGame}>NEW GAME</MainButton>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: 'black',
    borderWidth: 3,
    overflow: 'hidden',
    marginVertical: 30
  },
  image: {
    width: '100%',
    height: '100%'
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  }
});

export default GameOverScreen;
