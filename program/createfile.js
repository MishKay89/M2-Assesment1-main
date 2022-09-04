// This is question C
// To use this script type 'node createfile.js' into the terminal.

const fs = require('fs')
  
let data = 'Developer: Mukundi Lambani, App: Ambani Africa App, Category: Best South African Solution';

// Creates the file
fs.writeFile('Output.txt', data, err => {

    if (err) {
        console.err;
        return;
    }
});

// Opens & reads the file & prints it in the console
fs.readFile('Output.txt', 'utf8', (err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    console.log(data);
});