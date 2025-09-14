#!/usr/bin/ env node
const arg = process.argv[2];
const size = parseInt(arg,10);

if (isNaN(size)) {
    console.log('Missing size');
}   else {
    for (let i = 0; i < size; i++) {
        console.log('x'.repeat(size));
    }
}

