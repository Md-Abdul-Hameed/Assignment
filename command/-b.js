let fs = require("fs");
function numbering(fileName){
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
        let content="";
        let i=0;
        while(data[i]=='\n' || data[i]=='\r'){
            content+=data[i];
            i++;
        }
        if(i!=0){
            i--;
            count=0;
        }else{
            content+="1.";
        }
        for(;i<data.length-1;i++){
            content+=data[i];
            if(data[i]=='\n' || data[i]=='\r'){
                if(data[i+1]=='\r' || data[i+1]=='\n'){
                    continue;
                }else{
                    count++;
                    content+=count+"."

                }
        }
    }
    content+=data[data.length-1];
        copy(fileName,content);
    })
}

// function numbering(src){
//     fs.readFile(src, 'utf8' , (err, data) => {
//         if (err) {
//           console.error(err)
//           return
//         }
    
//         let count=1;
//         let content="";
//         let c="";
//         for(let i=0;i<data.length;i++){
//             if(data[i]!='\n'){
//                 c+=data[i];
//             }
//             if(data[i]=='\n'){
//                 if(c==""){
//                     content+=data[i];
//                 }else{
//                     content+=count+"."+c+data[i];
//                     count++;
//                 }
//                 c="";
//             }
//         }
//         //console.log(content);
//         copy(src,content);
//       })
//     }

function copy(fileName,content){
    fs.writeFile(fileName,content,err=>{
        if(err){
            console.error(err);
            return;
        }
        //console.log(content);
        console.log("Successfully gave numbering to non empty lines");
    })
}

module.exports={
    giveNumbers:numbering
}
