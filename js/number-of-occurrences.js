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

console.log(numberOfOccurences('there once was a man from nantucket'));