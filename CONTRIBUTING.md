# Contributing a Verb Set

This repository (`doublej/claude-verbs`) is where verb set submissions happen.

- Use `claude-verbs-cli` only to install and test sets with `bunx`.
- Open set pull requests in this repository.

Spinner verbs are the animated status messages shown in Claude Code while it thinks.

## What makes a good set?

- **15–100 verbs** (aim for 50)
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

Copy the template inside `sets/`:

```sh
cp sets/_template.json sets/your-set-name.json
```

### 3. Fill in your verbs

Edit `sets/your-set-name.json`. The filename (without `.json`) must match the `name` field:

```json
{
  "$schema": "./schema.json",
  "name": "your-set-name",
  "displayName": "Your Set Name",
  "category": "entertainment",
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
- `category`: one of `entertainment`, `music`, `gaming`, `literature`, `science`, `tech`, `sport`, `culture`, `original`
- `language`: locale code like `en_US`, `nl_NL`, `de_DE`

Each set must contain 15–100 unique verbs (aim for 50).

### 4. Add author info (optional)

Add an `authorInfo` object to your set file to control how you appear on [claudeverbs.com](https://claudeverbs.com). If omitted, your profile is pulled from the GitHub API automatically.

```json
{
  "authorInfo": {
    "description": "One-sentence bio about yourself.",
    "projects": [
      {
        "name": "project-one",
        "url": "https://github.com/your-username/project-one",
        "description": "One sentence description."
      },
      {
        "name": "project-two",
        "url": "https://github.com/your-username/project-two",
        "description": "One sentence description."
      }
    ]
  }
}
```

- `description`: a one-sentence bio
- `projects`: 1–3 projects to showcase (name, URL, short description)

### 5. Validate

```sh
bun run validate.ts
```

### 6. Open a PR

```sh
git checkout -b add-your-set-name
git add sets/your-set-name.json
git commit -m "add: your-set-name verb set"
git push -u origin add-your-set-name
gh pr create
```

CI validates your set automatically.

## Rules

- Filename must match the `name` field (kebab-case, lowercase)
- `displayName` must be a human-readable title
- `category` must be one of: `entertainment`, `music`, `gaming`, `literature`, `science`, `tech`, `sport`, `culture`, `original`
- `github` must be your GitHub username (for attribution)
- `language` must be a valid locale code (example: `en_US`, `nl_NL`)
- 15–100 unique verbs per set (no duplicates, aim for 50)
- Set file must live in `sets/`
- Must pass `sets/schema.json` validation
- Keep content respectful; offensive sets are rejected
- `mode` should be `"replace"` or `"append"`

Browse existing sets at [claudeverbs.com](https://claudeverbs.com) for inspiration.
