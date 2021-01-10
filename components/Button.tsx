import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Button = ({ setData }: any) => {
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
    <View>
      <TouchableOpacity onPress={getWord} style={styles.btn}>
        <Text style={styles.btnText}>Get New Word</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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