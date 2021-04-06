import APIHandler from '../src/APIs/api';

describe('postData', () => {
  test('Post request does not give back a null value', () => expect(APIHandler.postData()).not.toBeNull());
  test('Post request gives back an object', () => expect(APIHandler.postData()).toBeInstanceOf(Object));
  test('Get request does not give back a null value', () => expect(APIHandler.getData()).not.toBeNull());
  test('Get request gives back an object', () => expect(APIHandler.getData()).toBeInstanceOf(Object));
});