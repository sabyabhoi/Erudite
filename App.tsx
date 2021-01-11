import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import WordList from "./components/WordList";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WordList />
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
