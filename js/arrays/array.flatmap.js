/**
 * Returns a flattened array by one level
 */

const flatMap = (arr) => {
    return arr.flatMap((itm, idx, arr) => {

        return [itm * 2];
    });
}

console.log(flatMap([1,2,3,4,5,6,7]));


const mapSentence = (str) => {
    return str.map((itm) => {
        return itm.split(' ');
    })
}

const flatmapSentence = (str) => {
    return str.flatMap((itm) => {
        return itm.split(' ');
    })
}


let sentences = ["JavaScript Array flatMap()", " ", "is", " ", "Awesome"];
console.log(mapSentence(sentences));
console.log(flatmapSentence(sentences));