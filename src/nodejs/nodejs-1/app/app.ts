import * as fs from 'fs';

import Params from '../utils/Params';
import { INPUT_PARAM, HELP_PARAM } from '../utils/constants';
import tree from '../utils/tree';

const execParams = process.argv;
const checkParams = new Params();

// Инициализация и проверка параметров
const helpParam = checkParams.handleCheckHelpParam(HELP_PARAM, execParams);
if (helpParam.status === true) {
  throw new Error(`${helpParam.body}`);
}
const inputParam = checkParams.handleCheckWorkParams(INPUT_PARAM, execParams);
if (!inputParam.status) {
  throw new Error(
    `Не указан обязательный параметр "${INPUT_PARAM}". . Воспользуйтесь параметром "${HELP_PARAM}" для справки`,
  );
}
const inDir = inputParam?.body ?? '';

// Вызов функции сканирования дерева каталогов
tree(inDir).then(data => {
  console.log(`
  Получен успешный результат:
  ${JSON.stringify(data)}

  Набор данных сохранен во внешнее хранилище "./@mocks/result.json"

  Протестировать результат работы можно командой: "npm run test"
  `);

  // Сохранить результат во внешнее хранилище
  fs.writeFileSync('./@mocks/result.json', JSON.stringify(data));
});
