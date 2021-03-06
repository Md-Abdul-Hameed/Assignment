let fs = require("fs");
function readF(files){
    for(let i = 0; i < files.length; i++){
    let exist = fs.existsSync(files[i])
    if(exist){
    fs.readFile(files[i],"utf8",(err,data)=>{
        if(err){
            console.error(err);
            return;
        }
        console.log(data);
    })
}else{
    console.log("File not found");
}
    }
}
module.exports={
    read : readF
}