import fs from "fs";
import { lexer, parser, evaluate } from "./index";

fs.readFile("test/test.ic", 'utf8', function(err, data) {
    const lexedOuput = lexer(data);
    const parsedOutput = parser(lexedOuput);
    console.log(evaluate(parsedOutput));
})
