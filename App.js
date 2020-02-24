import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const getFonts = () => {
  return Font.loadAsync({
    'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [numRoundGuess, setNumRoundGuess] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setDataLoaded(true)} />
    );
  }

  const onHandleRestartGame = () => {
    setNumRoundGuess(0);
    setUserNumber(null);
  };

  const handleStartGame = userSelection => {
    setUserNumber(userSelection);
  };

  const handleGameOver = numRoundGuess => {
    setNumRoundGuess(numRoundGuess);
  };

  let content = <StartGameScreen onStartGame={handleStartGame} />;

  if (userNumber && numRoundGuess <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onHandleGameOver={handleGameOver} />
    );
  } else if (numRoundGuess > 0) {
    content = (
      <GameOverScreen
        userNumber={userNumber}
        numOfRounds={numRoundGuess}
        handleRestartGame={onHandleRestartGame}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess a Number' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
