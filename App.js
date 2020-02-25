import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import { setNavigator } from "./src/navigationRef";
import { ThemeProvider } from "react-native-elements";

const offset = 16;

const theme = {
    Button: {
        fontSize: 42,
        raised: false,
        buttonStyle: {
            backgroundColor: "#8ec43e",
            margin: offset
        }
    },
    messageFormStyle: {
        backgroundColor: "#FFF",
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 36
    },
    viewStyle: {
        backgroundColor: "#FFF"
    },
    FlatList: {
        marginLeft: offset,
        marginRight: offset
    },
    ListItem: {
        marginRight: offset
    },
    colors: {
        primary: "#023467",
        secondary: "#8ec43e"
    },
    containerStyle: {
        flex: 1,
        flexDirection: "column"
    },
    Input: {
        leftIconContainerStyle: {
            marginRight: 5
        },
        leftIcon: {
            color: "#555",
            fontSize: 12
        },
        inputStyle: {
            height: 65
        },
        marginLeft: 10,
        fontSize: 16
    },
    title: {
        marginTop: offset,
        marginLeft: offset,
        fontSize: 16
    },
    h4: {
        marginTop: 16,
        marginLeft: 16
    },
    logoContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        paddingTop: 10
    },
    logo: {
        paddingTop: 100,
        width: 150,
        height: 88
    },
    title: {
        marginTop: offset,
        marginLeft: offset,
        fontSize: offset
    },
    errorMessageStyle: {
        color: "red"
    }
};

const switchNavigator = createSwitchNavigator({
    mainFlow: createDrawerNavigator(
        {
            Home: {
                screen: HomeScreen
            },
            Settings: {
                screen: SettingsScreen
            }
        },
        {
            initialRouteName: "Home"
        }
    ),
    loginFlow: createStackNavigator(
        {
            Signup: { screen: SignUpScreen },
            Login: {
                screen: LoginScreen
            }
        },
        {
            initialRouteName: "Login"
        }
    )
});

const App = createAppContainer(switchNavigator);

export default () => {
    return (
        <ThemeProvider theme={theme}>
            <App
                style={{ backgroundColor: "white" }}
                ref={navigator => {
                    setNavigator(navigator);
                }}
            />
        </ThemeProvider>
    );
};
