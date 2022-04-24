import StringsUtil from './classes/strings.util.js';

const longestSinglePalindrome = (str) => {

    let palindromes = [];

    for(let i = 0; i < str.length; i++) {

        if (StringsUtil.IsPalindrome(str.substr(i, str.length))) {
            let pObj = {
                key: str.substr(i),
                length: str.substr(i).length
            }

            palindromes.push(pObj);
        }
    }
    return palindromes;
}

class PaliObj {
    constructor(primary, key, length) {
        this.primary = primary;
        this.key = key;
        this.length = length;
    }

    GetLength() {
        return this.length;
    }
}

const palindromes = (strs) => {

    let paliArr = [];
    const words = strs.split(' ');

    words.map((itm, idx, arr) => {
        for(let i = 0; i < itm.length; i++) {
            let subStr = itm.substr(i, itm.length);
            if (StringsUtil.IsPalindrome(subStr)) {
                paliArr.push(new PaliObj(itm, itm.substr(i), itm.substr(i).length));
            }
        }
    })

    paliArr.sort((a,b) => {
        return b.length - a.length;
    });

    console.log(`Largest palidrome is ${paliArr[0].key}, from ${paliArr[0].primary}`)

    return paliArr;
}

console.log(palindromes('there once was a man from nantucket banana his face was longer than a bucket'));
// console.log(longestSinglePalindrome('bestdealeverer'));