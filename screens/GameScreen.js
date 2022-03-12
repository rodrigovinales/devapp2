import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native"

const GameScreen = props => {

    const [currentGuest, setCurrentGuest] = useState(generateRandomBetween(1, 100, props.userOption))

    render(
        <View style={styles.screen}>
            <Text>La suposicion del oponente</Text>
            <NumberContainer>{currentGuest}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="MENOR" onPress={() => { }} />
                <Button title="MAYOR" onPress={() => { }} />
            </Card>
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems:"center"
    },
    buttonContainer: {
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:20,
        width:300,
        maxWidth:"80%"
    }
})

export default GameScreen;