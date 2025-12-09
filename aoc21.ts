import { openFile } from "./helper";


let lines:string[] = openFile("aoc2_sample.txt").split(",");
// lines = '998-1012'.split(",");
let total = 0;
console.log('Lines to process:', lines);
lines.forEach((line)=>{
    console.log('\nProcessing line:', line);
const range = line.split("-").map(num=>parseInt(num));
const start = range[0];
const end = range[1];
console.log('Range start:', start, 'end:', end);

for(let num = start; num <= end; num++){
    for(let i = 0; i < num.toString().length -1; i++){
        let val = num.toString();
        let chars = val[i];
        let remainder = val.substring(i+1);
        console.log('chars:', chars, 'remainder:', remainder);
        if(remainder.includes(chars)){
            console.log('have a match:',num)
            total += num
            break;
        } else{
            console.log('no match for char:',chars)
        }
    }
    // const firstHalf = num.toString().slice(0,num.toString().length/2);
    // const secondHalf = num.toString().slice(num.toString().length/2,num.toString().length);
    // // console.log('firsthalf:',firstHalf,'secondHalf:',secondHalf);
    // if(num.toString().length % 2 === 0){
    //     // console.log('odd number:',num,firstHalf,secondHalf);
    //     if(firstHalf === secondHalf){
    //         console.log('have a match:',num)
    //     total += num
    //     }else{
    //         console.log('no match:',firstHalf,secondHalf)
    //     }
    // }
}
});
console.log("total:", total)