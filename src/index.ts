// Tokens
const TOKEN_INT = "INT";
const TOKEN_ADD = "ADD";
const TOKEN_SUBTRACT = "SUBTRACT";
const TOKEN_FLOAT = "FLOAT";

const nums = "0123456789"

/**
 * ============================================================================
 *                                   (/^▽^)/
 *                                THE LEXER!
 * ============================================================================
 */


export const lexer = (contents) => {
       let tokens = [];
       let source = contents.toString();
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
}