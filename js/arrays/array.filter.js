const filter = (arr) => {
    return arr.filter((itm, idx, arr) => {
        return itm > 4;
    });
}

console.log(filter([1,2,3,4,5,6,7]));