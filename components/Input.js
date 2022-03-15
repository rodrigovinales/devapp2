import React from "react";
import { TextInput, StyleSheet } from "react-native";


const Input = (children) => (

    <TextInput
        {...children}
        style={styles.input}
    />
)

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        marginVertical: 10,
    }
})

export default Input;
