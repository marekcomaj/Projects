
// - Create a variable named `firstList`
//   with the following content: `[1, 2, 3]`
// - Create a variable named `secondList`
//   with the following content: `[4, 5]`
// - Log "secondList is longer" to the console if `secondList` has more elements than
//   `firstList`
// - Otherwise log: "firstList is the longer one"


let firstList = [1, 2, 3];
let secondList = [4, 5];

if(secondList.length > firstList.length){
    console.log('Second list is longer');
}else{
    console.log('First list is longer');
}