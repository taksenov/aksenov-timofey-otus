export interface IRectanglify {
  matrix: Array<Array<string | number | null>>;
  rows: number;
  cols: number;
}

/**
 * Функция для "создания" прямоугольной матрицы из входгного массива массивов.
 *
 * @param {*} arr
 */
const rectanglify: (arr: any) => IRectanglify = (arr: any) => {
  if (!Array.isArray(arr)) {
    throw new Error('Входные данные должны быть массивом массивов (матрицей)');
  }

  let maxCols = 0;

  const matrix = arr
    .map((item: any) => {
      if (!Array.isArray(item)) {
        throw new Error(
          'Входные данные должны быть массивом массивов (матрицей)',
        );
      }

      const len = item.length;

      if (len > maxCols) {
        maxCols = len;
      }

      return item;
    })
    .map((item: any) => {
      if (maxCols === 0) {
        throw new Error('Вырожденные матрицы не поддерживаются');
      }

      return [
        ...item,
        ...[...new Array(maxCols - item.length)].map(() => null),
      ];
    });

  const result = { matrix, rows: matrix.length, cols: maxCols };

  return result;
};

export default rectanglify;
