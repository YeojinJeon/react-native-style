import React from "react";
import { View, Text } from "react-native";
const App = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff', //white
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text style={{
                padding: 10,
                fontSize: 26,
                fontWeight: '600',
                color: 'black'
            }}>Inline Style - Text</Text>
            <Text style={{
                padding: 10,
                fontSize: 26,
                fontWeight: '400',
                color: 'red'
            }}>Inline Style - Error</Text>
        </View>
    );
};

export default App;
