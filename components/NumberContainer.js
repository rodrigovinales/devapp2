import React from "react";
import Plantillas from "../Constants/plantillas";
import { Text, View, StyleSheet } from "react-native";

const NumberContainer = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth : 2,
        borderColor : Plantillas.accent,
        padding: 10,
        borderRadius:10,
        marginVertical:10,
        alignItems: "center",
        justifyContent:"center"
    },
    number: {
        color: Plantillas.accent,
        fontSize: 22
    }
})

export default NumberContainer;