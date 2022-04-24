function returnName() {
    return arguments.callee.name;
}

console.log(returnName());