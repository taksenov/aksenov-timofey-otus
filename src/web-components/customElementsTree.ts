/* eslint-disable no-useless-constructor */
/* eslint-disable import/no-mutable-exports */

import { DATA_FROM_EXAMPLE } from './@mocks';

class myTree extends HTMLElement {
  constructor() {
    super();
  }
}

class myLeaf extends HTMLElement {
  constructor() {
    super();
  }
}

customElements.define('my-tree', myTree);
customElements.define('my-leaf', myLeaf);

// NB: export let по причине, того, что нужно проверить в тестах
export let htmlElement = document.createElement('div');

htmlElement.setAttribute('data-json', DATA_FROM_EXAMPLE);
document.body.appendChild(htmlElement);

// NB: export let по причине, того, что нужно проверить в тестах
export let shadowRoot = htmlElement.attachShadow({
  mode: 'open',
});

/**
 * Функция рендера custom elements
 * в shadow DOM
 *
 * @param {(HTMLElement | any)} htmlEl - элемент DOM в который будет произведен рендер
 * @param {ShadowRoot} shadowRoot - shadow DOM в котором будут созданы custom elements
 * @returns
 */
export const createElementsTree = (htmlEl: HTMLElement | any) => {
  let treeElements = JSON.parse(htmlEl.dataset.json);
  if (Object.keys(treeElements).length === 0) {
    return shadowRoot;
  }

  if (treeElements.id) {
    if (treeElements.items) {
      const localTree = document.createElement('my-tree');
      const [items] = treeElements.items;

      localTree.id = treeElements.id;
      localTree.dataset.json = JSON.stringify(items);

      shadowRoot.appendChild(localTree);
      createElementsTree(localTree);
    } else {
      const localLeaf = document.createElement('my-leaf');

      shadowRoot.appendChild(localLeaf);
      localLeaf.id = treeElements.id;
    }
  }
};
