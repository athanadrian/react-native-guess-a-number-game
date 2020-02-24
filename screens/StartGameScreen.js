import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import DefaultStyles from '../constants/default-styles';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

const StartGameScreen = ({ onStartGame }) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const handleEnterValue = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const handleCloseKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleResetInput = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  //   let confirmedOutput;

  //   if (confirmed) {
  //     confirmedOutput = <Text>You have chosen: {selectedNumber}</Text>;
  //   }

  const handleConfirmedInput = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!', 'Chose a number between 1 - 99.', [
        { text: 'okay', style: 'destuctive', onPress: handleResetInput }
      ]);
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    handleCloseKeyboard();
    setEnteredValue('');
  };

  const onHandleStartGame = () => {
    onStartGame(selectedNumber);
  };

  return (
    <TouchableWithoutFeedback onPress={handleCloseKeyboard}>
      <View style={styles.screen}>
        <TitleText style={styles.title}>Start a New Game</TitleText>
        <Card style={styles.inputContainer}>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='number-pad'
            maxLength={2}
            onChangeText={handleEnterValue}
            value={enteredValue}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Button
                title='reset'
                color={Colors.secondary}
                onPress={handleResetInput}
              />
            </View>
            <View style={styles.button}>
              <Button
                title='confirm'
                color={Colors.primary}
                onPress={handleConfirmedInput}
              />
            </View>
          </View>
        </Card>
        {confirmed && (
          <Card style={styles.numberContainer}>
            <Text style={DefaultStyles.bodyText}>You selected</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <MainButton onClick={onHandleStartGame}>START GAME</MainButton>
          </Card>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  button: {
    width: 100
  },
  input: {
    width: 50,
    textAlign: 'center'
  },
  numberContainer: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default StartGameScreen;
