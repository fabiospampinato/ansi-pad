
/* IMPORT */

import {SIDE_START, SPACE} from './constants';
import padSide from './pad_side';

/* MAIN */

const padStart = ( input: string, maxWidth: number, fillString: string = SPACE ): string => {

  return padSide ( input, maxWidth, fillString, SIDE_START );

};

/* EXPORT */

export default padStart;
