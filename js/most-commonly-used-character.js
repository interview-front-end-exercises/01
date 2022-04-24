const mostCommonCharacter = (str) => {
   
    /**
     * disallow these characters
     */
    const allowedChars = new RegExp('[A-Za-z0-9_]', 'g');

    /**
     * Create an array from the words in the string, 
     * remove any empty spaces first
     */
    const arr = str.replaceAll(' ', '').split('');

    /** storage */
    let commons = {};
    let sortableCommons = [];

    /** filter out any non-allowed characters */
    commons = arr.filter((itm) => {
        return itm.match(allowedChars);

    }).reduce((prev, char) => {

       prev[char] = (prev[char] || 0) + 1;

        return prev;

    }, {});

    /**
     * Assign object properties to an array
     */
    for (let i in commons) {
        sortableCommons.push({key: i, length: commons[i]});
    }

    /**
     * Sort sortableCommons in descending order, so
     * we can determine which character is used the most
     */

    sortableCommons.sort((a, b) => {
        return b.length - a.length;
    })
  
    return sortableCommons[0];
}

console.log(mostCommonCharacter('and then there were more that two at the market, there were many!'));