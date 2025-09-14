#!/usr/bin/node
const [,, first, second] = Process.argv;
console.log(first !== undefined && second !== undefined ?
`${first} is ${second}` : 'No argument');
