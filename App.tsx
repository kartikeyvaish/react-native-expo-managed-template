import * as React from "react";
import { useEffect } from "react";
import { Appearance } from "react-native";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./navigation/AppNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import { ChangeMode } from "./store/theme/actions";

function App(props: any) {
  // State Variables
  const { User, Theme } = props;

  // Dispatch Functions
  const { ChangeMode } = props;

  // Theme Change Listener
  useEffect(() => {
    Appearance.addChangeListener(onThemeChange);

    return () => Appearance.removeChangeListener(onThemeChange);
  }, []);

  // Function to execute on device theme change
  const onThemeChange = ({ colorScheme }: any) => {
    // Change your theme here
    console.log(colorScheme);
    ChangeMode(colorScheme);
  };

  return (
    <NavigationContainer theme={Theme}>
      {User ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

const mapStateToProps = ({ Auth, Theme }: any) => {
  return {
    User: Auth.User,
    Theme: Theme.Theme,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    ChangeMode: (colorScheme: any) => dispatch(ChangeMode(colorScheme)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
