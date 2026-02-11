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
├── nl/                  # Dutch sets
└── united-states/       # US pop-culture sets
```

## Browse sets

Each `.json` file is a self-contained verb set. Open any file to see the verbs, or install the CLI and run:

```sh
claude-verbs list
claude-verbs show <name>
claude-verbs install <name>
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to submit a new set via PR.

## License

MIT
