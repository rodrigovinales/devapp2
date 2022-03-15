import React from "react";
import { Text, View, Button, ImageBackground, Card, StyleSheet } from "react-native";

const GameOverScreen = () => {

    return (
        <ImageBackground
            source={require("../assets/gameover.jpg")}
            style={styles.image}>
        </ImageBackground >
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center"
    }
})

export default GameOverScreen;