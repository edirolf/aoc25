"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openFile = openFile;
exports.processLine = processLine;
const fs = require('node:fs');
console.log("Day 1: Crack the Code");
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
function processLine(line) {
    const direction = line.charAt(0);
    const distance = line.substring(1);
    //   console.log(`Direction: ${direction}, Distance: ${distance}`);
    return {
        distance: parseInt(distance),
        direction
    };
}
const startingPos = 50;
let zeroCount = 0;
let totalZeroPasses = 0;
let currPos = startingPos;
let lines = openFile("input.txt").split("\n");
console.log(85 % 100);
console.log('Starting Position:', currPos);
// lines = ['R1000'];
// lines..forEach(line=>{
for (let l = 0; l < lines.length; l++) {
    let line = lines[l];
    console.log('\nProcessing line:', line);
    const distance = processLine(line);
    if (distance.direction === "R") {
        currPos += distance.distance;
        // console.log('currPos after move:', currPos);
        const zeroPsss = Math.floor(currPos / 100);
        //  console.log('zero passes this move:', zeroPsss);
        totalZeroPasses += zeroPsss;
        currPos = currPos % 100;
    }
    else {
        currPos -= distance.distance;
        if (currPos < 0) {
            let zeroPsss = Math.floor(Math.abs(currPos) / 100) + 1;
            totalZeroPasses += zeroPsss;
            console.log('zero passes this move:', zeroPsss);
            currPos = currPos % 100;
            currPos = 100 + currPos;
        }
    }
    console.log('total zero passes:', totalZeroPasses);
    if (currPos === 0) {
        zeroCount += 1;
        //   totalZeroPasses -= 1;
        console.log(`Dial rotated to ${currPos}. ✨`);
    }
    else {
        console.log('Dial rotated to:', currPos);
    }
}
console.log(`Total 0 exact positions: ${zeroCount}. 🔓`);
console.log('total zero passes:', totalZeroPasses);
//# sourceMappingURL=aoc1_1.js.map