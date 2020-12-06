import logger from "@ayana/logger";
const log = logger.get("Incertain")

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
        } else if(x == "\n") {
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
            log.error(`Unkown character: ${x}`)
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

export const parser = (tokens) => {
    let current = 0;

    let ast = {
        type: "Program",
        body: [],
    }

    for (let token of tokens) {
        if (token.token === "paren") {
            token = tokens[++current];
        }

        if (token.token === "add") {
            current++
            ast.body.push({type: "CallExpression", function: "add", args: [{type: "Number", value: tokens[current-1].value}, {type: "Number", value: tokens[current+1].value}]})
        }

        if (token.token === "subtract") {
            current++
            ast.body.push({type: "CallExpression", function: "subtract", args: [{type: "Number", value: tokens[current-1].value}, {type: "Number", value: tokens[current+1].value}]})
        }
    }
    return ast;
}
