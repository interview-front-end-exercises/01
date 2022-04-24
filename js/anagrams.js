/**
 * Create a function that takes two string
 * arguments and returns a boolean that 
 * indicates whether or not the first string
 * is an anagram of the second string
 * 
 * Anagram - another word or phrase formed by
 * rearranging letters of the first word or phrase
 * 
 */

const anagrams = (str1, str2) => {

    /**
     * If string lengths aren't the same,
     * no anagram
     */
    if (str1.length !== str2.length) {
        return false;
    }

    const sortStr1 = str1.split('').sort().join('');
    const sortStr2 = str2.split('').sort().join('');
    
    /**
     * If strings don't have the same charactes,
     * no anagram
     */

    if(sortStr1 !== sortStr2) {
        return false;
    }

    /** else, the two strings are anagrams */
    return true;
}

console.log(anagrams('blobber', 'blobber'));