import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  ScrollView
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import Colors from '../constants/colors';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import ListItem from '../components/ListItem';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = ({ userChoice, onHandleGameOver }) => {
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const initialGuess = generateRandomBetween(
    currentLow.current,
    currentHigh.current,
    userChoice
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onHandleGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onHandleGameOver]);

  const handleNextDecision = direction => {
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'greater' && currentGuess > userChoice)
    ) {
      Alert.alert('You just lied!!!', 'Wrong Direction.....!!!', [
        { text: 'Sorry', style: 'cancel' }
      ]);
      return;
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setPastGuesses(prevGuesses => [nextNumber, ...prevGuesses]);
  };
  return (
    <View style={styles.screen}>
      <TitleText>My Guess is</TitleText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <View style={styles.buttonsContainer}>
          <MainButton
            color={Colors.secondary}
            onClick={() => {
              handleNextDecision('lower');
            }}
          >
            <Ionicons name='md-remove' size={24} color='white' />
          </MainButton>
          <MainButton
            color={Colors.primary}
            onClick={() => {
              handleNextDecision('greater');
            }}
          >
            <Ionicons name='md-add' size={24} color='white' />
          </MainButton>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) => (
            <ListItem guess={guess} pastGuesses={pastGuesses} index={index} />
          ))}
          {/* <BodyText>
               Guess No:{i + 1} is <Text style={styles.guessText}>{guess}</Text>
             </BodyText>*/}
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '80%',
    width: 300
  },
  button: {
    width: 100
  },
  guessText: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  },
  listContainer: {
    flex: 1,
    width: '60%'
  },
  list: {
    flexGrow: 1
    // alignItems: 'center',
    //justifyContent: 'flex-end'
  }
});

export default GameScreen;
