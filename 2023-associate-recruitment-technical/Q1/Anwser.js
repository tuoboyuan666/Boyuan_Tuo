const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

var n=readline();
var res=[];
void async function () {
    for(let i=0;i<n;i++){
        var lines=readline();
        var line=lines.split(' ');
        res.push(line);
    }
    var storeNum=res[0][0],customNum=res[2][0],storeSize=res[1],customSize=res[3];
    if(Number(storeNum)<Number(customNum)){
        return "No";
    }
    var count=0;
    while(count<Number(customNum)){
        var customSizeCompare=customSize[count].split('');
        var storeSizeCompare=storeSize[count].split('');
        if(customSizeCompare[customSizeCompare.length-1]=='L'){
            if(storeSizeCompare.length<customSizeCompare.length){
                return "No";
            }else if(storeSizeCompare[storeSizeCompare.length-1]!=='L'){
                return "No";
            }else{
                count=count+1;
            }
        }else if(customSizeCompare[customSizeCompare.length-1]=='M'){
            if(storeSizeCompare[storeSizeCompare.length-1]=='S'){
                return "No";
            }else{
                count=count+1;
            }
        }else{
            if(storeSizeCompare[storeSizeCompare.length-1]=='S'&&storeSizeCompare.length>customSizeCompare.length){
                return "No";
            }else{
                count=count+1;
            }
        }
    }
    return "Yes";
}()
