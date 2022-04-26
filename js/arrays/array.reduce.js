const reduce = (arr) => {
    return arr.reduce((prev, curr) => {

        if (curr % 3 === 0) {
            curr += (curr + '3');
        } else {
            curr = curr;
        }

        prev[curr] = curr;

        return prev;
    }, {});
}

console.log(reduce([1,2,3,4,5,6,7]));