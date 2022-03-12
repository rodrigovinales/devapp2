import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from "../components/Card";
import Input from "../components/Input";
import Plantillas from "../Constants/plantillas";

const StartGameScreen = () => {

    const [enteredValue, setEnteredValue] = useState("")
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState("");

    const handlerInputNumber = (text) => {
        setEnteredValue(text.replace(/[^0-9]/g), "")
    }
    const handlerResetInput = () => {
        setConfirmed(false);
        setEnteredValue("");
    }
    const handlerConfirmInput = () => {
        const choseNumber = parseInt(enteredValue)
        if (choseNumber === NaN || choseNumber <= 0 && choseNumber > 99)
            return
        setConfirmed(true);
        setSelectedNumber(parseInt(enteredValue))
        setEnteredValue("");
    }

    const confirmedOutPut = confirmed ? <Text>Numero elegido: {selectedNumber}</Text> : null;

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Comenzar Juego</Text>
                <Card style={styles.inputContainer}>
                    {confirmedOutPut}
                    <Text style={styles.robotoFont}>Seleccione un Numero</Text>
                    <Input style={styles.input}
                        blurOnSubmit
                        autoCapitalization="none"
                        autoCorrect={false}
                        keyboardType="numeric"
                        maxLength={2}
                        onChangeText={handlerInputNumber}
                        value={enteredValue}
                    />
                   

                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button
                                title="LIMPIAR"
                                onPress={handlerResetInput}
                                color={Plantillas.accent} />
                        </View>
                        <View>
                            <Button title="CONFIRMAR"
                                onPress={() => { console.log("PRESIONASTE") }}
                                color={Plantillas.primary} />
                        </View>
                    </View>
                </Card >
                
            </View >
        </TouchableWithoutFeedback>

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
    },
    robotoFont: {
        fontFamily: "SmoochSans-Bold",
        fontSize: 22
    }
})
export default StartGameScreen;