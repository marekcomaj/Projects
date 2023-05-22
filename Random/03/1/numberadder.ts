function sum(num: number): number {
  if (num <= 1) {
    //base case
    return 1;
  } else {
    return num + sum(num - 1);
  }
}

console.log('Sum of your numbers is', sum(4));