import 'package:flutter/material.dart';
import 'package:erudite/word/word_card.dart';
import 'package:erudite/word/word.dart';
import 'package:hive/hive.dart';

class WordList extends StatefulWidget {
  const WordList({Key? key}) : super(key: key);

  @override
  State<WordList> createState() => _WordListState();
}

class _WordListState extends State<WordList> {
  List<Word> words = Hive.box<Word>('words').values.toList();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: FutureBuilder(
          future: Hive.openBox<Word>('words'),
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.done) {
              if (snapshot.hasError) {
                return Text(snapshot.error.toString());
              }
              return Padding(
                padding:
                    const EdgeInsets.symmetric(vertical: 5.0, horizontal: 10.0),
                child: ListView.separated(
                  itemCount: Hive.box<Word>('words').length,
                  itemBuilder: (context, index) {
                    return WordCard(wordData: words[index]);
                  },
                  separatorBuilder: (context, index) => const Divider(
                    height: 5,
                  ),
                ),
              );
            } else {
              return const CircularProgressIndicator();
            }
          }),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: const Text("Click"),
      ),
    );
  }

  @override
  void dispose() {
    super.dispose();
    Hive.box('words').close();
  }
}
