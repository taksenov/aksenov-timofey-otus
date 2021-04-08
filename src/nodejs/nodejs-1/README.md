# About

**Курс OTUS JavaScript Developer. Professional**

# Description

Студент: **Аксенов Тимофей (@taksenov)**

Задача tree - вывод списка файлов и папок файловой системы

Цель: В ходе выполнения ДЗ студент выведет список файлов и папок файловой
системы.

Напишите NodeJS скрипт tree для вывода списка файлов и папок файловой системы.
Результатом работы должен быть объект с массивами { files, folders }. Вызовы
файловой системы должны быть асинхронными. Скрипт принимает входной параметр -
путь до папки. Добавить возможность выполнять этот скрипт через команду npm run
tree -- path

Пример

```
foo/
├── bar/
│├── bar1.txt
│├── bar2.txt
│└── baz/
├── f1.txt
└── f2.txt
```

При вызове с путем foo/ скрипт должен вернуть структуру:

```json
{
  "files": ["foo/f1.txt", "foo/f2.txt", "foo/bar/bar1.txt", "foo/bar/bar2.txt"],
  "dirs": ["foo", "foo/bar", "foo/bar/baz"]
}
```

# How to

Работу функциональности можно проверить выполнив группу тестов, выполняющих
сравнение мок данных и динамически сформированного результата

Переключиться на ветку `nodejs-1`. Выполнить команды:

```sh
git checkout nodejs-1
cd ./src/nodejs/nodejs-1
npm i
```

Для получения справки:

```sh
npx ts-node ./app/app.ts --help
```

Команда запуска:

```sh
npx ts-node ./app/app.ts --input='./@mocks/inputDir'
```

после выполнения команды, будет сохранен результат во внешнее хранилище
`src/nodejs/nodejs-1/@mocks/result.json`

Тесты запускаются командой:

```sh
npm run test
```

Линтер запускается командой:

```sh
npm run lint
```

### Результаты работы тестов:

```sh
> aksenov-timofey-otus@0.1.4 test ./aksenov-timofey-otus
> jest

 PASS  src/web-components/customElementsTree.test.ts
  Should be
    ✓ render custom elements into the shadow DOM (22 ms)

 PASS  src/javascript/js-2/getPath.test.ts
  Should be
    ✓ Get element as the nothing class. Return empty string (19 ms)
    ✓ Get element as the not a valid selector. Return error message (1 ms)
    ✓ Get element as the a valid selector name (without "dot"). Return error message (2 ms)
    ✓ Get element as the nothing id. Return empty string (1 ms)
    ✓ Get element as the "null". Return empty string
    ✓ Get element as the valid id (inner2). Return path (2 ms)
    ✓ Get element as the valid id (inner998). Return path (1 ms)
    ✓ Get element as the valid id (inner999). Return path (4 ms)
    ✓ Get element as the valid id (as_in_example). Return path (1 ms)
    ✓ Get element as the valid css selector (.inner_block_998). Return path (2 ms)
    ✓ Get element as the valid css selector (.inner_block_999). Return path (1 ms)
    ✓ Get element as the "document.body". Return path (1 ms)

 PASS  src/javascript/js-1/compute.test.ts
  Numbers data in arrs
    ✓ Simple arrs (8 ms)
    ✓ Сomplicated arrs (2 ms)
  Strings data in arrs
    ✓ Simple strgs arrs (1 ms)
    ✓ Rectangle arrs (1 ms)
    ✓ Non rectangle arrs (1 ms)
  Сases with errors
    ✓ Non valid inputs: string (1 ms)
    ✓ Non valid inputs: empty arr
    ✓ Non valid inputs: "broken" arr
    ✓ Non valid inputs: "broken" arr var.2 (1 ms)
    ✓ Non valid inputs: degenerate matrix case (1 ms)

 PASS  src/nodejs/nodejs-1/tree.test.ts
  Should be
    ✓ softly "equal" data from result.json and MOCK_DATA__FROM_EXAMPLE (4 ms)

Test Suites: 4 passed, 4 total
Tests:       24 passed, 24 total
Snapshots:   0 total
Time:        14.148 s
Ran all test suites.
```

### Результаты работы линтера:

```sh
> aksenov-timofey-otus@0.1.4 lint ./aksenov-timofey-otus
> eslint -c .eslintrc --ignore-path .eslintignore src/

./aksenov-timofey-otus/src/javascript/js-1/utils/maxItemAssociation/maxItemAssociation.ts
  36:9  warning  Unexpected use of continue statement  no-continue
  42:9  warning  Unexpected use of continue statement  no-continue

./aksenov-timofey-otus/src/nodejs/nodejs-1/app/app.ts
  25:3  warning  Unexpected console statement  no-console

./aksenov-timofey-otus/src/nodejs/nodejs-1/utils/tree/tree.ts
  51:7  warning  Unexpected console statement  no-console

✖ 4 problems (0 errors, 4 warnings)
```
