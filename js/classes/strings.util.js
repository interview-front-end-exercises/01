class StringsUtil {
    static IsPalindrome(str) {
        const reverse = str.split('').reverse().join('');

        return str === reverse;
    }
}

export default StringsUtil;