grammar Mdl;

file: trebleStaff EOF;

trebleStaff: TREBLE_CLEF BAR_LINE bar*;

bar: pitch+ BAR_LINE;
pitch: NOTE PITCH_CLASS;

TREBLE_CLEF: 'treble_clef';
BAR_LINE: '|';
NOTE: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
PITCH_CLASS: [0-7];
WS: [ \t] -> skip;