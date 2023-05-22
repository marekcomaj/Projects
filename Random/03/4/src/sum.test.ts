import{Sum} from './sum'

let sumTest = new Sum;

let listOne = [5,9,6,4,2,1]
let listTwo =[];
let listThree=[2];


test('test of listOne with multiple numbers', () => {
    expect(sumTest.sum(listOne)).toEqual(27);
  });

  test('test of listTwo with none numbers', () => {
    expect(sumTest.sum(listTwo)).toEqual(0);
  });

  test('test of listOne with one number', () => {
    expect(sumTest.sum(listThree)).toEqual(2);
  });