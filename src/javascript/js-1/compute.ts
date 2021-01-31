import pipe from './utils/pipe';
import rectanglify from './utils/rectanglify';
import maxItemAssociation from './utils/maxItemAssociation';

export const compute = pipe(rectanglify, maxItemAssociation);

// try {
//   compute(matrix4);
// } catch (error) {
//   if (error) {
//     console.log('Err 1 occured:', error.message);
//   }
// }
