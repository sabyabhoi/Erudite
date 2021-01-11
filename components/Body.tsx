import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { wordStruct } from "../Types";
import Word from "./Word";
import Button from "./Button";

const Body = () => {
  const [data, setData] = useState<wordStruct>({} as wordStruct);

  return (
    <View style={styles.wordBody}>
      <Word
        word={data.word}
        partOfSpeech={data.partOfSpeech}
        definition={data.definition}
        usage={data.usage}
      />
      <Button setData={setData} />
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
