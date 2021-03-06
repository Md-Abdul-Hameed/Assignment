let fs = require("fs");

function copy(fileName,content){
    fs.writeFile(fileName,content,err=>{
        if(err){
            console.error(err);
            return;
        }
       // console.log(content);
        console.log("Successfully gave numbering to all the lines");
    })
}

function giveNumbersA(fileName){
    //console.log("give numbering to all the lines");
    let exist = fs.existsSync(fileName);
    if(exist==false){
        console.log("File not found");
        return;
    }
    fs.readFile(fileName,"utf8",(err,data)=>{
        if(err){
            console.log(err)
            return;
        }
        let count=1;
        let content="1.";
        for(let i=0;i<data.length;i++){
            content+=data[i];
            if(data[i]=='\n'){
                count++;
                content+=count+".";
            }
        }
        console.log("here");
        copy(fileName,content);
    })

}
module.exports={
    giveNumbers : giveNumbersA
}