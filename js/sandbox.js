const sandbox = (str) => {
    let arr = str.split(' ');

    return arr.map(itm => {
        let first = itm.charAt(0).toUpperCase();
        return first + itm.slice(1);
    }).join(' ')
    

}

const str1 = 'and now i am in another interview';
console.log(sandbox(str1));