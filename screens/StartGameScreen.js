import React, { useState } from "react";
import { Alert, View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, ImageBackground } from 'react-native';
import Card from "../components/Card";
import Input from "../components/Input";
import Plantillas from "../Constants/plantillas";
import Header from "../components/Header";
import GameOverScreen from "./GameOverScreen";


const StartGameScreen = () => {

    const [count, SetCount] = useState(1)
    const [numeroAdivina, SetNumeroAdivina] = useState(Math.floor(Math.random() * 10 + 1))
    const [enteredValue, SetEnteredValue] = useState("")
    const [selectedNumber, SetSelectedNumber] = useState("");

    console.log("NUMERO DE LA MAQUINA", numeroAdivina) // TRAMPITA PARA SABER CUAL ES EL NUMERO A ADIVINAR

    const handlerInputNumber = (text) => {
        SetEnteredValue(text.replace(/[^0-9]/g, ''))
    }

    const handlerResetInput = () => {
        SetEnteredValue("");
    }

    const handlerConfirmInput = () => {
        let choseNumber = parseInt(enteredValue)
        if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 10) {
            Alert.alert('HOLA !!!!!', 'Recorda que tenes que elegir un numero entre 1 al 10..');
            return;
        }
        SetCount(count + 1);
        SetEnteredValue("");
        SetSelectedNumber(parseInt(enteredValue))
    }

        if (numeroAdivina == enteredValue) {
            Alert.alert(`ACERTASTE EN ${count} VECES !!!!`)
            return <GameOverScreen/>
        }

    return (

        <ImageBackground source={require('../assets/randomnumbers.png')} style={styles.image}>
            <Header titulo={"Adivina el numero"} />
            <TouchableWithoutFeedback onPress={() => {
                Keyboard.dismiss()
            }}>
                <View style={styles.screen}>
                    <Text style={styles.title}>Comenzar Juego</Text>
                    <Card style={styles.inputContainer}>
                        <Text style={styles.robotoFont}>Seleccione un Numero del 1 al 10</Text>
                        <Input
                            style={styles.input}
                            blurOnSubmit
                            autoCapitalization="none"
                            autoCorrect={false}
                            keyboardType="numeric"
                            maxLength={2}
                            onChangeText={(value) => handlerInputNumber(value)}
                            value={enteredValue}
                        />
                        <View style={styles.buttonContainer}>
                            <View style={styles.button}>
                                <Button
                                    title="LIMPIAR"
                                    onPress={handlerResetInput}
                                    color={Plantillas.accent}
                                />
                            </View>
                            <View>
                                <Button title="CONFIRMAR"
                                    onPress={handlerConfirmInput}
                                    value={enteredValue}
                                    color={Plantillas.primary}
                                />
                            </View>
                        </View>
                    </Card >
                </View >
            </TouchableWithoutFeedback>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center"
    },
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    title: {
        fontSize: 40,
        marginVertical: 10,
        color: "#631C0A",
        borderRadius: 5,
        backgroundColor: "#C0C0C0"
    },
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        padding: 20,
        alignItems: "center",
        backgroundColor: "#EAE75B"
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15
    },
    robotoFont: {
        fontFamily: "IndieFlower-Regular",
        fontSize: 30,
        textAlign: "center"
    }
})
export default StartGameScreen;