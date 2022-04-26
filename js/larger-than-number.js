const largerThan = (arr, num) => {
    return arr.filter((itm) => {
        return itm > num;
    })
}

console.log(largerThan([3,66,53,2,1,6,7,54,3], 5));
