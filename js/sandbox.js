const squareAllPositiveNumbers = (nums) => {
   return nums.map((itm) => {
       if (itm >= 0) {
           return Math.pow(itm, 2);
       } else {
           return itm;
       }
   })
}

console.log(squareAllPositiveNumbers([1,-2,3,4,5,-6,-7,8,9]));