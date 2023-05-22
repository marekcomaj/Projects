import { Apples } from "./apples";

let apple = new Apples

test('write apple', () => {
    expect(apple.getApple()).toEqual('appe');
  });

  test('write apple second time', () => {
    expect(apple.getApple()).toEqual('apple');
  });