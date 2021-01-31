/* eslint-disable no-multi-spaces */
import pipe from './utils/pipe';
import rectanglify from './utils/rectanglify';
import maxItemAssociation from './utils/maxItemAssociation';

// FIXME: Удалить после добавления основной функциолнальности, а так же тестов
export const sum = (a: number, b: number) => {
  return a + b;
};

// const matrix = [
//   ['Пальто', 'Макароны', 'Пальто', 'Монитор', 'Сервиз'],
//   ['Конструктор', 'Монитор', 'Куртизанки', 'Ковер', 'Пальто'],
//   ['Сервиз', 'Монитор', 'Монитор', 'Конструктор', 'Пальто'],
//   ['Сервиз', 'Пальто', 'Макароны', 'Монитор', 'Седло'],
//   ['Бухло', 'Гашиш', 'Куртизанки', 'Рок-н-ролл', 'Дом престарелых'],
// ];

// const matrix2 = [
//   [1, 2, 1, 4, 8],
//   [3, 7, 8, 5, 1],
//   [8, 7, 7, 3, 1],
//   [8, 1, 2, 7, 9],
//   [6, 6, 6, 6, 6],
//   [8, 1, 2, 7, 9],
//   [8, 1, 2, 7, 9],
//   [8, 1, 6, 7, 9],
//   [8, 1, 6, 7, 9],
//   [8, 1, 6, 7, 9],
//   [8, 1, 6, 7, 9],
//   [8, 1, 6, 7, 9],
//   [8, 1, 2, 7, 9],
//   [4, 1, 2, 7, 9],
// ];

// const matrix2_1 = [
//   [6, 6, 6, 6, 6],
//   [1, 2, 1, 4, 8],
//   [3, 7, 8, 5, 1],
//   [8, 7, 7, 3, 1],
//   [8, 1, 2, 7, 9],
//   [8, 1, 2, 7, 9],
//   [8, 1, 2, 7, 9],
//   [8, 1, 6, 7, 9],
//   [8, 1, 6, 7, 9],
//   [8, 1, 6, 7, 9],
//   [8, 1, 6, 7, 9],
//   [8, 1, 6, 7, 9],
//   [8, 1, 2, 7, 9],
//   [4, 1, 2, 7, 9],
// ];

// const matrix3 = [
//   [1, 2],
//   [1, 3],
//   [4, 5],
// ];

// const matrix3_1 = [
//   [4, 5],
//   [1, 2],
//   [1, 3],
// ];

// const matrix3_2 = [
//   [1, 2],
//   [4, 5],
//   [1, 3],
// ];

// const matrix3_3 = [
//   [4, 5],
//   [1, 3],
//   [1, 2],
// ];

// Res:
// [
//   'Пальто',
//   'Макароны',
//   'Монитор',
//   'Сервиз',
//   'Конструктор',
//   'Куртизанки',
//   'Ковер',
//   'Седло',
// ];

// console.log(maxItemAssociation(matrix));

// // Res
// // [1, 2, 4, 8, 3, 7, 5, 9, 6];
// console.log(maxItemAssociation(matrix2));
// console.log(maxItemAssociation(matrix2_1));

// Res:
// [1, 2, 3];
// console.log(maxItemAssociation(matrix3));
// console.log(maxItemAssociation(matrix3_1));
// console.log(maxItemAssociation(matrix3_2));
// console.log(maxItemAssociation(matrix3_3));

// prettier-ignore
const matrix4 = [
  ['Пальто',      'Макароны', 'Пальто',     'Монитор',     'Сервиз',          'Монитор', 'Монитор', 'Монитор'],
  ['Конструктор', 'Монитор',  'Куртизанки', 'Ковер',       'Пальто'],
  ['Сервиз',      'Монитор',  'Монитор',    'Конструктор', 'Пальто',          'Монитор', 'Монитор', 'Монитор'],
  ['Сервиз',      'Пальто',   'Макароны',   'Монитор',     'Седло',           'Монитор', 'Монитор', 'Монитор'],
  ['Бухло',       'Гашиш',    'Куртизанки', 'Рок-н-ролл',  'Дом престарелых', 'Шишки'],
];

export const compute = pipe(rectanglify, maxItemAssociation);

try {
  compute(matrix4);
} catch (error) {
  if (error) {
    console.log('Err 1 occured:', error.message);
  }
}

// try {
//   rectanglify('lol kek azaza');
// } catch (error) {
//   if (error) {
//     console.log('Err 2 occured:', error.message);
//   }
// }
