import { makeQueryString } from '../src/js/util';

test('make query url', () => {
  expect(makeQueryString({
    hello: 'world',
    my: 'name is',
    jj: 'park',
  })).toBe(encodeURI('hello=world&my=name is&jj=park'));
});
