function powerN(num: number, power: number): number {
  if (power === 0) {
    //base case
    return 1;
  } else {
    return num * powerN(num, power - 1);
  }
}

console.log('Sum of your numbers is', powerN(3, 2));