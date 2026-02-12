# Contributing a Verb Set

This repository (`doublej/claude-verbs`) is where verb set submissions happen.

- Use `claude-verbs-cli` only to install and test sets with `bunx`.
- Open set pull requests in this repository.

Spinner verbs are the animated status messages shown in Claude Code while it thinks.

## What makes a good set?

- **Exactly 50 verbs**
- **Thematically consistent**
- **Short phrases** (2-6 words works best)
- **Fun and creative**

## How to contribute

### 1. Fork and clone

```sh
gh repo fork doublej/claude-verbs --clone
cd claude-verbs
```

### 2. Create your set file

Copy the template into the repository root:

```sh
cp _template.json your-set-name.json
```

### 3. Fill in your verbs

Edit the file. The filename (without `.json`) must match the `name` field:

```json
{
  "$schema": "./schema.json",
  "name": "your-set-name",
  "displayName": "Your Set Name",
  "category": "tv-show",
  "description": "A short description of your theme",
  "author": "Your Name",
  "github": "your-github-username",
  "language": "en_US",
  "config": {
    "spinnerVerbs": {
      "mode": "replace",
      "verbs": [
        "First verb phrase",
        "Second verb phrase"
      ]
    }
  }
}
```

- `displayName`: human-readable title shown in listings
- `category`: one of `tv-show`, `movie`, `music`, `game`, `original`
- `language`: locale code like `en_US`, `nl_NL`, `de_DE`

Each set must contain exactly 50 unique verbs.

### 4. Prepare your author manifest (for PR description)

Include this in your PR description under a heading like `## Author Manifest`:

```json
{
  "githubProfile": "https://github.com/your-github-username",
  "genericDescription": "Independent builder working on dev tools and web apps.",
  "topProjects": [
    {
      "name": "project-one",
      "url": "https://github.com/your-github-username/project-one",
      "description": "One sentence description."
    },
    {
      "name": "project-two",
      "url": "https://github.com/your-github-username/project-two",
      "description": "One sentence description."
    },
    {
      "name": "project-three",
      "url": "https://github.com/your-github-username/project-three",
      "description": "One sentence description."
    }
  ]
}
```

The manifest should include:

- Your GitHub profile URL
- Your generic one-sentence bio/description
- Your top 3 projects with links and short descriptions

### 5. Validate

```sh
bun run validate.ts
```

### 6. Open a PR

```sh
git checkout -b add-your-set-name
git add your-set-name.json
git commit -m "add: your-set-name verb set"
git push -u origin add-your-set-name
gh pr create
```

CI validates your set automatically.

## Rules

- Filename must match the `name` field (kebab-case, lowercase)
- `displayName` must be a human-readable title
- `category` must be one of: `tv-show`, `movie`, `music`, `game`, `original`
- `github` must be your GitHub username (for attribution)
- `language` must be a valid locale code (example: `en_US`, `nl_NL`)
- Exactly 50 unique verbs per set (no duplicates)
- Must pass `schema.json` validation
- Include an author manifest in the PR description
- Keep content respectful; offensive sets are rejected
- `mode` should be `"replace"` or `"append"`

Browse existing sets at [claudeverbs.com](https://claudeverbs.com) for inspiration.
