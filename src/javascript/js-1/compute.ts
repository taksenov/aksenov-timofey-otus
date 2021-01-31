import pipe from './utils/pipe';
import rectanglify from './utils/rectanglify';
import maxItemAssociation from './utils/maxItemAssociation';

export const compute = pipe(rectanglify, maxItemAssociation);
