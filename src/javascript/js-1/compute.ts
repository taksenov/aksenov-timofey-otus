// FIXME: Удалить после добавления основной функциолнальности, а так же тестов
export const sum = (a: number, b: number) => {
  return a + b;
};

// TODO: Нужен простенький ФП pipe
// const pipe = (...fns: any[]) => (x: any) => fns.reduce((v, f) => f(v), x);

/**
 * Функция для "создания" прямоугольной матрицы из входгного массива массивов.
 *
 * @param {*} arr
 */
const rectanglify = (arr: any) => {
  if (!Array.isArray(arr)) {
    throw new Error('Входные данные должны быть массивом массивов (матрицей)');
  }

  let maxCols;

  const result = arr.map;

  console.log('rectanglify result=', result);
};

interface IMax {
  key: number | string;
  count: number;
  rowsIdx: Array<number>;
}

interface IMapValue {
  count: number;
  rowIdx: Array<number>;
}

/**
 * Функция расчета максимального списка рекомендаций
 *
 * @param {Array of Arrays} matrix
 * @returns {Array} result
 */
const maxItemAssociation: (
  m: Array<Array<string | number>>,
) => Array<string | number> = matrix => {
  const rows = matrix.length;
  const cols = 5;

  const myMap: Map<number | string, IMapValue> = new Map();

  // TODO: Добавить гвард на пустые значения из матрицы

  for (let col = 0; col < cols; col++) {
    myMap.set(matrix[0][col], { count: 1, rowIdx: [0] });
  }

  for (let row = 1; row < rows; row++) {
    let alreadyInCurrentRow: Array<string | number> = [];

    for (let col = 0; col < cols; col++) {
      if (!myMap.has(matrix[row][col])) {
        myMap.set(matrix[row][col], { count: 1, rowIdx: [row] });
        alreadyInCurrentRow = [...alreadyInCurrentRow, matrix[row][col]];
        continue;
      }

      if (
        myMap.has(matrix[row][col]) &&
        !alreadyInCurrentRow.includes(matrix[row][col])
      ) {
        if ((myMap.get(matrix[row][col])?.count ?? 0) <= row) {
          myMap.set(matrix[row][col], {
            count: (myMap.get(matrix[row][col])?.count ?? 0) + 1,
            rowIdx: [...(myMap.get(matrix[row][col])?.rowIdx ?? []), row],
          });
        }

        alreadyInCurrentRow = [...alreadyInCurrentRow, matrix[row][col]];
      }
    }
  }

  let max: IMax = {
    key: -1,
    count: 0,
    rowsIdx: [],
  };

  myMap.forEach((v: IMapValue, k: number | string) => {
    const { count } = max;
    const { count: c, rowIdx } = v;

    if (c > count) {
      max = { ...max, key: k, count: c, rowsIdx: [...rowIdx] };
    }
  });

  const { rowsIdx } = max;

  const result = rowsIdx
    .map((item: number) => {
      return matrix[item];
    })
    .flatMap((x: Array<string | number>) => x)
    .filter(
      (elem: string | number, pos: number, arr: Array<string | number>) =>
        arr.indexOf(elem) === pos,
    );

  return result;
};

const matrix = [
  ['Пальто', 'Макароны', 'Пальто', 'Монитор', 'Сервиз'],
  ['Конструктор', 'Монитор', 'Куртизанки', 'Ковер', 'Пальто'],
  ['Сервиз', 'Монитор', 'Монитор', 'Конструктор', 'Пальто'],
  ['Сервиз', 'Пальто', 'Макароны', 'Монитор', 'Седло'],
  ['Бухло', 'Гашиш', 'Куртизанки', 'Рок-н-ролл', 'Дом престарелых'],
];

const matrix2 = [
  [1, 2, 1, 4, 8],
  [3, 7, 8, 5, 1],
  [8, 7, 7, 3, 1],
  [8, 1, 2, 7, 9],
  [6, 6, 6, 6, 6],
  [8, 1, 2, 7, 9],
  [8, 1, 2, 7, 9],
  [8, 1, 6, 7, 9],
  [8, 1, 6, 7, 9],
  [8, 1, 6, 7, 9],
  [8, 1, 6, 7, 9],
  [8, 1, 6, 7, 9],
  [8, 1, 2, 7, 9],
  [4, 1, 2, 7, 9],
];

const matrix3 = [
  [1, 2],
  [1, 3],
  [4, 5],
];

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

console.log(maxItemAssociation(matrix));

// Res
// [1, 2, 4, 8, 3, 7, 5, 9, 6];
console.log(maxItemAssociation(matrix2));

// Res:
// [1, 2, 3];
console.log(maxItemAssociation(matrix3));

const matrix4 = [
  [
    'Пальто',
    'Макароны',
    'Пальто',
    'Монитор',
    'Сервиз',
    'Монитор',
    'Монитор',
    'Монитор',
  ],
  ['Конструктор', 'Монитор', 'Куртизанки', 'Ковер', 'Пальто'],
  [
    'Сервиз',
    'Монитор',
    'Монитор',
    'Конструктор',
    'Пальто',
    'Монитор',
    'Монитор',
    'Монитор',
  ],
  [
    'Сервиз',
    'Пальто',
    'Макароны',
    'Монитор',
    'Седло',
    'Монитор',
    'Монитор',
    'Монитор',
  ],
  ['Бухло', 'Гашиш', 'Куртизанки', 'Рок-н-ролл', 'Дом престарелых', 'Шишки'],
];

try {
  rectanglify(matrix4);
} catch (error) {
  if (error) {
    console.log('Err 1 occured:', error.message);
  }
}

try {
  rectanglify('lol kek azaza');
} catch (error) {
  if (error) {
    console.log('Err 2 occured:', error.message);
  }
}
