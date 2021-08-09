import 'package:flutter/material.dart';
import 'package:erudite/word/word_card.dart';
import 'package:erudite/word/word_data.dart';

class WordList extends StatelessWidget {
  const WordList({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 8.0),
      child: ListWheelScrollView(itemExtent: 200, children: <Widget>[
        WordCard(
            wordData: WordData(
                word: "Erudite",
                type: "Adjective",
                defn: "having or showing great knowledge or learning",
                usage:
                    "Ken could turn any conversation into an erudite discussion")),
        WordCard(
            wordData: WordData(
                word: "Glabella",
                type: "Noun",
                defn:
                    "the smooth part of the forehead above and between the eyebrows.",
                usage: "Casey has a fine Glabella")),
      ]),
    );
  }
}
