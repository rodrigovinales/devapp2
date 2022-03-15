import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import StartGameScreen from '../screens/StartGameScreen';
import NotLogged from '../screens/NotLogged';


const App = () => {

  let content
  const [logueado, setLogueado] = useState(false)

  const logginHandler = () => {
    setLogueado(true);
    return <StartGameScreen />
  }

  if (logueado) { content = <StartGameScreen /> }
  else { content = <NotLogged logginHandler={logginHandler} /> }

  return (
    <SafeAreaView style={styles.screen}>
      {content}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center"
  }
})

export default App;