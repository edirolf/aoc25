import { openFile } from "./helper";


// let lines:string[] = openFile("aoc2_sample.txt").split(",");
let lines:string[] = openFile("aoc2_input.txt").split(",");
let total = 0;
lines.forEach((line)=>{
    console.log('\nProcessing line:', line);
const range = line.split("-").map(num=>parseFloat(num));
const start = range[0];
const end = range[1];
for(let num = start; num <= end; num++){
    const firstHalf = num.toString().slice(0,num.toString().length/2);
    const secondHalf = num.toString().slice(num.toString().length/2,num.toString().length);
    // if(num.toString.length % 2 === 0){
        // console.log('odd number:',num,firstHalf,secondHalf);
        if(firstHalf === secondHalf){
            console.log('have a match:',num)
        total += +num
        }else{
            console.log('no match:',firstHalf,secondHalf)
        }
    // }
}
});
console.log("total:", total)