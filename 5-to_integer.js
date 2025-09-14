#!/usr/bin/node

const arg = process.argv[2];

if(arg === undefined) {
    console.log('Not a number');
}   else {
    const num = Number(arg);
    console.log(!isNaN(num) ? `My number: ${num}` : 'Not a number');
}



