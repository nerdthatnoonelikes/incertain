import fs from "fs";
import { lexer } from "./index";

fs.readFile("test/test.ic", 'utf8', function(err, data) {
    const lexedOuput = lexer(data);
    console.log(lexedOuput);
})