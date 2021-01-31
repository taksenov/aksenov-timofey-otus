import { IRectanglify } from '../rectanglify';

export interface IMax {
  key: number | string | null;
  count: number;
  rowsIdx: Array<number>;
}

export interface IMapValue {
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
  r: IRectanglify,
) => Array<string | number | null> = rec => {
  const { matrix, rows, cols } = rec;

  const myMap: Map<number | string | null, IMapValue> = new Map();

  for (let col = 0; col < cols; col++) {
    myMap.set(matrix[0][col], { count: 1, rowIdx: [0] });
  }

  for (let row = 1; row < rows; row++) {
    let alreadyInCurrentRow: Array<any> = [];

    for (let col = 0; col < cols; col++) {
      if (!matrix[row][col]) {
        continue;
      }

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

  myMap.forEach((v: IMapValue, k: number | string | null) => {
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
    .flatMap((x: Array<string | number | null>) => x)
    .filter(
      (
        elem: string | number | null,
        pos: number,
        arr: Array<string | number | null>,
      ) => arr.indexOf(elem) === pos,
    )
    .filter(Boolean);

  return result;
};

export default maxItemAssociation;
