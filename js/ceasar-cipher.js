/**
 * In cryptography, a Caesar cipher, also known as 
 * Caesar's cipher, the shift cipher, Caesar's 
 * code or Caesar shift, is one of the simplest 
 * and most widely known encryption techniques. 
 * It is a type of substitution cipher in which each 
 * letter in the plaintext is replaced by a letter 
 * some fixed number of positions down the alphabet.
 * 
 * En(x) = (x + n) mod 26 - where x would be the index and n is the amount to shift
 * 
 * @param {*} arr - list of characters to encrypt
 * @param {*} shiftAmount amount of offset in the encryption
 */

 let alphaList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 let encryptedList = [];

const encrypt = (arr, shiftAmount) => {

    // encryptedList = [...alphaList];

    for (let i = 0; i < arr.length; i++) {
    //    console.log(i, (i + shiftAmount) % 26);
       encryptedList.push(arr.splice(i + shiftAmount % 26));
    }

    return encryptedList;

}



console.log(encrypt(alphaList, 3))