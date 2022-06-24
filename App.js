import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import RootNavigator from "./navigation/RootNavigator";
import { store } from "./store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <RootNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
