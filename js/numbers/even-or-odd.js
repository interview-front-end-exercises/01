/**
 * Print out all even or odd numbers
 */
const evenOrOdd = (count) => {

    let evenOrOdd = '';

   for (let i = 0; i < count; i++) {
        if (i % 2 !== 0) { 
            evenOrOdd = 'odd' 
        }
        else { 
            evenOrOdd = 'even'
        }
        console.log(`${evenOrOdd} ${i}`);
   }
}

console.log(evenOrOdd(101));