class StringsUtil {

    /**
     * Test if a string is a palindrome
     * 
     * @param {*} str string to test 
     * @returns boolean
     */
    static IsPalindrome(str) {
        const reverse = str.split('').reverse().join('');

        return str === reverse;
    }
}

export default StringsUtil;