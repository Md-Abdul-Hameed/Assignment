let fs = require("fs");

function copy(fileName,content){
    fs.writeFile(fileName,content,err=>{
        if(err){
            console.error(err);
            return;
        }
        console.log("Successfully converted big line break into a single file");
    })
}

function convert(fileName,fileName2){
    let exist = fs.existsSync(fileName);
    if(exist==false){
        console.log(fileName);
        console.log("File not found");
        return;
    }
    fs.readFile(fileName,'utf8',(err,data)=>{
        if(err){
            console.error(err);
            return;
        }
        let content = "";
        for(let i = 0; i < data.length; i++){
            if((data[i]=='\n' ||data[i]=='\r')&& (data[i+1]=='\n'|| data[i+1]=='\r')){
                continue;
            }
            content+=data[i];
        }
        if(fileName2==undefined){
            copy(fileName,content);
        }else{
            let found = fs.existsSync(fileName2);
            if(found==false){
                let createStream = fs.createWriteStream(fileName2);
                createStream.end();
            }
            copy(fileName2,content);
        }
    })
}
module.exports={
    cs : convert
}