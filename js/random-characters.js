const randomChars = (length, chars) => {

    const charsArr = chars.split('');
    let randos = [];

    for (let i = 0; i < length; i++) {
        randos.push(charsArr[Math.floor(Math.random() * charsArr.length)]);
    }

    return randos.join('');
 
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
console.log(randomChars(17, chars));