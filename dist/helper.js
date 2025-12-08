"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openFile = openFile;
const fs = require('node:fs');
function openFile(filename) {
    try {
        const data = fs.readFileSync(`./data/${filename}`, 'utf8');
        //  console.log(data);
        return data;
    }
    catch (err) {
        console.error(err);
        return err.toString();
    }
}
//# sourceMappingURL=helper.js.map