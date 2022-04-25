/**
 * Write a JavaScript function that generates all combinations of a string.
 * Example string: 'dog'
 * Expected Output: d,o,do,g,dg,og,dog
 */

const strCombos = (str) => {

    let combos = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            combos.push(str.substr(i , j));
        }
    }

    return combos;
}

console.log(strCombos('dog'));




