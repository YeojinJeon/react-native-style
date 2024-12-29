import React, { useState } from "react";
import { StyleSheet, View, Text, Switch } from "react-native";
import { viewStyles, textStyles } from "./styles";
import { Header, Contents, Footer } from "./components/Layout";
import ShadowBox from "./components/ShadowBox";
import styled, { ThemeProvider } from "styled-components/native";
import Button from "./components/Button";
import Input from "./components/Input";
import { darkTheme, lightTheme, theme } from "./theme";

const App = () => {
    const [isDark, setIsDark] = useState(false);
    const _toggleSwitch = () => setIsDark(!isDark);
    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <Container>
                <Switch value={isDark} onValueChange={_toggleSwitch} />
                <Button title="Sesac" />
                <Button title="React Native" />
                <Input textColor="#3498db" />
                <Input textColor="#9b59b6" />
            </Container>
        </ThemeProvider>
    );
};

const Container = styled.View`
flex:1;
background-color: ${props => props.theme.background};
align-items: center;
justify-content: center;
`;

const classStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
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
