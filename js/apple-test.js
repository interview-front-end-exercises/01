// Write a function that takes a string and returns the average of all valid measurements up to the end of the string or up to an occurrence of "999".

// An example of an input string "345 3.5 5.23 3454.12345 abc 34543 999 1"

const average = (str) => {

    /** Break up into an array */
    let strArr = str.split(' ');
    /** Regex to only allow numbers */
    let regExp = new RegExp('[0-9]','g');
    /** total */
    let total = 0;

    /** Remove items that aren't numbers */
    strArr = strArr.filter((itm) => {
        return itm.match(regExp);
    })

    /** Loop over array and add values */
    for (let i = 0; i < strArr.length; i++) {
        if (i <= 999) {
            total += parseInt(strArr[i]);
        }
    }

    /** Return average */
    return (total / strArr.length).toFixed(2);

  }
  
  console.log(average("345 3.5 5.23 3454.12345 abc 34543 999 1"));