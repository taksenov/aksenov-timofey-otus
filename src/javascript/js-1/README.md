Запуск:

```sh
npx ts-node ./src/javascript/js-1/compute.ts
```

Тесты:

```sh
npm run test
```

# About

**Курс OTUS JavaScript Developer. Professional**

# Description

Студент: **Аксенов Тимофей (@taksenov)**

Задача про список рекомендаций maxItemAssociation

# How to

Работу функциональности можно проверить выполнив группу тестов, учитываюшую как
правильные так и "сломанные" входные данные

Тесты запускаются командой:

```sh
npm run test
```

Линтер запускается командой:

```sh
npm run lint
```

# Notes

Некоторые моменты и мысли по данному ДЗ:

- долго (около 4 часов) искал в книгах применимость этой задачи к определенной
  группе алгоритмов;
- изначально думал, что задача на LCS;
- затем решил реализовать через поиск на прямоугольных матрицах;
- старался использовать не тривиальные алгоритмы, но скорее всего реализовал не
  оптимально;
- жду код ревью, чтобы увидеть советы по оптимальному решению.

### Результаты работы тестов:

```sh
> aksenov-timofey-otus@0.1.1 test ./aksenov-timofey-otus
> jest

 PASS  src/javascript/js-1/compute.test.ts
  Numbers data in arrs
    ✓ Simple arrs (3 ms)
    ✓ Сomplicated arrs (2 ms)
  Strings data in arrs
    ✓ Rectangle arrs
    ✓ Non rectangle arrs (1 ms)
  Сases with errors
    ✓ Non valid inputs: string
    ✓ Non valid inputs: empty arr
    ✓ Non valid inputs: "broken" arr
    ✓ Non valid inputs: "broken" arr var.2 (1 ms)
    ✓ Non valid inputs: degenerate matrix case

Test Suites: 1 passed, 1 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        3.028 s
Ran all test suites.
```

### Результаты работы линтера:

```sh
> aksenov-timofey-otus@0.1.1 lint ./aksenov-timofey-otus
> eslint -c .eslintrc --ignore-path .eslintignore src/


/Users/taksenov/work/my/aksenov-timofey-otus/src/javascript/js-1/utils/maxItemAssociation/maxItemAssociation.ts
  36:9  warning  Unexpected use of continue statement  no-continue
  42:9  warning  Unexpected use of continue statement  no-continue

✖ 2 problems (0 errors, 2 warnings)
```
