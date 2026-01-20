# Frontend messaging app challenge Adrián Ruiz Householder

***This project depends on a REST API that was provided by a hiring process for Doodle and does not work standalone.***

## Initial Setup

To set up the project locally, follow these steps:

1. Clone the repository:
```bash
  git clone https://github.com/AdrianHouseholder/messaging-app-clone
````

2. Navigate to the project directory:
```bash
  cd messaging-app-clone
```

3. Install Bun if you don't have it already. You can find the installation instructions at [https://bun.sh/](https://bun.sh/).

If on Windows:

```bash
  powershell -c "irm bun.sh/install.ps1 | iex"
```

4. Install the dependencies:
```bash
  bun install
```

5. Start the development server:
```bash
  bun dev
```

## Linter / Formatter

To format my code, I've used Biome. You can run the formatter with the following command:

```bash
  bun biome format
```

## API & Environment Variables

Environment variables are stored in an .env.local file with the following configuration:

```
VITE_API_URL=
VITE_TOKEN=
VITE_AUTHOR=
```

- `VITE_API_URL`: The base URL for the API endpoints.
- `VITE_TOKEN`: The authentication token for API requests.
- `VITE_AUTHOR`: The author's name for message ownership.

