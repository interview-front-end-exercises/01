/**
 * Get the number of occurences of each letter in a string
 */

const numberOfOccurences = (str) => {

    const chars = str.split('').sort();
    let charsCount = [];

    let reduceCallbackFn = (prev, cur) => {
        /** prev[cur] - object key */
        /** (prev[cur] || 0) + 1 - key value*/
        console.log((prev[cur] || 0) + 1)
        /** add one to either the value of prev[cur]
         * or to zero for each iteration of the same
         * object key
        */
        prev[cur] = (prev[cur] || 0) + 1;
        
        return prev;
    }

    /** First value of prev is the new object from below */
    /** cur is each item from the chars array */
    charsCount = chars.reduce(reduceCallbackFn, {});

    return charsCount;
}

console.log(numberOfOccurences('shannon'));