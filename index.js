const fs=require('fs'); //Module for file reading
const prompt = require('prompt-sync')({sigint: true}); //Module for taking user input

function fileRead(filePath,name) {

    let read=new Promise((resolve,reject) => { //Promises
        fs.readFile(filePath,'utf8',(err,data)=> { //(err,data) is a callback 
            if(err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        })
    })
    read.then((data) =>{
        let array=data.split('\n')

        while(name!="^C") {
        
            if(name===array[array.length-1]){
                var name1=name;
            }
            else {
                name1=name+"\r";
            }
            for(let i=0;i<array.length;i++) {

                if(name1===array[i]) {

                    console.log("Found in File: "+array[i]);
                    var con=true;
                    break;
                }
                con=false;
            }
            if(!con) {
                console.log("Could Not Find in file");
                
            }
            name=prompt('Enter data [IF NAME with spaces] to search, or press [CTRL+C] to exit: ');
        
        }
    }).catch((err) => {
        console.log("Cannot Find File "+err);
        })
        
    
}
exports.read=fileRead; //exported function





