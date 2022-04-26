const url = 'https://jsonplaceholder.typicode.com/posts/1';

const isStatus200 = (res) => {
    if(res.status === 200) {
        return res;
    } else {
        let err = new Error(res.statusText);
        err.response = res;
        throw err;
    }
}

const getPostJson = (res) => {
    return res.json();
}

fetch(url)
.then(isStatus200)
.then(getPostJson)
.then(json => console.log(json))
.catch(err => console.error(err));
