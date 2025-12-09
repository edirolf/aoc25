"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("./helper");
// let lines:string[] = openFile("aoc2_sample.txt").split(",");
const val = '2200670-2267527,265-409,38866-50720,7697424-7724736,33303664-33374980,687053-834889,953123-983345,3691832-3890175,26544-37124,7219840722-7219900143,7575626241-7575840141,1-18,1995-2479,101904-163230,97916763-98009247,52011-79060,31-49,4578-6831,3310890-3365637,414256-608125,552-1005,16995-24728,6985-10895,878311-912296,59-93,9978301-10012088,17302200-17437063,1786628373-1786840083,6955834840-6955903320,983351-1034902,842824238-842861540,14027173-14217812';
let lines = (0, helper_1.openFile)("aoc2_input.txt").split(",");
//  lines = '446443-446449'.split(",");
let total = 0;
console.log('Lines to process:', lines);
lines.forEach((line) => {
    console.log('\nProcessing line:', line);
    const range = line.split("-").map(num => parseInt(num));
    const start = range[0];
    const end = range[1];
    console.log('Range start:', start, 'end:', end);
    for (let num = start; num <= end; num++) {
        const firstHalf = num.toString().slice(0, num.toString().length / 2);
        const secondHalf = num.toString().slice(num.toString().length / 2, num.toString().length);
        // console.log('firsthalf:',firstHalf,'secondHalf:',secondHalf);
        if (num.toString().length % 2 === 0) {
            // console.log('odd number:',num,firstHalf,secondHalf);
            if (firstHalf === secondHalf) {
                console.log('have a match:', num);
                total += num;
            }
            else {
                console.log('no match:', firstHalf, secondHalf);
            }
        }
    }
});
console.log("total:", total);
//# sourceMappingURL=aoc2.js.map