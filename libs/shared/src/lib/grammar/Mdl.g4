grammar Mdl;

file: (trebleStaff NEW_LINE bassStaff?) | trebleStaff | bassStaff;

trebleStaff: G_CLEF BAR_LINE bar*;
bassStaff: F_CLEF BAR_LINE bar*;

bar: pitch+ BAR_LINE;
pitch: NOTE PITCH_CLASS?;

G_CLEF: 't';
F_CLEF: 'b';
NEW_LINE: '\n';
BAR_LINE: '|';
NOTE: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
PITCH_CLASS: [0-7];
WS: [ \t] -> skip;