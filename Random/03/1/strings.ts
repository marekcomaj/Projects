function swapXY(string:string): string{

    if(string.length == 0){
        return '';
    }

    let firstVar = string[0];
    let restVar = string.slice(1);
    let result = swapXY(restVar);

    if(firstVar == 'x'){
        return 'y' + result;
    }else{
        return firstVar + result;
    }

}

console.log(swapXY('xyabxc'))