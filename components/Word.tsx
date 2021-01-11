import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { wordStruct } from "../Types";

const Word = ({ word, partOfSpeech, definition, usage }: wordStruct) => {
  return (
    <View style={styles.wordBody}>
      <Text style={styles.word}>{word}</Text>
      <Text style={styles.partOfSpeech}>{partOfSpeech}</Text>
      <Text style={styles.definition}>{definition}</Text>
      <Text style={styles.usage}>"{usage}"</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wordBody: {
    flex: 9,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    width: "80%",
  },
  word: {
    fontSize: 50,
    fontWeight: "bold",
  },
  partOfSpeech: {
    fontSize: 20,
    color: "grey",
    paddingVertical: 15,
  },
  definition: {
    fontWeight: "bold",
    paddingVertical: 5,
  },
  usage: {
    fontStyle: "italic",
    paddingVertical: 5,
  },
});

export default Word;
