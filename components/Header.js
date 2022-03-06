import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../Constants/colors";


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
        backgroundColor: Colors.backColor,
        alignItems: "center",
        justifyContent: "center"
    },
    headerTitle: {
        color: "black",
        fontSize: 30
    }
  })
  

export default Header;
