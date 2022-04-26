class ClassFunctions {

    static removeAllWhiteSpace = (str) => {
        return str.replaceAll(' ', '');
    }
   
    static convertStringToArray = (str) => {
        return str.split('');
    }
}

/**
 * Get the number of occurences of each letter in a string
 */
const numberOfOccurences = (str) => {

    const removeWhiteSpace = str.replaceAll(' ', '')
    const chars = removeWhiteSpace.split('').sort();
    let occurrences = [];

    let reduceCallbackFn = (prev, cur) => {
        
        /** prev[cur] - object key */
        /** (prev[cur] || 0) + 1 - key value*/
     
        /** add one to either the value of prev[cur]
         * or to zero for each iteration of the same
         * object key
        */
        prev[cur] = (prev[cur] || 0) + 1;
        
        return prev;
    }

    /** First value of prev is the new object from below */
    /** cur is each item from the chars array */
    occurrences = chars.reduce(reduceCallbackFn, {});

    /** remove any empty items */
    // for (let occ in occurrences){

    //     if (occ === ' ') {
    //         delete occurrences[occ];
    //     }
    // }

    return occurrences;
}

const phrase = 'there once was a man from nantucket';
// console.log(numberOfOccurences(phrase));

/**
 * Count the number of occurences based off a given value
 */

const occursOfGivenValue = (str, keys) => {

    /** Remove any spaces in the string, using a class to show abstraction */
    const replaceWhitespaces = ClassFunctions.removeAllWhiteSpace(str);

    /** Convert string to an array of items */
    const chars = ClassFunctions.convertStringToArray(replaceWhitespaces);

    /** Storage for occurences */
    let occurrences = [];

    /** Filter out any character that aren't equal to the key */
    occurrences = chars.filter((itm, idx, arr) => {
       
        /** when keys is an array */
        let foundKey = '';

        for (let i = 0; i < keys.length; i++) {
            if (itm === keys[i]) {
                foundKey = keys[i];
            }
        }
        return foundKey;

        /** when keys is a single character */
        // return itm === keys;
    })
    /** 
     * chain a reducer to the filter function, so we can 
     * find the number of occurences of the given key
     */
    .reduce((prev, char) => {
        prev[char] = (prev[char] || 0) + 1;

        return prev;
    }, []);
 
    return occurrences;

}

console.log(occursOfGivenValue(phrase, ['n','o']));
