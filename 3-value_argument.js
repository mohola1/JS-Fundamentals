#!/usr/bin/node

const firstArg = process.argv[2];

if (firstArg === undefined) {
    console.log("No argument");
}  else if (firstArg === 1) {
    console.log("HBTN");
}  else {
    console.log ("firstArg");
}


