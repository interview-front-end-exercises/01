/**
 * Concate two arrays, if only one array
 * is given, then copy the first
 */

const concat = (arrOne, arrTwo = arrOne) => {

    // return arrOne.concat(arrTwo);

    // arrOne.push(...arrTwo);
    // return arrOne;
    
    return [...arrOne, ...arrTwo];
}

console.log(concat([1,2,3,4,5], ['a','b']));
