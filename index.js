import "react-native-gesture-handler";
import React from "react";
import { AppRegistry } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import App from "./App";
import { store, persistor } from "./store/configureStore";

function HeadlessCheck({ isHeadless }) {
  return isHeadless ? null : (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}

AppRegistry.registerComponent("main", () => HeadlessCheck);
