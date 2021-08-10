import 'package:flutter/material.dart';
import 'package:erudite/word/word_card.dart';
import 'package:erudite/word/word_data.dart';

class WordList extends StatelessWidget {
  const WordList({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Padding(
        padding: const EdgeInsets.symmetric(vertical: 5.0, horizontal: 10.0),
        child: ListView.separated(
          itemCount: 2,
          itemBuilder: (context, index) => WordCard(
            wordData: WordData(
                word: 'Erudite',
                type: 'Adjective',
                defn: 'having or showing great knowledge or learning.',
                usage:
                    'Ken could turn any conversation into an erudite discussion'),
          ),
          separatorBuilder: (context, index) => const Divider(
            height: 5,
          ),
        ),
      ),
    );
  }
}
