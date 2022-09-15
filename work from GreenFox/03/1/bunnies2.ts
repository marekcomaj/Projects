function bunnies(num: number): number {
    if (num <= 0) {
        //base case
        return 0;
    } else if(num % 2 ===0) {
        return 3 + bunnies(num -1);
    }else{
        return 2 + bunnies(num -1);
    }
}


console.log('your bunnies have', bunnies(5), 'ears');