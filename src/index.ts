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
       let buffer = [];
        
       for (let x of source) {
        if (!nums.includes(x) && buffer.length > 0) {
            tokens.push({token: TOKEN_INT, value: + buffer.join("")})
            buffer = []
        }

        if (x === "+") {
            tokens.push({token: TOKEN_ADD, value: x})
        } else if(x === "-") {
            tokens.push({token: TOKEN_SUBTRACT, value: x})
        } else if(x === " ") {
            continue;
        } else if(nums.includes(x)) {
            buffer.push(x);
        }
    }
    if (buffer.length > 0) {
        tokens.push({token: TOKEN_INT, value: + buffer.join("")});
        buffer.splice(0, buffer.length)
    }
       console.log(tokens);
     });
    }
}

const lexer = new Lexer({filename: "test/test.ic"})
lexer.lexer();