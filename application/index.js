const { promisify } = require('util');
const fs = require('fs');
const convert = require('heic-convert');
const prompt = require('prompt-sync')();



console.log("######### MASUKAN LOCATION FILE #########");
console.log(" ");
console.log("untuk naik satu foler ../ atau anda juga bisa 'E:/exampleFolder/images'");
console.log(" ");
const location  = prompt('insert file location : ');
console.log(" ");
// const destination  = prompt('insert destination folder : ');




fs.readdir(location, (err, files) => {
  if (err) throw err;
   files.forEach(fileName => {
      convertFile({
        location:location,
        destination:destination,
        fileName:fileName
      });
   })
});


const convertFile = async (arr) => {
  const inputBuffer = await promisify(fs.readFile)(`${arr.location}/${arr.fileName}`);
  const outputBuffer = await convert({
    buffer: inputBuffer, // the HEIC file buffer
    format: 'JPEG',      // output format
    quality: 1           // the jpeg compression quality, between 0 and 1
  });
  await promisify(fs.writeFile)(`${arr.location}/result/${fileName.split('.')[0]}.jpg`, outputBuffer);
}












// fs.readFile('../variable.txt','utf8',(err,data)=>{
//     if (err) throw err;

//     let arrLocation = data.split(',');
//     arrLocation.map((item,index)=>{
//       switch(index){
//         case 0 :
//           location =item.split('=')[1].replaceAll('"','');
//         case 1 :
//           destination =item.split('=')[1].replaceAll('"','');
//           break
//       }
//     })
// });










