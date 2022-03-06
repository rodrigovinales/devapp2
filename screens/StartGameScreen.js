import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import Card from "../components/Card";
import Colors from "../Constants/colors";

const StartGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Comenzar Juego</Text>
            <Card style={styles.inputContainer}>
                <Text>Seleccione un Numero</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <View>
                        <Button title="LIMPIAR" onPress={() => { }} color={Colors.accent} />
                    </View>
                    <View>
                        <Button title="CONFIRMAR" onPress={() => { }} color={Colors.primary} />
                    </View>
                </View>
            </Card >
        </View >
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        padding: 20,
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15
    }
})
export default StartGameScreen;