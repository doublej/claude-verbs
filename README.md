# claude-verbs

Community-contributed spinner verb sets for [Claude Code](https://docs.anthropic.com/en/docs/claude-code).

`claude-verbs-cli` is the install tool. Use `bunx` commands to list and install sets:

```sh
bunx github:doublej/claude-verbs-cli list
bunx github:doublej/claude-verbs-cli install <name>
```

Browse sets at [claudeverbs.com](https://claudeverbs.com).

## Submission Home

This repository is the only place to submit new verb sets.

- Submit via pull request to [doublej/claude-verbs](https://github.com/doublej/claude-verbs)
- Follow [CONTRIBUTING.md](CONTRIBUTING.md)
- Include the author manifest in your PR description (GitHub profile, top 3 projects, generic description)

## Structure

```
├── schema.json          # JSON Schema all sets must pass
├── _template.json       # Starting point for new sets
└── *.json               # Verb set files (flat, no subdirectories)
```

Each set includes `language` (locale code), `displayName` (human-readable title), and `category` (`tv-show`, `movie`, `music`, `game`, or `original`).

## Sets

| Name | Display Name | Language | Category |
|------|-------------|----------|----------|
| `au-kath-and-kim` | Kath & Kim | en_AU | tv-show |
| `br-chaves` | Chaves | pt_BR | tv-show |
| `ca-letterkenny` | Letterkenny | en_CA | tv-show |
| `de-dinner-for-one` | Dinner for One | de_DE | tv-show |
| `es-camera-cafe` | Camera Cafe | es_ES | tv-show |
| `fr-kaamelott` | Kaamelott | fr_FR | tv-show |
| `idiot` | Idiot | en_GB | original |
| `in-hera-pheri` | Hera Pheri | hi_IN | movie |
| `jiskefet` | Jiskefet | nl_NL | tv-show |
| `jp-gaki-no-tsukai` | Gaki no Tsukai | ja_JP | tv-show |
| `kr-infinite-challenge` | Infinite Challenge | ko_KR | tv-show |
| `multi-lul` | Multi Lansen Lansen Lul | nl_NL | tv-show |
| `rundfunk` | Rundfunk | nl_NL | tv-show |
| `telekids` | Telekids | nl_NL | tv-show |
| `uk-peep-show` | Peep Show | en_GB | tv-show |
| `us-billie-eilish` | Billie Eilish | en_US | music |
| `us-breaking-bad` | Breaking Bad | en_US | tv-show |
| `us-portal` | Portal | en_US | game |
| `us-pulp-fiction` | Pulp Fiction | en_US | movie |
| `us-snl` | Saturday Night Live | en_US | tv-show |

## License

MIT
