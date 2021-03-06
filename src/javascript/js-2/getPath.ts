/**
 * Функция поиска пути для элемента в DOM дереве
 *
 * @param {*} element
 * @return {string} path
 */
export const getPath: (el: HTMLElement | any) => string = element => {
  if (!element) {
    return '';
  }

  /**
   * Вспомогательная функция для получения свойств элемента
   *
   * @param {*} elem
   * @return {string} res
   */
  const getProps: (el: HTMLElement) => string = elem => {
    const tag = elem.tagName.toLowerCase();
    let res = tag;

    if (elem.id !== '') {
      res = `${res}#${elem.id}`;
    }
    if (elem.className !== '') {
      res = `${res}.${elem.className.trim().split(/\s+/).join('.')}`;
    }

    return res;
  };

  /**
   * Вспомогательная функция для получения номера элемента
   * в иерархии потомков
   *
   * @param {*} elem
   * @returns
   */
  const getHierarchyPosition: (el: HTMLElement) => string = elem => {
    let prevElem = elem.previousElementSibling;
    let count = 1;
    let res = '';

    while (prevElem) {
      ++count;
      prevElem = prevElem.previousElementSibling;
    }

    res = `:nth-child(${count})`;

    return res;
  };

  let tmpRes: Array<string> = [];

  /**
   * Рекурсивное сканирование DOM дерева
   *
   * @param {*} elem
   * @returns
   */
  const scanDOM: (el: HTMLElement | any) => string[] = elem => {
    if (elem === document.body) {
      tmpRes = [...tmpRes, 'body'];
      return tmpRes.reverse();
    }

    tmpRes = [...tmpRes, getProps(elem) + getHierarchyPosition(elem)];

    return scanDOM(elem.parentElement);
  };

  const path = scanDOM(element).join(' ');

  return path;
};
