import APIHandler from '../src/APIs/api.js';

describe('postData', () => {
  test('API Post request does not return null', () => expect(APIHandler.postData()).not.toBeNull());
  test('API Post request returns an object', () => expect(APIHandler.postData()).toBeInstanceOf(Object));
  test('API Get request does not return null', () => expect(APIHandler.getData()).not.toBeNull());
  test('API Get request returns an object', () => expect(APIHandler.getData()).toBeInstanceOf(Object));
});