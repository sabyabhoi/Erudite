import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Button = ({ data, setData, words, setWords, reference }: any) => {
  const capitalize = (word: string) =>
    word[0].toUpperCase() + word.slice(1).toLowerCase();

  const getWord = async () => {
    if (words === undefined)
      reference.on("value", (data: any) => setWords(data.val().words));
    let index = Math.floor(Math.random() * words.length);
    if (data.word === words[index])
      index = Math.floor(Math.random() * words.length);

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${words[index]}`;
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
    <View style={styles.btnView}>
      <TouchableOpacity onPress={getWord} style={styles.btn}>
        <Text style={styles.btnText}>Get New Word</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnView: {
    flex: 1,
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

export default Button;
