import React, { useContext } from "react";
import { View } from "react-native";
import { Text, ThemeContext } from "react-native-elements";

const SettingsScreen = ({ navigation }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <View style={theme.viewStyle}>
            <Text h4>Settings screen</Text>
        </View>
    );
};

export default SettingsScreen;
