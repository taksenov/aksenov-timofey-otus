// FIXME: Удалить после добавления основной функциолнальности, а так же тестов
export const sum = (a: number, b: number) => {
  return a + b;
};

/**
 * Функция расчета максимального списка рекомендаций
 *
 * @param {Array} matrix
 * @returns {Array} result
 */
const maxItemAssociation: (m: string[][]) => string[] = matrix => {
  console.log('INPUT:', matrix);

  return ['1', '2', '3'];
};

const matrix = [
  ['Пальто', 'Макароны', 'Пальто', 'Монитор', 'Сервиз'],
  ['Конструктор', 'Монитор', 'Сервиз', 'Ковер', 'Пальто'],
  ['Сервиз', 'Монитор', 'Монитор', 'Конструктор', 'Пальто'],
  ['Сервиз', 'Пальто', 'Макароны', 'Монитор', 'Седло'],
];

console.log(maxItemAssociation(matrix));
