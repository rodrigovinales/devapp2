import React from "react";
import { View, StyleSheet } from "react-native"

const Card = props => (
    <View style={{ ...styles.card, ...props.style }}>
        {props.children}
    </View>
)

const styles = StyleSheet.create({
    card: {
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: "#f0a201"
    }
})

export default Card;