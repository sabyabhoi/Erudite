import 'package:flutter/material.dart';
import 'package:erudite/word/word_list.dart';

void main() {
  runApp(MaterialApp(
    initialRoute: '/',
    routes: {
      '/': (context) => const WordList(),
    },
    debugShowCheckedModeBanner: false,
  ));
}
