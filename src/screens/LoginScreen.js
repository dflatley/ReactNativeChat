import React, { useContext } from "react";
import { View } from "react-native";
import { Text, ThemeContext } from "react-native-elements";

const LoginScreen = ({ navigation }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <View style={theme.viewStyle}>
            <Text h4>Login Screen</Text>
        </View>
    );
};

LoginScreen.navigationOptions = () => {
    return {
        headerShow: false,
        title: ""
    };
};

export default LoginScreen;
