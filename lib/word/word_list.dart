import 'package:flutter/material.dart';
import 'package:erudite/word/word_card.dart';
import 'package:erudite/word/word_data.dart';
//import 'package:path_provider/path_provider.dart';
//import 'dart:io';

class WordList extends StatefulWidget {
  const WordList({Key? key}) : super(key: key);

  @override
  State<WordList> createState() => _WordListState();
}

class _WordListState extends State<WordList> {
  List<WordData> words = [
    WordData(
        word: 'Erudite',
        type: 'Adjective',
        defn: 'having or showing great knowledge or learning',
        usage: 'Ken could turn any conversation into an erudite discussion.'),
    WordData(
        word: 'Callipygian',
        type: 'Adjective',
        defn: 'having well-shaped buttocks',
        usage: 'Stacy is callipygian.'),
  ];

  @override
  void initState() {
    super.initState();
    print('List initialized');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Padding(
        padding: const EdgeInsets.symmetric(vertical: 5.0, horizontal: 10.0),
        child: ListView.separated(
          itemCount: 2,
          itemBuilder: (context, index) => WordCard(wordData: words[index]),
          separatorBuilder: (context, index) => const Divider(
            height: 5,
          ),
        ),
      ),
    );
  }
}
