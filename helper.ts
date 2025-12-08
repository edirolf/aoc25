const fs = require('node:fs');

export function openFile(filename: string): string {
    try {
        const data = fs.readFileSync(`./data/${filename}`, 'utf8');
        //  console.log(data);
        return data;
    } catch (err: any) {
        console.error(err);
        return err.toString();
    }
}