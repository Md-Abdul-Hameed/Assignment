function help(){
    console.log("wcat filename => displays content of the file\n",
    "wcat filename1 filename2 filename3..... => displays content of all the files specified\n",
    "wcat -s filename => convert big line breaks into single line\n",
    "wcat -n filename => give numbering to all the lines\n",
    "wcat -b filename => give numbering to all non empty lines\n",
    "wcat \"filename1 > filename2\" => copy all the content of filename1 to filename2\n",
    'wcat "filename1 >> filename2" => append all the content of filename1 to filename2\n',
    'wcat -s "filename1 > filename2" => remove large linespaces and save the output in filename2\n');
}

module.exports={
    h : help
}