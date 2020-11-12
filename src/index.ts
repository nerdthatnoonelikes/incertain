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
            tokens.push({token: TOKEN_ADD, value:current})
           } else if(current === "-") {
                tokens.push({token: TOKEN_SUBTRACT, value: current})
           } else if("0123456789".indexOf(source[index]) >= 0) {
               tokens.push({token: TOKEN_INT, value: current});
           }
           index++
       }
       console.log(tokens);
   });
}

lexer("test/test.ic")