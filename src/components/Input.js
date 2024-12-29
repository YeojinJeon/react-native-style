import React from "react";
import styled from "styled-components/native";

const StyledInput = styled.TextInput.attrs(props => ({
    placeholder: 'Enter a text...',
    placeholderTextColor: props.textColor,
}))`
width:200px; 
height: 60px;
margin: 5px;
padding: 10px;
border-radius: 10px;
border: 2px;
border-color: #3498db; /* 여기도 text color 와 동일하게 맞추려면? */
font-size: 24px;
`;

const Input = props => {
    return <StyledInput textColor={props.textColor} />
};

export default Input;
