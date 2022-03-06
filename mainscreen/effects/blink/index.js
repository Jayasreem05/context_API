import React, { useState, useEffect } from 'react';
import {
    Text,
    View
} from 'react-native';
const Prop_Blink = (props) => {
    const [isVisible, setisVisible] = useState(true);
    useEffect(() => {
        const blinking = setInterval(() => {
            setisVisible(!isVisible);
        }, 1000);
        return () => clearInterval(blinking);
    })
    if (isVisible == false)
        return (null);

    return (<Text style={{ margin: '10%', color: 'white', fontSize: 43, justifyContent: 'center', fontFamily: 'cursive', fontWeight: 'bold' }}>{props.text}</Text>);
}
export default function Blink(props) {
    return (

        <Prop_Blink text={props.text} />
    );
}
