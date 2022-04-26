// const fetchPromise = fetch('https://ghibliapi.herokuapp.com/people');
// const main = document.getElementById("main");
// main.innerHTML = "<p>Loading...";


// fetchPromise.then(response => {
//     return response.json();
// }).then(people => {
//     const names = people.map(person => person.name).join("\n");
//     console.log(names);

//     // Append names to main element
//     main.innerHTML = names;
// })

/**
 * Promise - Eventual resolution of a value
 *  - Three states:
 *          - Pending   | hasn't settled to a value yet
 *          - Fulfilled | settled successfully (calling resolve())
 *          - Rejected  | settled unsuccessfully (calling reject()) 
 * 
 * https://www.youtube.com/watch?v=zu6I2FXakLI
 */

let allGood = true;

let fetchSomeData = new Promise((resolve, reject) => {
    if (!allGood) {
        reject('error fetching data');
    } else {
        resolve({id:1, message: 'nice work'});
    }
})

/**
 * Consume a Promise
 */
fetchSomeData.then(fetchedData => {
    console.log('then', fetchedData);
}).catch(err => {
    console.error('catch', err);
});
