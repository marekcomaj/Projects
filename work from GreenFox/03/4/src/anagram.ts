export function anagram(wordOne: string, wordTwo: string): boolean {
    if (wordOne.length !== wordTwo.length) {
        return false;
    }

    let wordOneList = wordOne.split('').sort().join('');
    let wordTwoList = wordTwo.split('').sort().join('');

    if (wordOneList !== wordTwoList) {
        return false;
    }
    return true;
}

anagram('cars', 'racs')
console.log(anagram('cars', 'racs'))
