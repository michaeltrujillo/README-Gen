//npm install
//npm install require

const fs = require('fs');
const inquirer = require('inquirer');
let stringArr = [];
    inquirer.prompt(
        [
            {
                type: "input",
                message: "What is your project title?",
                name: "title",
            },
            {
                type: "input",
                message: "What is your project description?",
                name: "desc",
            },
            {
                type: "input",
                message: "What is your project's content?",
                name: "content",
            },
        ])
    .then(function(response){
        let title  = response.title;
        let desc  = response.desc;
        let content  = response.content;

        stringArr.push("What is your project's title?");
        stringArr.push(title);
        stringArr.push("What is your project's description?");
        stringArr.push(desc);
        stringArr.push("What is your project's content?");
        stringArr.push(content);
    

        //  stringArr = '
        //  # ${stringArr[0]}
        //  stringArr[1]
        //  ## stringArr[2]
        //  stringArr[3]
        //  ### stringArr[4]
        //  stringArr[5] 
        // '

        fs.writeFile('README.md', stringArr, function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("SUCCESS");
        })
    });

















      // console.log(title, desc, content);
        // let html = `<!DOCTYPE html>
        // <html lang="en">
        // <head>
        //     <meta charset="UTF-8">
        //     <meta title="viewport" content="width=device-width, initial-scale=1.0">
        //     <title>Document</title>
        // </head>
        // <body>
        //     <p id="title">${title}</p>
        //     <p id="desc">${desc}</p>
        //     <p id="content">${content}</p>
        //     <script src="index.js"></script>
        // </body>
        // </html>`
        //.replace(","," ").replace("{"," ").replace("}"," ")
