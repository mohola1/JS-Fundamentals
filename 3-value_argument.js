#!/usr/bin/node

const firstArg = process.argv[2];

if (firstArg === undefined) {
    console.log("No argument");
}  else if (firstArg === HBTN) {
    console.log("HBTN");
}  else if (firstArg === HBTN cool) {
    console.log("HBTN cool");
}  else {
    console.log ("firstArg");
}

