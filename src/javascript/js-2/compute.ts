function getPath(node, selector) {
  // обвязка для функции getPath
  let result = []; // массив с узлами
  let sortResult; // отсортированный массив с узлами
  let resultObj = {}; // возвращаемый объект со статистикой по всем узлам
  let str = '';

  /**
   * рекурсивное сканирование дерева и вынесение "чистых" узлов в массив
   * @param  {DOM-объект} node передаваемый в функцию DOM-объект,
   * внутри которого в массив выписываются все узлы
   * @return нет. Через замыкание меняется массив result
   */
  function scanDOMAndWriteInArr(node) {
    if (node) {
      let child = node.firstChild;

      console.log('CHILD=', node.firstChild);

      let runnning = true;
      let gotIt = false;

      while (child && runnning) {
        if (child.nodeType === Node.ELEMENT_NODE) {
          if (!gotIt) {
            result.push(child.tagName.toLowerCase());
          }

          if (child.classList.length !== 0) {
            for (let i = 0; i < child.classList.length; i++) {
              if (child.classList[i] === selector) {
                result.push(
                  `${child.tagName.toLowerCase()}.CLASS_IS=${child.classList[
                    i
                  ].toLowerCase()}`,
                );

                gotIt = true;
                runnning = false;
              }
            }
          }
          if (!gotIt) {
            scanDOMAndWriteInArr(child);
          }
        }
        child = child.nextSibling;
      }
    }
  }

  // Инициализирующий вызов функции сканирования DOM дерева и записи "чистых" узлов в массив
  scanDOMAndWriteInArr(node);

  // обработка массива "чистых" узлов и запись статистики в результирующий объект
  // На всякий случай отсортирую массив, чтобы в будущем можно было применить алгоритмы поиска
  // sortResult = result.slice().sort();
  sortResult = result;

  for (let i = 0; i < sortResult.length; i++) {
    let stringForStatCount = sortResult[i];

    if (resultObj[stringForStatCount] === undefined) {
      // запомнить строку в виде свойства объекта
      resultObj[stringForStatCount] = true;
      // Проинициализируем счетчик вхождений этой строки в результирующий объект
      resultObj[stringForStatCount] = 1;
    } else {
      resultObj[stringForStatCount] += 1;
    }
  }

  return [resultObj, result];
  // return result;
} // getPath

// сканируем DOM начиная с <HTML>
// header-projects
console.log(getPath(document.documentElement, 'LOL_KEK_AZAZA'));
