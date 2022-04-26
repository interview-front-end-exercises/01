const squareAllPositiveNumbers = (nums, power) => {
    return nums.map((itm) => {
        if (itm >= 0) {
            return Math.pow(itm, power);
        } else {
            return itm;
        }
    })
 }
 
 console.log(squareAllPositiveNumbers([1,-2,3,4,5,-6,-7,8,9], 2));