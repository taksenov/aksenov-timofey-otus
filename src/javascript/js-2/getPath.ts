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

  let tempRes: Array<string> = [];

  /**
   * Вспомогательная функция для получения свойств элемента
   *
   * @param {*} elem
   * @return {string} selector
   */
  const getProps: (el: HTMLElement) => string = elem => {
    const tag = elem.tagName.toLowerCase();
    let selector = tag;

    if (elem.id !== '') {
      selector = `${selector}#${elem.id}`;
    }
    if (elem.className !== '') {
      selector = `${selector}.${elem.className.trim().split(/\s+/).join('.')}`;
    }

    return selector;
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

  /**
   * Сканирование DOM дерева
   *
   * @param {*} elem
   * @returns
   */
  const scanDOM: (el: HTMLElement | any) => string[] = elem => {
    if (elem === document.body) {
      tempRes = [...tempRes, 'body'];
      return tempRes.reverse();
    }

    tempRes = [...tempRes, getProps(elem) + getHierarchyPosition(elem)];

    return scanDOM(elem.parentElement);
  };

  const path = scanDOM(element).join(' ');

  return path;
};
