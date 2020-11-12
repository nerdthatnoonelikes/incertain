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
       let source = data.toString();
       let index = 0;
       
       while (index < source.length) {
           let current = source[index];
           if (current === "+") {
            tokens.push(TOKEN_ADD);
           } else if(current === "-") {
            tokens.push(TOKEN_SUBTRACT);
           } else if("0123456789".indexOf(current) >= 0) {
            let number = current;
            while ("0123456789".indexOf(source[index]) >= 0) {
                number += source[index];
                index++
            }
                tokens.push(TOKEN_INT) 
           }
           index++
       }
        console.log(tokens);
   });
}

lexer("test/test.ic")