import React, { useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from "./screens/GameScreen";


export default function App() {
  
  const [userNumber, setUserNumber] = useState();
  
  const handlerStartGame = selectedNumber => {
    setUserNumber(selectedNumber)
  }
  
  let content = <StartGameScreen onStartGame={handlerStartGame}/>

if (userNumber) {
  content = <GameScreen/>
}

  return (
    <View style={styles.screen}>
      <Header titulo={"Adivina el numero"} />
      <StartGameScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
})
