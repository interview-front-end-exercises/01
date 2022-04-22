const examples = [
    '{}', // valid, to act as a starting point
    '{[]}', // valid
    '{[]}', // valid
    '{[(])}', // NOT valid (parenthesis and brackets are "intersecting")
    '{[}',  // NOT valid (opening bracket is not closed)
    '{([]}', //  NOT valid (ignore escape characters & string literals)
    '{]}', // NOT valid (extra closing bracket)
  ];
                
function nameMe(inputString) { 
    
  let current;

  /** Array where we store brackets as we find them,
   * then we remove the brackets when we find the 
   * matching closing bracket
   */
  let stack = [];

  /** Lookup object for open and closing tags */
  const matchLookup = {
        "(": ")", 
        "[": "]", 
        "{": "}", 
      };

      /** 
       * Create an array of items from the given string
       *  and loop over each item
       */
    inputString.split('').forEach((char, idx, arr) => {
      
      /**
       * Check if the current character matches one of
       * the keys inside matchLookup object
       */
      if (Object.keys(matchLookup).includes(char)) {
        
        /** Add matching character to stack array */
        stack.push(char);

        /** 
         * Check if the current character matches one of
         * the values inside matchLookup object
         */
      } else if (Object.values(matchLookup).includes(char)) {
        
        /** Assign lastBracket to the last item in stack array */
        const lastBracket = stack.pop();

        if (matchLookup[lastBracket] !== char) { 
        
          return false; //terminate immediately - no need to continue scanning the string
        }
      }
    })
    
    return stack.length === 0; //any elements mean brackets left open
}
  
  console.log(nameMe('{[(]}'));