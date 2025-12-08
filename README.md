# Advent of Code 2025 - TypeScript Solutions

A Node.js TypeScript console application for running Advent of Code 2025 solutions.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Usage

### List Available TypeScript Files

To see all available TypeScript files in the project:

```bash
npm run list
```

### Run a Specific TypeScript File

To run any TypeScript file dynamically:

```bash
npm run exec <filename>
```

**Examples:**

```bash
# Run a specific day's solution
npm run exec aoc1_1.ts

# Run the hello world example
npm run exec hw.ts
```

### Alternative: Run TypeScript Files Directly

You can also run any TypeScript file directly using:

```bash
npm run run-file <filename>
```

**Example:**

```bash
npm run run-file aoc1_1.ts
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run list` | List all available TypeScript files |
| `npm run exec <file>` | Run a TypeScript file using the runner |
| `npm run run-file <file>` | Run a TypeScript file directly with ts-node |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm run start` | Run the compiled JavaScript |
| `npm run dev` | Run hw.ts in development mode |
| `npm run clean` | Remove the dist folder |

## Project Structure

```
.
├── runner.ts       # Dynamic TypeScript file runner
├── helper.ts       # Helper utilities
├── hw.ts           # Hello World example
├── aoc*_*.ts       # Advent of Code solutions (day_part.ts)
├── package.json    # Project configuration
├── tsconfig.json   # TypeScript configuration
└── README.md       # This file
```

## Creating New Solutions

1. Create a new TypeScript file (e.g., `aoc2_1.ts` for Day 2, Part 1)
2. Write your solution
3. Run it with `npm run exec aoc2_1.ts`

## License

MIT
