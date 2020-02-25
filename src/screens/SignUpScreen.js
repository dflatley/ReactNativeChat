import React, { useContext } from "react";
import { View } from "react-native";
import { Text, ThemeContext } from "react-native-elements";

const SignUpScreen = ({ navigation }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <View style={theme.viewStyle}>
            <Text h4>Sign up screen</Text>
        </View>
    );
};

SignUpScreen.navigationOptions = () => {
    return {
        headerShow: false,
        title: ""
    };
};

export default SignUpScreen;
