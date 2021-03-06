let fs = require("fs");
function append(fileName1,fileName2){
    let found1 = fs.existsSync(fileName1);
    if(found1==false){
        console.log("File 1 not found");
        return;
    }
    let found2 = fs.existsSync(fileName2);
    if(found2==false){
        let createStream = fs.createWriteStream(fileName2);
        createStream.end();
    }
    fs.readFile(fileName1,'utf8',(err,data)=>{
        if(err){
            console.error(err);
            return;
        }
        fs.appendFileSync(fileName2,data);   
        console.log(fileName1," appended to ",fileName2);
    })
}
module.exports={
    a : append
}