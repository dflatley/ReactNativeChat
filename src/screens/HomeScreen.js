import React, { useContext } from "react";
import { View } from "react-native";
import { ThemeContext, Text } from "react-native-elements";

const HomeScreen = ({ navigation }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <View style={theme.viewStyle}>
            <Text h4 style={theme.h4}>
                Home Screen
            </Text>
        </View>
    );
};

HomeScreen.navigationOptions = () => {
    return {
        headerShow: false,
        title: "RN CHAT"
    };
};

export default HomeScreen;
