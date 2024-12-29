import React from "react";
import { StyleSheet, View, Platform } from "react-native";

export default () => {
    return <View style={styles.shadow}></View>
}

const styles = StyleSheet.create({
    shadow: {
        backgroundColor: 'white',
        width: 200,
        height: 200,
        ...Platform.select({
            ios: {
                backgroundColor: 'silver',
                shadowOffset: {
                    width: 10,
                    height: 10,
                },
                shadowOpacity: 0.5
            },
            android: {
                backgroundColor: 'gold',
                evaluation: 20,
            },
            default: { // other platform, web for example
                backgroundColor: 'black',
            }
        })

    }
});