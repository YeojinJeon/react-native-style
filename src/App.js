import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { viewStyles, textStyles } from "./styles";
import { Header, Contents, Footer } from "./components/Layout";
import ShadowBox from "./components/ShadowBox";
import styled from "styled-components/native";
import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {
    return (
        <Container>
            <Button title="Sesac" />
            <Button title="React Native" />
            <Input />
        </Container>
    );
};

const Container = styled.View`
flex:1;
background-color: #ffffff;
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
