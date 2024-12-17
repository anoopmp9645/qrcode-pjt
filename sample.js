import { writeFile } from 'fs';
import inquirer from 'inquirer';
import qr from "qr-image";


inquirer
  .prompt([
    {
    message : "enter your url" ,
    name : "url"
    }

    /* Pass your questions in here */
  ])
  .then((answers) => {
    const url = answers.url
    var qr_svg = qr.image(url);
   qr_svg.pipe(require('fs').createWriteStream('qr_img.png'));


       // 3
       fs.writeFile('url.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  })

  
    


  
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });