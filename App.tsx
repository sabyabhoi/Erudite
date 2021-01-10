import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import Body from "./components/Body";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Body />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffee",
    alignItems: "center",
  },
});

export default App;
