import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import WordCard from "./WordCard";

import Firebase from "firebase";
import { firebaseConfig } from "../Keys";

Firebase.initializeApp(firebaseConfig);

const WordList = () => {
  const [words, setWords] = useState([]);
  const reference = Firebase.database().ref("/");

  useEffect(() => {
    reference.on("value", (data: any) => setWords(data.val().words));
  }, []);
  return (
    <View style={styles.wordList}>
      <WordCard words={words} setWords={setWords} reference={reference} />
    </View>
  );
};

const styles = StyleSheet.create({
  wordList: {
    flex: 1,
    width: "100%",
  },
});

export default WordList;
