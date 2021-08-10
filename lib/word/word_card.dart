import 'package:animations/animations.dart';
import 'package:flutter/material.dart';
import 'package:erudite/word/word_data.dart';
import 'package:erudite/word/word.dart';

class WordCard extends StatelessWidget {
  final WordData wordData;

  const WordCard({Key? key, required this.wordData}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return OpenContainer(
      closedColor: const Color.fromRGBO(0, 0, 0, 0),
      closedBuilder: (BuildContext context, void Function() action) => Card(
        color: const Color.fromRGBO(255, 255, 238, 1.0),
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Text(
            wordData.word,
            textAlign: TextAlign.center,
            style: const TextStyle(fontSize: 30, fontWeight: FontWeight.bold),
          ),
        ),
      ),
      openBuilder:
          (BuildContext context, void Function({Object? returnValue}) action) =>
              Word(
        wordData: wordData,
      ),
    );
  }
}
