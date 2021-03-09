# About

**Курс OTUS JavaScript Developer. Professional**

# Description

Студент: **Аксенов Тимофей (@taksenov)**

Задача getPath - поиск уникального селектора

Цель: В ходе выполнения ДЗ студент напишет алгоритм и функцию `getPath()`,
находяющую уникальный css-селектор для элемента в документе.

Написать алгоритм и функцию `getPath()`, находяющую уникальный css-селектор для
элемента в документе.

Уникальный селектор может быть использован `document.querySelector()` и
возвращать исходный элемент.

Так чтобы `document.querySelectorAll()`, вызванный с этим селектором, не должен
находить никаких элементов, кроме исходного.

```javascript
$0; // HTMLElement
getPath($0); // => "body div.someclass ul li:first-child"
```

Использовать TDD, добавить юнит тесты для функции

# How to

Работу функциональности можно проверить выполнив группу тестов, учитываюшую как
правильные так и "сломанные" входные данные

Переключиться на ветку `javascript-2`. Выполнить команды:

```sh
git checkout javascript-2
npm i
```

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

- менял работу и попал в небольшое "окно с лагом" по выполнению ДЗ, оспаривать
  оценки сниженные за то, что сдано не вовремя не буду. По сути сам виноват;
- как уже отметили в чате Slack, очень запутанное описание ДЗ, долго вникал в
  текст, изначально не правильно понял описание и пошел по неверному пути.

### Результаты работы тестов:

```sh
> aksenov-timofey-otus@0.1.2 test ./aksenov-timofey-otus
> jest

 PASS  src/javascript/js-1/compute.test.ts
  Numbers data in arrs
    ✓ Simple arrs (5 ms)
    ✓ Сomplicated arrs (2 ms)
  Strings data in arrs
    ✓ Simple strgs arrs (1 ms)
    ✓ Rectangle arrs (1 ms)
    ✓ Non rectangle arrs
  Сases with errors
    ✓ Non valid inputs: string (1 ms)
    ✓ Non valid inputs: empty arr
    ✓ Non valid inputs: "broken" arr (1 ms)
    ✓ Non valid inputs: "broken" arr var.2
    ✓ Non valid inputs: degenerate matrix case (1 ms)

 PASS  src/javascript/js-2/getPath.test.ts
  Should be
    ✓ Get element as the nothing class. Return empty string (14 ms)
    ✓ Get element as the not a valid selector. Return error message (1 ms)
    ✓ Get element as the a valid selector name (without "dot"). Return error message (3 ms)
    ✓ Get element as the nothing id. Return empty string
    ✓ Get element as the "null". Return empty string (1 ms)
    ✓ Get element as the valid id (inner2). Return path (1 ms)
    ✓ Get element as the valid id (inner998). Return path (1 ms)
    ✓ Get element as the valid id (inner999). Return path
    ✓ Get element as the valid id (as_in_example). Return path (1 ms)
    ✓ Get element as the valid css selector (.inner_block_998). Return path (5 ms)
    ✓ Get element as the valid css selector (.inner_block_999). Return path (2 ms)
    ✓ Get element as the "document.body". Return path

Test Suites: 2 passed, 2 total
Tests:       22 passed, 22 total
Snapshots:   0 total
Time:        12.213 s
Ran all test suites.
```

### Результаты работы линтера:

```sh
> aksenov-timofey-otus@0.1.2 lint ./aksenov-timofey-otus
> eslint -c .eslintrc --ignore-path .eslintignore src/


/Users/taksenov/work/my/aksenov-timofey-otus/src/javascript/js-1/utils/maxItemAssociation/maxItemAssociation.ts
  36:9  warning  Unexpected use of continue statement  no-continue
  42:9  warning  Unexpected use of continue statement  no-continue

✖ 2 problems (0 errors, 2 warnings)
```
