module.exports = function zeros(expression) {
    let factorial = expression.split('*');

    let symbols = [];
    let arr = [];
    factorial.forEach(function (elem) {
        chooseFactorial.push(elem.split('!'));
    });

    let counterTwo = 0;
    let counterFive = 0;

    let splitedMultyply = [];
    chooseFactorial.forEach(function (tempArray) {
        let counter = tempArray.length === 2 ? 1 : 2;
        for (let i = +tempArray[0]; i >=2; i -= counter) {
            if (i % 2 ===0) counterTwo++;
            if (i % 5 === 0) counterFive++;
            if (i % 25 === 0) counterFive++;
        }
    });
    console.log('counterTwo: ', counterTwo);
    console.log('counterFive: ', counterFive);

    let zeroCount = (counterFive > counterTwo) ? counterTwo : counterFive;
    return zeroCount;
}
