# Курс OTUS JavaScript Developer. Professional

## Студент: Аксенов Тимофей (@taksenov)

Используется `npm`, `ts-node`

Команды запуска:

```sh
npm i
```

```sh
npx ts-node ./src/**/*.ts
```

## Разработка

### Commits

- Разработка: для унификации текста коммитов взяты теги из библиотеки
  [commitizen](http://commitizen.github.io/cz-cli/)

```
feat:         A new feature
fix:          A bug fix
docs:         Documentation only changes
style:        Changes that do not affect the meaning of the code
              (white-space, formatting, missing semi-colons, etc)
prettier:     ---//---
code-style:   ---//---
refactor:     A code change that neither fixes a bug or adds a feature
perf:         A code change that improves performance
test:         Adding tests, update tests, etc
chore:        Changes to the build process or auxiliary tools and libs
db:           Actions with Mongo DataBase
```

- В будущем можно попробовать автоматизировать чейндж логи и версионирование
  через данную библиотеку.
- В процессе разработки можно дополнять теги коммитов.

### Pre-commit hook with Husky

В репозиторий добавлен Pre-commit hook, при выполнении команды:

`git commit -m 'Some commit info'`

Произойдет следующее: `husky` заглянет внутрь файла: `./huskyrc.js` и выполнит
из него команды:

```sh
npm run test
npm run lint
```

_Возможны ситуации_ когда нужно быстро закинуть что-то в коммит или через коммит
нужно отправить функциональность не требующую проверок тест-раннером и линтером,
тогда можно использовать команду игнорирующую запуск пре-коммит хука:

`git commit -n -m 'Some commit info'`
