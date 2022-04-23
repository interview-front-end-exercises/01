const randomChars = (length) => {

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charsArr = chars.split('');
    let randos = [];

    for (let i = 0; i < length; i++) {
        randos.push(charsArr[Math.floor(Math.random() * charsArr.length)]);
    }

    return randos.join('');
 
}

console.log(randomChars(14));