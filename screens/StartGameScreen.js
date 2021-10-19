import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback } from "react-native";

import Card from "../components/Card";
import Colors from "../Theme/Colors";
import Input from "../components/input";

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState("");

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, "" ));
     };

    return (

        <View style={styles.screen}>
        <Text style={styles.title}>Start New</Text>

            <Card style={styles.inputContainer}>
                <Text>Select A Number</Text>
                <Input style={styles.input}
                    blurOnSubmit
                    autoCapitalized="none"
                    autoCorrect={false}
                    keyboardType="number-pad"
                    maxLength={2}
                    onChangeText={numberInputHandler}
                    value = {enteredValue} />
                <View style={styles.buttonContainer}>
                    <View style={styles.btn}>
                        <Button title="Reset" onPress={() => { }} color={Colors.accent} />
                    </View>
                    <View style={styles.btn}>
                        <Button title="Confirm" onPress={() => { }} color={Colors.primary} />
                    </View>
                </View>
            </Card>
        </View>
    );

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",

    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15,

    },
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
        // shadowColor: "black",
        // shadowOffset: { width: 0, height: 2 },
        // shadowRadius: 6,
        // shadowOpacity: 0.26,
        // elevation: 5,
        // backgroundColor: "white",
        // padding: 20,
        // borderRadius: 10,
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    btn: {
        width: 80
    },
    input: {
        width: 50,
        textAlign: "center",
    },
});

export default StartGameScreen;