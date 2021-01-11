import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { wordStruct } from "../Types";
import Word from "./Word";
import Button from "./Button";

const WordCard = ({ words, setWords, reference }: any) => {
  const [data, setData] = useState<wordStruct>({} as wordStruct);

  return (
    <View style={styles.wordBody}>
      <Word
        word={data.word}
        partOfSpeech={data.partOfSpeech}
        definition={data.definition}
        usage={data.usage}
      />
      <Button
        data={data}
        setData={setData}
        words={words}
        setWords={setWords}
        reference={reference}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wordBody: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});

export default WordCard;
