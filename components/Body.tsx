import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Body = () => {
  return (
    <View style={styles.wordBody}>
      <Text style={styles.word}>Psychosis</Text>
      <Text style={styles.partOfSpeech}>Noun</Text>
      <Text style={styles.definition}>
        A severe mental disorder in which thought and emotions are so impaired
        that contact is lost with external reality.
      </Text>
      <Text style={styles.usage}>"They were suffering from a psychosis"</Text>
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
    width: "80%",
  },
  word: {
    fontSize: 50,
    fontWeight: "bold",
  },
  partOfSpeech: {
    fontSize: 20,
    color: "grey",
  },
  definition: {},
  usage: {
    fontStyle: "italic",
  },
});

export default Body;
