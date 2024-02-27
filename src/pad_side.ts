
/* IMPORT */

import {SIDE_START} from './constants';
import fastStringWidth from 'fast-string-width';

/* MAIN */

const padSide = ( input: string, maxWidth: number, fillString: string, side: number ): string => {

  const inputWidth = fastStringWidth ( input );
  const padWidth = ( maxWidth - inputWidth );

  if ( padWidth <= 0 ) return input;

  const fillWidth = fastStringWidth ( fillString );
  const fillCount = Math.floor ( padWidth / fillWidth );
  const fill = fillString.repeat ( fillCount );

  return ( side === SIDE_START ) ? `${fill}${input}` : `${input}${fill}`;

};

/* EXPORT */

export default padSide;
