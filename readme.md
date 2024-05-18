# ANSI Pad

A couple tiny functions for padding a string that may contain ANSI escape sequences.

## Install

```sh
npm install --save ansi-pad
```

## Usage

```ts
import {padStart, padEnd} from 'ansi-pad';

// Let's pad a string in a width-aware way, handling ANSI escapes, emojis etc. specially

const FOO = `\u001b[31mFOO\u001b[39m`;

padStart ( FOO, 2, '👨‍👩‍👧‍👦' ) // => `${FOO}`
padStart ( FOO, 5, '👨‍👩‍👧‍👦' ) // => `👨‍👩‍👧‍👦${FOO}`
padStart ( FOO, 7, '👨‍👩‍👧‍👦' ) // => `👨‍👩‍👧‍👦👨‍👩‍👧‍👦${FOO}`

padEnd ( FOO, 2, '👨‍👩‍👧‍👦' ) // => `${FOO}`
padEnd ( FOO, 5, '👨‍👩‍👧‍👦' ) // => `${FOO}👨‍👩‍👧‍👦`
padEnd ( FOO, 7, '👨‍👩‍👧‍👦' ) // => `${FOO}👨‍👩‍👧‍👦👨‍👩‍👧‍👦`
```

## License

MIT © Fabio Spampinato
