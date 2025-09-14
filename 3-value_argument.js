#!/usr/bin/node

const firstArg = process.argv[3];

if (firstArg === undefined) {
    console.log("No argument");
}  else {
    console.log (firstArg);
}

