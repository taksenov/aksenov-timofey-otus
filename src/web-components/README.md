# About

**Курс OTUS JavaScript Developer. Professional**

# Description

Студент: **Аксенов Тимофей (@taksenov)**

Задача Custom Elements Tree

Цель: В ходе выполнения ДЗ студент создаст приложение для показа дерева. С
помощью Custom Elements создать приложение для показа дерева с помощью
компонентов my-tree и my-leaf. Компоненты должны получать данные о структуре
поддерева от родительского элемента. Используйте Shadow DOM при отрисовке
компонент. Можно также использовать для реализации Lit-Element, Lit-HTML или
Polymer.

Пример структуры:

```json
{
  "id": 1,
  "items": [
    {
      "id": 2,
      "items": [{ "id": 3 }]
    }
  ]
}
```

# How to

Работу функциональности можно проверить выполнив группу тестов, учитываюшую как
правильные так и "сломанные" входные данные

Переключиться на ветку `web-components`. Выполнить команды:

```sh
git checkout web-components
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

- до сих пор нахожусь в процессе смены работы, на текущий момент погружаюсь в
  новую для меня корпоративную парадигму. Немного пишу код в ДЗ сумбурный, как
  мне кажется;

### Результаты работы тестов:

```sh
> aksenov-timofey-otus@0.1.3 test ./aksenov-timofey-otus
> jest

 PASS  src/web-components/customElementsTree.test.ts (6.207 s)
  Should be
    ✓ render custom elements into the shadow DOM (25 ms)

 PASS  src/javascript/js-2/getPath.test.ts (12.114 s)
  Should be
    ✓ Get element as the nothing class. Return empty string (33 ms)
    ✓ Get element as the not a valid selector. Return error message (1 ms)
    ✓ Get element as the a valid selector name (without "dot"). Return error message (3 ms)
    ✓ Get element as the nothing id. Return empty string
    ✓ Get element as the "null". Return empty string (1 ms)
    ✓ Get element as the valid id (inner2). Return path (1 ms)
    ✓ Get element as the valid id (inner998). Return path (1 ms)
    ✓ Get element as the valid id (inner999). Return path (1 ms)
    ✓ Get element as the valid id (as_in_example). Return path (1 ms)
    ✓ Get element as the valid css selector (.inner_block_998). Return path (2 ms)
    ✓ Get element as the valid css selector (.inner_block_999). Return path (1 ms)
    ✓ Get element as the "document.body". Return path

 PASS  src/javascript/js-1/compute.test.ts (12.509 s)
  Numbers data in arrs
    ✓ Simple arrs (4 ms)
    ✓ Сomplicated arrs (1 ms)
  Strings data in arrs
    ✓ Simple strgs arrs
    ✓ Rectangle arrs (1 ms)
    ✓ Non rectangle arrs
  Сases with errors
    ✓ Non valid inputs: string
    ✓ Non valid inputs: empty arr
    ✓ Non valid inputs: "broken" arr
    ✓ Non valid inputs: "broken" arr var.2 (1 ms)
    ✓ Non valid inputs: degenerate matrix case

Test Suites: 3 passed, 3 total
Tests:       23 passed, 23 total
Snapshots:   0 total
Time:        23.712 s
Ran all test suites.
✨  Done in 33.84s.
```

### Результаты работы линтера:

```sh
> aksenov-timofey-otus@0.1.3 lint ./aksenov-timofey-otus
> eslint -c .eslintrc --ignore-path .eslintignore src/

./aksenov-timofey-otus/src/javascript/js-1/utils/maxItemAssociation/maxItemAssociation.ts
  36:9  warning  Unexpected use of continue statement  no-continue
  42:9  warning  Unexpected use of continue statement  no-continue

✖ 2 problems (0 errors, 2 warnings)
```
