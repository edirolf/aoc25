import { openFile } from "./helper";


let lines:string[] = openFile("aoc3_sample.txt").split("\n");
let total = 0;
console.log('Lines to process:', lines);