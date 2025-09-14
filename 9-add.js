#!/usr/bin/ env node

function add(a, b) {
    return a + b;
}
const first = parseInt(process.argv[2], 10);
const second = parseInt(process.argv[3], 10);

if (isNaN(first) || isNaN(second)) {
    console.log('NaN');
}   else {
    console.log(add(first, second));
}