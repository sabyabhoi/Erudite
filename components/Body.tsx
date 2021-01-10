import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Word from "./Word";
import { wordStruct } from "../Types";

const Body = () => {
  const [data, setData] = useState<wordStruct>({} as wordStruct);

  const capitalize = (word: string) =>
    word[0].toUpperCase() + word.slice(1).toLowerCase();

  const getWord = async () => {
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/glabella";
    const response = await fetch(url);
    const responseData = await response.json();

    const word = {
      word: capitalize(responseData[0].word),
      partOfSpeech: responseData[0].meanings[0].partOfSpeech,
      definition: responseData[0].meanings[0].definitions[0].definition,
      usage: responseData[0].meanings[0].definitions[0].example,
    };

    setData(word);
  };

  return (
    <View style={styles.wordBody}>
      <Word
        word={data.word}
        partOfSpeech={data.partOfSpeech}
        definition={data.definition}
        usage={data.usage}
      />
      <TouchableOpacity onPress={getWord} style={styles.btn}>
        <Text style={styles.btnText}>Get New Word</Text>
      </TouchableOpacity>
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
  btn: {
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#424F67",
  },
  btnText: {
    fontFamily: "roboto",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Body;
