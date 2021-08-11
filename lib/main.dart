import 'package:flutter/material.dart';
import 'package:hive/hive.dart';
import 'package:hive_flutter/hive_flutter.dart';

import 'package:erudite/word/word_list.dart';
import 'package:erudite/word/word.dart';

void main() async {
  await Hive.initFlutter();
  Hive.registerAdapter(WordAdapter());
  await Hive.openBox<Word>('words');

  runApp(MaterialApp(
    initialRoute: '/',
    routes: {
      '/': (context) => const WordList(),
    },
    debugShowCheckedModeBanner: false,
  ));
}
