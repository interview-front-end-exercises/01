const sort = (direction, arr) => {
    if (direction === 'ascending') {
        return arr.sort((a, b) => {
            return a - b;
        })
    } else {
        return arr.sort((a, b) => {
            return b - a;
        })
    }
}

const arr = [2,66,8,3,4,55,0,23];

console.log(sort('ascending', arr));

/**
 * Sort books by author's last name
 */

const sortBooks = (books) => {

    books = books.map((itm, idx, arr) => {
        let names = itm.author.split(' ');

        return {
            name: itm.name,
            firstName: names[0],
            lastName: names[1]
        }
    })

    let sorted = books.sort((a,b) => {
        return b.lastName > a.lastName ? -1 : 1;
    });

    return sorted;
}

const books = [
    { name: "Harry Potter", author: "Joanne Rowling" },
    { name: "Warcross", author: "Marie Lu" },
    { name: "The Hunger Games", author: "Suzanne Collins" },
];

console.log(sortBooks(books));




