/**
 * Check data types of given items
 * 
 * @param  types array of items
 * @returns list of datatypes
 */

const dataTypes = (types) => {

    let type = '';

    return types.map((itm, idx, arr) => {

        if(Array.isArray(itm)) {
            type = 'Array';
        } else {
            type = typeof itm;
        }

        return `${ itm } is a type of: ${ type }`
    })
}

/** this variable doesn't have a values,
 * so JavaScript assigns the default value of 'undefined,'
 * which is a type of 'undefined' */
let undefinedVar;
let arr = [];
const types = [{}, ()=>{}, 1, 'one', true, undefinedVar, arr];

console.log(dataTypes(types));

