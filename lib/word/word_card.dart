import 'package:flutter/material.dart';
import 'package:erudite/word/word_data.dart';

class WordCard extends StatelessWidget {
  final WordData wordData;

  const WordCard({key, required this.wordData}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 100,
      child: Center(
          child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(wordData.word,
              style:
                  const TextStyle(fontSize: 45, fontWeight: FontWeight.bold)),
          Text(wordData.type, textAlign: TextAlign.center),
        ],
      )),
      decoration: BoxDecoration(
        color: const Color.fromRGBO(227, 228, 219, 1),
        borderRadius: BorderRadius.circular(15),
        boxShadow: const [BoxShadow(blurRadius: 5)],
      ),
    );
  }
}
