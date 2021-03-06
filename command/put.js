let fs = require("fs");
let path = require("path");
function copy(fileName1,fileName2){
    let curr = process.cwd();
    let found1 = fs.existsSync(fileName1);
    if(found1==false){
        console.log("File 1 Not Found");
        return;
    }
    let found2 = fs.existsSync(fileName2);
    if(found2 == false){
        let createStream = fs.createWriteStream(path.join(curr,fileName2));
        createStream.end();
    }
    fs.copyFileSync(path.join(curr,fileName1),path.join(curr,fileName2));
    console.log(fileName1," copied to ",fileName2);
}

module.exports={
    putF : copy
}