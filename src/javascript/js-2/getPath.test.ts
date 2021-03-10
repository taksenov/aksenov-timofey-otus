import { getPath } from './getPath';

import { HTML_TEST } from './@mocks';

document.body.innerHTML = HTML_TEST;

describe('Should be', () => {
  test('Get element as the nothing class. Return empty string', () => {
    expect(getPath(document.querySelector('.some_nothing_class'))).toEqual('');
  });

  test('Get element as the not a valid selector. Return error message', () => {
    try {
      expect(getPath(document.querySelector(''))).toEqual('');
    } catch (error) {
      expect(error.message).toEqual("'' is not a valid selector");
    }
  });

  test('Get element as the a valid selector name (without "dot"). Return error message', () => {
    try {
      expect(getPath(document.querySelector('inner_block_998'))).toEqual('');
    } catch (error) {
      expect(error.message).toEqual(
        "Cannot read property 'toLowerCase' of undefined",
      );
    }
  });

  test('Get element as the nothing id. Return empty string', () => {
    expect(getPath(document.getElementById('nothing_id'))).toEqual('');
  });

  test('Get element as the "null". Return empty string', () => {
    expect(getPath(null)).toEqual('');
  });

  test('Get element as the valid id (inner2). Return path', () => {
    expect(getPath(document.getElementById('inner2'))).toEqual(
      'body div#inner2.header_block.some_junk_class:nth-child(2)',
    );
  });

  test('Get element as the valid id (inner998). Return path', () => {
    expect(getPath(document.getElementById('inner998'))).toEqual(
      'body div#container-changed.container:nth-child(8) div#inner998.inner_block_998:nth-child(4)',
    );
  });

  test('Get element as the valid id (inner999). Return path', () => {
    expect(getPath(document.getElementById('inner999'))).toEqual(
      'body div#container-changed.container:nth-child(8) div#inner999.inner_block_999:nth-child(5)',
    );
  });

  test('Get element as the valid id (as_in_example). Return path', () => {
    expect(getPath(document.getElementById('as_in_example'))).toEqual(
      'body div#container-original.container:nth-child(4) div#inner1.inner_block.some_class_1.some_class_2.some_class_3.some_class_4:nth-child(1) ul:nth-child(1) li#as_in_example:nth-child(2)',
    );
  });

  test('Get element as the valid css selector (.inner_block_998). Return path', () => {
    expect(getPath(document.querySelector('.inner_block_998'))).toEqual(
      'body div#container-changed.container:nth-child(8) div#inner998.inner_block_998:nth-child(4)',
    );
  });

  test('Get element as the valid css selector (.inner_block_999). Return path', () => {
    expect(getPath(document.querySelector('.inner_block_999'))).toEqual(
      'body div#container-changed.container:nth-child(8) div#inner999.inner_block_999:nth-child(5)',
    );
  });

  test('Get element as the "document.body". Return path', () => {
    expect(getPath(document.body)).toEqual('body');
  });
});
