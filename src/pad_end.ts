
/* IMPORT */

import {SIDE_END, SPACE} from './constants';
import padSide from './pad_side';

/* MAIN */

const padEnd = ( input: string, maxWidth: number, fillString: string = SPACE ): string => {

  return padSide ( input, maxWidth, fillString, SIDE_END );

};

/* EXPORT */

export default padEnd;
