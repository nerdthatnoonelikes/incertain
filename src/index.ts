// Tokens
const TOKEN_INT = "int";
const TOKEN_ADD = "add";
const TOKEN_SUBTRACT = "subtract";
const TOKEN_PAREN = "paren";



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
            tokens.push({
                token: TOKEN_INT,
                value: + buffer.join("")
            })
            buffer = []
        }

        if (x === "+") {
            tokens.push({
                token: TOKEN_ADD,
                value: x
            })
        } else if(x === "-") {
            tokens.push({
                token: TOKEN_SUBTRACT,
                value: x
            })
        } else if(x === " ") {
            continue;
        } else if(nums.includes(x)) {
            buffer.push(x);
        } else if(x === "(") {
            tokens.push({
                token: TOKEN_PAREN,
                value: "("
            })
        } else if(x === ")") {
            tokens.push({
                token: TOKEN_PAREN,
                value: ")"
            })
        } else {
            throw new Error(`Unknown character: ${x}`);
        }
    }
    if (buffer.length > 0) {
        tokens.push({token: TOKEN_INT, value: + buffer.join("")});
        buffer.splice(0, buffer.length)
    }
    
    return tokens;
}

/**
 * ============================================================================
 *                                 ヽ/❀o ل͜ o\ﾉ
 *                                THE PARSER!!!
 * ============================================================================
 */

