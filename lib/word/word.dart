import 'package:hive/hive.dart';

part 'word.g.dart';

@HiveType(typeId: 1)
class Word {
  @HiveField(0)
  String word;

  @HiveField(1)
  String type;

  @HiveField(2)
  String defn;

  @HiveField(3)
  String usage;

  Word(
      {required this.word,
      required this.type,
      required this.defn,
      required this.usage});
}
