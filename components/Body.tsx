import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { wordStruct } from "../Types";
import Word from "./Word";
import Button from "./Button";

import Firebase from "firebase";
import { firebaseConfig } from "../Keys";

Firebase.initializeApp(firebaseConfig);

const Body = () => {
  const [words, setWords] = useState([]);
  const [data, setData] = useState<wordStruct>({} as wordStruct);

  const reference = Firebase.database().ref("/");

  return (
    <View style={styles.wordBody}>
      <Word
        word={data.word}
        partOfSpeech={data.partOfSpeech}
        definition={data.definition}
        usage={data.usage}
      />
      <Button setData={setData} setWords={setWords} reference={reference} />
    </View>
  );
};

const styles = StyleSheet.create({
  wordBody: {
    flex: 0.8,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    width: "80%",
  },
});

export default Body;
