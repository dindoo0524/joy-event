# Commit Convention

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification.

## Format

```
<type>: <subject>

[optional body]

[optional footer]
```

## Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

## Examples

```
feat: add event registration form
fix: resolve calendar timezone issue
docs: update README with setup instructions
style: format code with prettier
refactor: extract validation logic to separate module
test: add unit tests for event service
chore: update dependencies
```

## Rules

1. Use lowercase for type and subject
2. Do not end the subject line with a period
3. Limit the subject line to 50 characters
4. Use the imperative mood in the subject line ("add" not "added")
5. Separate subject from body with a blank line
