const fetchPromise = fetch('https://ghibliapi.herokuapp.com/people');
const main = document.getElementById("main");
main.innerHTML = "<p>Loading...";


fetchPromise.then(response => {
    return response.json();
}).then(people => {
    const names = people.map(person => person.name).join("\n");
    console.log(names);

    // Append names to main element
    main.innerHTML = names;
})