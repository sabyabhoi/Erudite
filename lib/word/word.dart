import 'package:flutter/material.dart';

class Word extends StatelessWidget {
  const Word({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: const Color.fromRGBO(255, 255, 238, 1.0),
        body: Padding(
          padding: const EdgeInsets.fromLTRB(50, 70, 50, 0),
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                const Text(
                  "Erudite",
                  style: TextStyle(fontSize: 50, fontWeight: FontWeight.bold),
                ),
                const Text("Adjective",
                    style:
                        TextStyle(fontStyle: FontStyle.italic, fontSize: 16)),
                const SizedBox(height: 30.0),
                const Text("Having or showing great knowledge or learning.",
                    textAlign: TextAlign.center,
                    style: TextStyle(fontSize: 16)),
                const SizedBox(height: 100.0),
                TextButton(
                    onPressed: () {},
                    child: const Padding(
                      padding:
                          EdgeInsets.symmetric(vertical: 2.0, horizontal: 14.0),
                      child: Text("Save", style: TextStyle(fontSize: 18)),
                    ),
                    style: TextButton.styleFrom(
                        primary: Colors.white,
                        backgroundColor: Colors.indigo[800],
                        shape: const RoundedRectangleBorder(
                            borderRadius:
                                BorderRadius.all(Radius.circular(18)))))
              ],
            ),
          ),
        ));
  }
}