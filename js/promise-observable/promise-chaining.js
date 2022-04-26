/**
 * Create several functions that return Promises
 * and look at Promise chaining
 */

// Simulate fetching some data
let fetchData = (data) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('Fetching Data Complete');
            resolve({id: 1, message: 'nice work'});
        }, 2000)

    })
}

// Parse the data
let parseData = (data) => {
    return new Promise((resolve, reject) => {
        // foo = bar; // will cause an error, becase 'bar' isn't defined
        setTimeout(() => {
            let parsedOutput = `Parsed the data for id: ${data.id} with message: ${data.message}`;
            resolve({parsed: parsedOutput})
        }, 2000)
    })
}

// Echo the data
let echoData = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data.parsed);
        }, 2000)
    })
}

// Chaining the Promises!
fetchData().then(parseData).then(echoData).catch(err => {
    console.error(err);
});