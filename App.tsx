import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import Firebase from "firebase";
import { firebaseConfig } from "./Keys";

Firebase.initializeApp(firebaseConfig);

import Body from "./components/Body";

const App = () => {
  const [words, setWords] = useState([]);
  const reference = Firebase.database().ref("/");

  useEffect(() => {
    reference.on("value", (data: any) => setWords(data.val().words));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Body words={words} setWords={setWords} reference={reference} />
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
