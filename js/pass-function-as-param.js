const passFunAsParam = (func) => {
    func();
}

const paramFunc = () => {
    console.log('callback function!');
}

passFunAsParam(paramFunc);