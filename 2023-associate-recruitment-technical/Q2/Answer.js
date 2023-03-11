const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

var n=readline();
var allValid=true;
var errorCodes = []
void async function () {
    for(let i=0;i<n;i++){
        if(i==0){
            continue;
        }
        var lines=readline();
        var line=lines.split(' ');
        if(line[1]=='false'){
            allValid=false;
            errorCodes.push(line[2]);
        }else{
            continue;
        }
    }
    if(allValid){
        console.log('Yes');
    }else{
        console.log('N0');
        console.log(errorCodes);
    }
}()
