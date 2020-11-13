import fs from "fs";
import {LexerOptions} from "./LexerOptions"

// Tokens
const TOKEN_INT = "INT";
const TOKEN_ADD = "ADD";
const TOKEN_SUBTRACT = "SUBTRACT";
const TOKEN_FLOAT = "FLOAT";

const nums = "0123456789"

class Lexer {
    public filename;
    public constructor(options: LexerOptions) {
        this.filename = options.filename
    }

    public lexer = () => {
         fs.readFile(this.filename, 'utf8', function (err,data) {
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
           } else if(nums.includes(current)) {
               tokens.push({token: TOKEN_INT, value: current})
           }
           index++
       }
       console.log(tokens);
     });
    }
}

const lexer = new Lexer({filename: "test/test.ic"})
lexer.lexer();