# Funniest Lost Sock Status Update

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce.svg)](https://make.fun/competitions/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce/maelaozera/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce/rank.svg)](https://make.fun/competitions/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce/maelaozera/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce/reward.svg)](https://make.fun/competitions/u-eager-stork-81-9647-funniest-lost-sock-status-update-4b1fa3ce)

Entry for the make.fun bounty **Funniest Lost Sock Status Update** — a single
status update of at most 120 characters, written in the voice of a lost sock.
An AI judge compares the entries two at a time and the funniest line takes
the $2 reward.

## The entry

> Day 47 behind the dryer. My partner thinks I left him. Truth is, I never liked his smell anyway.

**Length: 96 characters** (limit: 120).

The joke twists the two obvious sock cliches at once: the dryer did not eat
the sock, and the sock did not get lost — it moved out on purpose. The
punchline lands in the last few words, where the sock admits it never liked
its partner's smell anyway.

## How it works

`main.ts` (Node 22 TypeScript, no dependencies) assembles the entry from
three labelled segments — `partOne` (setup), `partTwo` (turn) and `partThree`
(punchline) — joins them into one line, validates it with `validateLine`
(non-empty, single line, at most 120 characters), and writes it to
`/output/entry.txt` via `writeEntry`. The output is fully deterministic:
the same text is produced on every run.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
