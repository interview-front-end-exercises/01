const map = (arr) => {
    return arr.map((itm, idx, arr) => {
        return itm += 'boo';
    });
}

console.log(map([1,2,3,4,5,6,7]));