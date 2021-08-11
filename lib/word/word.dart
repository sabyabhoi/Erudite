import 'package:erudite/word/word_data.dart';
import 'package:flutter/material.dart';

class Word extends StatelessWidget {
  final WordData wordData;
  const Word({Key? key, required this.wordData}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: const Color.fromRGBO(255, 255, 238, 1.0),
        appBar: AppBar(
          foregroundColor: Colors.black,
          backgroundColor: const Color.fromRGBO(255, 255, 238, 1.0),
          elevation: 0,
        ),
        body: Padding(
          padding: const EdgeInsets.fromLTRB(50, 70, 50, 0),
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                Text(
                  wordData.word,
                  style: const TextStyle(
                      fontSize: 50, fontWeight: FontWeight.bold),
                ),
                Text(
                  wordData.type,
                  style: const TextStyle(
                      fontStyle: FontStyle.italic, fontSize: 16),
                ),
                const SizedBox(height: 30.0),
                Text(
                  wordData.defn,
                  textAlign: TextAlign.center,
                  style: const TextStyle(fontSize: 16),
                ),
                const SizedBox(height: 20.0),
                Text(
                  "\"${wordData.usage}\"",
                  textAlign: TextAlign.center,
                  style: const TextStyle(
                      fontSize: 16, fontStyle: FontStyle.italic),
                ),
                const SizedBox(height: 100.0),
                TextButton(
                  onPressed: () {},
                  child: const Padding(
                    padding:
                        EdgeInsets.symmetric(vertical: 2.0, horizontal: 14.0),
                    child: Text(
                      "Share",
                      style: TextStyle(fontSize: 18),
                    ),
                  ),
                  style: TextButton.styleFrom(
                    primary: Colors.white,
                    backgroundColor: Colors.indigo[800],
                    shape: const RoundedRectangleBorder(
                      borderRadius: BorderRadius.all(
                        Radius.circular(18),
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ));
  }
}
