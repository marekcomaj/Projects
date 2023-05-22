// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the value of the fourth element (8) to 4 with the `.map` method 
// -  Print the fourth element as a test

let numbers= [1, 2, 3, 8, 5, 6]

let array = numbers.map(function(value: number, index: number){
    if (index === 3){
        return 4}else{
            return value;}
    
}
)



console.log(array[3])