import { compute } from './compute';
import {
  matrixRectStrs,
  matrixRectStrsRes,
  matrixRectNums1,
  matrixRectNums2,
  matrixRectNums12Res,
  matrixRectNums3,
  matrixRectNums4,
  matrixRectNums5,
  matrixRectNums6,
  matrixRectNums3456Res,
  matrixNonRectStrs,
  matrixNonRectStrsRes,
} from './@mocks';

describe('Numbers data in arrs', () => {
  test('Simple arrs', () => {
    expect(compute(matrixRectNums3)).toEqual(matrixRectNums3456Res);
    expect(compute(matrixRectNums4)).toEqual(matrixRectNums3456Res);
    expect(compute(matrixRectNums5)).toEqual(matrixRectNums3456Res);
    expect(compute(matrixRectNums6)).toEqual(matrixRectNums3456Res);
  });

  test('Сomplicated arrs', () => {
    expect(compute(matrixRectNums1)).toEqual(matrixRectNums12Res);
    expect(compute(matrixRectNums2)).toEqual(matrixRectNums12Res);
  });
});

describe('Strings data in arrs', () => {
  test('Simple strgs arrs', () => {
    expect(
      compute([
        ['a', 'b'],
        ['a', 'c'],
        ['d', 'e'],
        ['d', 'e'],
      ]),
    ).toEqual(['a', 'b', 'c']);
    expect(
      compute([
        ['a', 'b'],
        ['a', 'c'],
        ['d', 'e'],
        ['d', 'e'],
        ['d', 'e'],
      ]),
    ).toEqual(['d', 'e']);
  });

  test('Rectangle arrs', () => {
    expect(compute(matrixRectStrs)).toEqual(matrixRectStrsRes);
  });

  test('Non rectangle arrs', () => {
    expect(compute(matrixNonRectStrs)).toEqual(matrixNonRectStrsRes);
  });
});

describe('Сases with errors', () => {
  test('Non valid inputs: string', () => {
    try {
      compute('lol kek azaza');
    } catch (error) {
      expect(error.message).toEqual(
        'Входные данные должны быть массивом массивов (матрицей)',
      );
    }
  });

  test('Non valid inputs: empty arr', () => {
    try {
      compute([]);
    } catch (error) {
      expect(error.message).toEqual(
        'Входные данные должны быть массивом массивов (матрицей)',
      );
    }
  });

  test('Non valid inputs: "broken" arr', () => {
    try {
      compute(['lol kek azaza']);
    } catch (error) {
      expect(error.message).toEqual(
        'Входные данные должны быть массивом массивов (матрицей)',
      );
    }
  });

  test('Non valid inputs: "broken" arr var.2', () => {
    try {
      compute([[1, 2], [1, 3], [4, 5], 'lol kek azaza']);
    } catch (error) {
      expect(error.message).toEqual(
        'Входные данные должны быть массивом массивов (матрицей)',
      );
    }
  });

  test('Non valid inputs: degenerate matrix case', () => {
    try {
      compute([[1, 2], [1, 3], [null]]);
    } catch (error) {
      expect(error.message).toEqual('Вырожденные матрицы не поддерживаются');
    }
  });
});
