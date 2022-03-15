import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Plantillas from "../Constants/plantillas";

const Header = props => {

    const { titulo } = props;

    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{titulo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 50,
        // paddingTop: 36,
        backgroundColor: Plantillas.backColor,
        alignItems: "center",
        justifyContent: "center"
    },
    headerTitle: {
        color: "#fffaf0",
        fontSize: 40,
        fontFamily: Plantillas.titleFontHeader,
    }
  })
export default Header;
