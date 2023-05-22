import { anagram } from "./anagram";

test('test if it\'s anagram', () => {
    expect(anagram('cars','racs')).toBe(true);
  });

  test('test if is it isn\'t anagram', () => {
    expect(anagram('true','false')).toBe(false);
  });