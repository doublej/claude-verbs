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
└── sets/
    ├── schema.json      # JSON Schema all sets must pass
    ├── _template.json   # Starting point for new sets
    ├── index.json       # Set index metadata
    └── *.json           # Verb set files (flat, no subdirectories)
```

Each set includes `language` (locale code), `displayName` (human-readable title), and `category` (`entertainment`, `music`, `gaming`, `literature`, `science`, `tech`, `sport`, `culture`, or `original`).

## Sets

| Name | Display Name | Language | Category |
|------|-------------|----------|----------|
| `au-kath-and-kim` | Kath & Kim | en_AU | entertainment |
| `br-chaves` | Chaves | pt_BR | entertainment |
| `ca-letterkenny` | Letterkenny | en_CA | entertainment |
| `de-dinner-for-one` | Dinner for One | de_DE | entertainment |
| `es-camera-cafe` | Camera Cafe | es_ES | entertainment |
| `fr-kaamelott` | Kaamelott | fr_FR | entertainment |
| `idiot` | Idiot | en_GB | original |
| `in-hera-pheri` | Hera Pheri | hi_IN | entertainment |
| `jiskefet` | Jiskefet | nl_NL | entertainment |
| `jp-gaki-no-tsukai` | Gaki no Tsukai | ja_JP | entertainment |
| `kr-infinite-challenge` | Infinite Challenge | ko_KR | entertainment |
| `multi-lul` | Multi Lansen Lansen Lul | nl_NL | entertainment |
| `rundfunk` | Rundfunk | nl_NL | entertainment |
| `telekids` | Telekids | nl_NL | entertainment |
| `uk-peep-show` | Peep Show | en_GB | entertainment |
| `us-billie-eilish` | Billie Eilish | en_US | music |
| `us-the-office` | The Office | en_US | entertainment |
| `us-breaking-bad` | Breaking Bad | en_US | entertainment |
| `us-portal` | Portal | en_US | gaming |
| `us-pulp-fiction` | Pulp Fiction | en_US | entertainment |
| `us-snl` | Saturday Night Live | en_US | entertainment |

## License

MIT
