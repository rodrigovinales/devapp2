import React from "react";
import Plantillas from "../Constants/plantillas";
import { View, Button, ImageBackground, StyleSheet } from "react-native"

const NotLogged = (props) => {

    const { logginHandler } = props

    const image = { uri: "https://cdn.pixabay.com/photo/2015/11/10/08/22/pay-1036469_960_720.jpg" }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={image}
                style={styles.image}>

                <Button
                    title="INGRESAR"
                    onPress={() => logginHandler()}
                    color={Plantillas.primary}
                />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
});

export default NotLogged;