function removeX(string:string): string{

    if(string.length == 0){
        return '';
    }

    let firstVar = string[0];
    let restVar = string.slice(1);
    let result = removeX(restVar);

    if(firstVar == 'x'){
        return '' + result;
    }else{
        return firstVar + result;
    }

}

console.log(removeX('xyabAxcxraxzy'))