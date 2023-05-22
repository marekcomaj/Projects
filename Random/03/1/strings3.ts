function addStar(string: string): string {

    if (string.length == 0) {
        return '';
    }

    let firstVar = string[0];
    let restVar = string.slice(1);
    let result = addStar(restVar);
    let star = '*'


    if (string.length > 1) {
        return   firstVar + star + result;
    } else {
        return firstVar + result;
    }

}

console.log(addStar('word'))