#!/usr/bin/node
const argcount = process.argv.length - 2;

if (argcount === 0) {
    console.log("No argument");
}   else if (argcount === 1) {
    console.log("Best Argument found");
}   else {
    console.log("Best School Arguments found");
}