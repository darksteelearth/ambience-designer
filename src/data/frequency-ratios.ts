// Frequency ratios based on the equal temperament tuning system:
const C = 1;
const Db = 2 ** (1/12);
const D = 2 ** (2/12);
const Eb = 2 ** (3/12);
const E = 2 ** (4/12);
const F = 2 ** (5/12);
const Gb = 2 ** (6/12);
const G = 2 ** (7/12);
const Ab = 2 ** (8/12);
const A = 2 ** (9/12);
const Bb = 2 ** (10/12);
const B = 2 ** (11/12);

export const pentatonicScale = [C, D, E, G, A, C * 2, D * 2, E * 2, G * 2, A * 2, C * 4];
export const minorSeventh = [C, Eb, G, Bb, C];
export const minorSeventh2Oct = [C, Eb, G, Bb, C * 2, Eb * 2, G * 2, Bb * 2, C * 4];
