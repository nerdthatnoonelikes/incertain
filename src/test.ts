import fs from "fs";
import { lexer, parser } from "./index";

fs.readFile("test/test.ic", 'utf8', function(err, data) {
    const lexedOuput = lexer(data);
    const parsedOutput = parser(lexedOuput);
    console.log(parsedOutput.body[0].args);
})
