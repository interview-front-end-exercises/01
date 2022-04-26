class MissingWords {

    constructor() {

    }
     missing(s, t) {
        let sArray = s.split(' ');
        let tArray = t.split(' ');

        return sArray.filter((itm, idx, arr) => {
            /** Either of these methods will work */
            // return tArray.indexOf(itm) !== -1;
            return tArray.includes(itm);
        })
    }

}

const s = 'I am in the middle of this test';
const t = 'in middle this dfdd';
const missingWords = new MissingWords();
// console.log(missingWords.missing(s, t));


const findMissing = (sentence, missing) => {

    sentence = sentence.split(' ');
    missing = missing.split(' ');
    let diffs = [];

    missing.filter((itm) => {
        if (!sentence.includes(itm)) {
            diffs.push(itm);
        }
    });

    sentence.filter((itm) => {
        
        if (!missing.includes(itm)) {
            diffs.push(itm);
        }
    })

    return diffs;

    
}

console.log(findMissing(s, t));


