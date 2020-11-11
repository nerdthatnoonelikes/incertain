import fs from "fs";

// Tokens
const TOKEN_INT = "INT";
const TOKEN_ADD = "ADD";
const TOKEN_SUBTRACT = "SUBTRACT";

const lexer = (filename: string) => {
    fs.readFile(filename, 'utf8', function (err,data) {
        if (err) {
            return console.log(`Error while reading file | Error: ${err}`);
        }
        let tokens = [];
        for (let x of data) {
            if (x === "+") {
                x = `${x}:${TOKEN_ADD}`;
               
            } else if("0123456789".indexOf(x) >= 0) {
                x = `${x}:${TOKEN_INT}`
            } else if(x === "-") {
                x = `${x}:${TOKEN_SUBTRACT}`
            }
            tokens.push(x);
        }
        console.log(tokens);
    });
}

lexer("test/test.ic")