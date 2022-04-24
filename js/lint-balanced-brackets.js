/**
 * Given a string possibly containing three types of 
 * braces ({}, [], ()), write a function that returns 
 * a Boolean indicating whether the given string 
 * contains a valid nesting of braces.
 */

const balancedBrackets = (str) => {

    /**
     * Map for checking open / closed brackets
     */
    const bracketMap = {
        '{' : '}',
        '(' : ')',
        '[' : ']',
    }

    const foundBrackets = [];

    /**
     * Create an array from string items
     */
    const strArr = str.split('');

    /** do not allow these charactes */
    const regExp = new RegExp('[^A-Za-z0-9!]', 'g');

     /**
     * Remove any characters not a bracket
     */
    const bracketOnlyArr = strArr.filter((itm) => {
        return itm.match(regExp);
    });

    /**
     * Convert bracketOnlyArr to a string
     */
    const bracketOnlyString = bracketOnlyArr.join('');

    /**
     * loop over bracketOnlyString and if item is equal
     * to a key of bracketMap, add it to foundBracket array
     */
    for (let i = 0; i < bracketOnlyString.length; i++) {
      Object.keys(bracketMap).forEach((itm) => {
        if (itm === bracketOnlyString[i]) {
            foundBrackets.push(itm);
        }
      });

      /**
       * if item from bracketOnlyString is equal to 
       * a value of bracketMap, then remove the last
       * item in foundBracket array
       * 
       * if at the end there are no items in foundBracket
       * array, then we know all brackets match(open/close)
       */
      Object.values(bracketMap).forEach((itm) => {
          if(itm === bracketOnlyString[i]) {
              foundBrackets.pop();
          }
      })
    }

    /**
     * If no items in foundBrackets, then everything matches,
     * else - if at least one items is in foundBracket array,
     * then opening and closing tags don't match
     */
    console.log(foundBrackets.length === 0);

}

console.log(balancedBrackets('{[sdfdf(ee113!)]}'));