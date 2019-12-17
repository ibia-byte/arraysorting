
function arraySort(list) {
    let obj = {}, evenNumbers = [], oddNumbers = [], myCharacters = [];

    if (typeof list == 'string' || typeof list === 'number') {
        return 'invalid input'
    }
    else {
        for (let i = 0; i < 50; i++) {
            if (list[i] % 2 === 0) {
                //add the even index value to the evens array
                evenNumbers.push(list[i]);
                obj['evenNums'] = evenNumbers.sort(function (x, y) { return x - y });
                
            }
            else if (list[i] % 2 === 1) {
                //add the odd index value to the odds array
                oddNumbers.push(list[i]);
                obj['oddNums'] = oddNumbers.sort(function (x, y) { return x - y });
            }
            else {
                myCharacters.push(list[i]);
                obj['chars'] = myCharacters.sort();
            }
        }
        return obj;
    }
}

module.exports = arraySort;