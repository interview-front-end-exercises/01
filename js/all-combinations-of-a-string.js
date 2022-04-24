
const allCombos = (str) => {
    let combos = [];
    
    for (let i =0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            combos.push(str.slice(i, j));
        }
    }

    return combos;
}

console.log('combos', allCombos('dog'));