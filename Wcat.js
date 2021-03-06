#! /usr/bin/env node

let fs = require("fs");
let numNe = require("./command/-b.js");
let con = require("./command/-s.js");
let numA = require("./command/-n.js");
let display = require("./command/display.js")
let put = require("./command/put.js");
let append = require("./command/append.js");
const help = require("./command/help.js");

let input = process.argv.slice(2);

let command = input[0];

switch(command){
    case 'help':
        help.h();
        break;
    case "-s":
        str = input[1].toString().split(" ");
        if(str[1]==">"){
            con.cs(str[0],str[2]);
        }else{
        con.cs(str[0],undefined);
        }
        break;
    case "-b":
        if(input[1]=='-n'){
            input[1] = input[2];
        }
        numNe.giveNumbers(input[1]);
        break;
    case "-n":
        if(input[1]=='-b'){
            input[1]  = input[2];
        }
        numA.giveNumbers(input[1]);
        break;
    default:
        str = input.toString().split(" ");
        if(str[1]==">"){
            put.putF(str[0],str[2]);
        }else if(str[1]==">>"){
            append.a(str[0],str[2]);
        }else{
            display.read(input);
        }
        break;        
        

}