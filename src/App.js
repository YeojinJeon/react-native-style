import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { viewStyles, textStyles } from "./styles";
import { Header, Contents, Footer } from "./components/Layout";
const App = () => {
    return (
        <View style={viewStyles.container}>
            <Header />
            <Contents />
            <Footer />
        </View>
    );
};

const classStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', //white
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        padding: 10,
        fontSize: 26,
        fontWeight: '600',
        color: 'blue'
    },
    error: {
        padding: 10,
        fontSize: 26,
        fontWeight: '400',
        color: 'red'
    }
});

export default App;
