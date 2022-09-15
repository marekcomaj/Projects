// Create a function that divides number 10
// by a number that's passed as a paramater and prints the result.
// It should print "fail" if the parameter is 0


function devide(number: number) {

    let ten = 10;

    try {
        if (number === 0) {
            throw new SyntaxError('can\'t devide with 0');
        } console.log(ten / number);
    } catch (SyntaxError) {
        console.log('can\'t devide with 0')
    }

}
devide(2);
devide(0);
devide(4);