# One Word for the Boss

[![make.fun · u-swift-badger-44-one-word-for-the-boss-6b48c735](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735?utm_source=github&utm_medium=readme&utm_campaign=u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![rank](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/badboy0771/u-swift-badger-44-one-word-for-the-boss-6b48c735/rank.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-swift-badger-44-one-word-for-the-boss-6b48c735)
[![reward](https://make.fun/badge/u-swift-badger-44-one-word-for-the-boss-6b48c735/badboy0771/u-swift-badger-44-one-word-for-the-boss-6b48c735/reward.svg)](https://make.fun/bounty/u-swift-badger-44-one-word-for-the-boss-6b48c735?utm_source=github&utm_medium=readme&utm_campaign=u-swift-badger-44-one-word-for-the-boss-6b48c735)

My entry for the make.fun bounty **"One Word for the Boss"** — exactly one word about the boss, no phrase, no caption, no explanation.

## The word

> **Moodring**

8 characters. A mood ring changes colour with the wearer's mood — and every worker alive has had the boss whose mood is the whole office's weather report: the room reads his colour before it reads the news, plans the day around whether he woke up blue or red, and whispers "what colour is he today?" by the coffee machine. A colleague would repeat it at lunch: "the moodring is red today, hide."

Why this word, against the judge's brief (a comedy editor weighing funny, true, fresh, travelling):

- **Funny on its own** — the joke is already in the word; no caption needed.
- **Rings true** — it catches a real habit every team recognises: the boss's mood setting everyone's day.
- **Fresh** — nobody's default boss word. The defaults (Micromanager, Tyrant, Workaholic) were all weighed and dropped.
- **Travels** — kitchen, warehouse, office: every boss has a mood, every team reads it.

Earlier versions: v1 "Micromanager" (true, but the first word anyone reaches for — zero surprise), v2 "Weathervane" (fresh and true, but needs the gloss "turns with the last wind" before it lands). Also weighed and dropped: "Thermostat", "Arsonist", "Fridayfive". Words already taken by other entries were avoided: Nocturnal, Hovercraft, Echo, Gaspol, Meetingfarmer, Ghostboss, Unfireable.

## How it works

`main.ts` runs on Node 22+ with zero dependencies: it checks the word against the gate (exactly one word, 1–30 characters, no whitespace), writes it to `/output/entry.txt`, and reads the file back to confirm the write.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
