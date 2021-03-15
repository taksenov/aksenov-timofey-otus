import {
  createElementsTree,
  htmlElement,
  shadowRoot,
} from './customElementsTree';

describe('Should be', () => {
  test('render custom elements into the shadow DOM', () => {
    // Проверить, что shadowRoot пустой
    expect(shadowRoot.hasChildNodes()).toEqual(false);
    expect(shadowRoot.childElementCount).toEqual(0);

    createElementsTree(htmlElement);

    const [chNode1, chNode2, chNode3, chNode4] = shadowRoot.childNodes;

    // Отрендерилось, ли что-то в shadowRoot
    expect(shadowRoot.hasChildNodes()).toEqual(true);
    expect(shadowRoot.childElementCount).toEqual(3);

    // Элемент 1
    expect(chNode1.nodeName).toEqual('MY-TREE');
    expect(chNode1.nodeType).toEqual(1);

    // Элемент 2
    expect(chNode2.nodeName).toEqual('MY-TREE');
    expect(chNode2.nodeType).toEqual(1);

    // Элемент 3
    expect(chNode3.nodeName).toEqual('MY-LEAF');
    expect(chNode3.nodeType).toEqual(1);

    // Элемент 4 (проверить, что больше 3х элеменот ничего нет)
    expect(chNode4?.nodeName).toEqual(undefined);
    expect(chNode4?.nodeType).toEqual(undefined);
    expect(chNode4).toEqual(undefined);
  });
});
