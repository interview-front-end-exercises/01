/**
 * Return n rows by n columns identity
 */

const matrix = (n) => {

    let x;
    let y;
    
    /** There's a better way to do this (avoid nested loops), 
     * but for saving time, I'm leaving as is */
    for(x = 0; x < n; x++) {
        for(y = 0; y < n; y++) {
            x === y ? console.log('1') : console.log('0');
        }
        console.log('-----------');
    }
}

console.log(matrix(4));

// class Matrix {
  
//     constructor (rows, cols) {
//         this.grid = [];

//             for(let i = 0; i < rows; i++) {
//                 this.grid[i] = [];
        
//             for (let j = 0; j < cols; j++) {
//                 this.grid[i][j] = {};
//             }

//         }
//     }
// }

// let newGrid = new Matrix(3,4);
// console.log(newGrid);


