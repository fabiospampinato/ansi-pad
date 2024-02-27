
/* IMPORT */

import {describe} from 'fava';
import {padStart, padEnd} from '../dist/index.js';

/* HELPERS */

const FOO = `\u001b[31mfoo\u001b[39m`;

/* MAIN */

describe ( 'ANSI Pad', it => {

  it ( 'can pad the start', t => {

    t.is ( padStart ( FOO, 1 ), FOO );
    t.is ( padStart ( FOO, 5 ), `  ${FOO}` );

    t.is ( padStart ( FOO, 2, '👨‍👩‍👧‍👦' ), `${FOO}` );
    t.is ( padStart ( FOO, 3, '👨‍👩‍👧‍👦' ), `${FOO}` );
    t.is ( padStart ( FOO, 4, '👨‍👩‍👧‍👦' ), `${FOO}` );
    t.is ( padStart ( FOO, 5, '👨‍👩‍👧‍👦' ), `👨‍👩‍👧‍👦${FOO}` );
    t.is ( padStart ( FOO, 6, '👨‍👩‍👧‍👦' ), `👨‍👩‍👧‍👦${FOO}` );
    t.is ( padStart ( FOO, 7, '👨‍👩‍👧‍👦' ), `👨‍👩‍👧‍👦👨‍👩‍👧‍👦${FOO}` );

  });

  it ( 'can pad the end', t => {

    t.is ( padEnd ( FOO, 1 ), FOO );
    t.is ( padEnd ( FOO, 5 ), `${FOO}  ` );

    t.is ( padEnd ( FOO, 2, '👨‍👩‍👧‍👦' ), `${FOO}` );
    t.is ( padEnd ( FOO, 3, '👨‍👩‍👧‍👦' ), `${FOO}` );
    t.is ( padEnd ( FOO, 4, '👨‍👩‍👧‍👦' ), `${FOO}` );
    t.is ( padEnd ( FOO, 5, '👨‍👩‍👧‍👦' ), `${FOO}👨‍👩‍👧‍👦` );
    t.is ( padEnd ( FOO, 6, '👨‍👩‍👧‍👦' ), `${FOO}👨‍👩‍👧‍👦` );
    t.is ( padEnd ( FOO, 7, '👨‍👩‍👧‍👦' ), `${FOO}👨‍👩‍👧‍👦👨‍👩‍👧‍👦` );

  });

});
