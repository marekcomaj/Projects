function maximum(numbers: number[]): number {
    if (numbers.length === 0) {
        return 0;
    }

    const first = numbers[0];
    const rest = numbers.slice(1);

    const remainingMax = maximum(rest);


    if (first > remainingMax) {
        return first;
    } else {
        return remainingMax;
    }

}

let array = [12 ,5 ,81, 6 ,8 ,10, 999 ,20 ,65]

console.log(maximum(array))