const armstrongNumbers = (nums, power) => {

    let numsConcat = [];
    let calcs = [];
    /**
     * Check if nums contains numbers
     */
    nums.forEach(itm => {
        if (!parseInt(itm)) {
            throw new Error(`${itm} is not a number!`);
            return;
        }
        // calcs.push(itm ** power);
        calcs.push(Math.pow(itm, 3));
        numsConcat.push(itm);
    });

    let sum = calcs.reduce((prev, curr) => {
        prev = prev + curr;
        return prev;
    }, 0);

    return sum === parseInt(numsConcat.join(''));
}

console.log(armstrongNumbers([1,5,3], 3));