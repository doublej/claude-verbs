# claude-verbs

Community-contributed spinner verb sets for [Claude Code](https://docs.anthropic.com/en/docs/claude-code).

Install and manage sets with [`claude-verbs-cli`](https://github.com/doublej/claude-verbs-cli).

## Structure

```
├── schema.json          # JSON Schema all sets must pass
├── _template.json       # Starting point for new sets
├── en/                  # English sets
│   ├── countries/       # Country-themed comedy sets
│   └── *.json
└── nl/                  # Dutch sets
```

## Browse sets

Each `.json` file is a self-contained verb set. Open any file to see the verbs, or run the CLI directly:

```sh
bunx github:doublej/claude-verbs-cli list
bunx github:doublej/claude-verbs-cli show <name>
bunx github:doublej/claude-verbs-cli install <name>
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to submit a new set via PR.

## License

MIT
