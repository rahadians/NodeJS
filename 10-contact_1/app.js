// Core Module
//File System

const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path/posix");

//menuliskan string ke file (syncronus)

// try {
//   fs.writeFileSync('data\test.txt', 'Hello world secara syncronus');
// } catch (e) {
//   console.log(e);
// }

//Menuliskan string ke file (asyncronus)

// fs.writeFile('data/testasyn.txt', 'Hello World secara asyncronus', (err) => {
//   console.log(err);
// });

//membaca file secara syncronus

// const xstring = console.log(fs.readFileSync('data/testasyn.txt'),'utf');

// fs.readFileSync('<directory>');

// const xstring = fs.readFileSync('data/testasyn.txt',
//   { encoding: 'utf8' });

// console.log(xstring);

//membaca file secara asyncronus

// fs.readFile('data/testasyn.txt', 'utf8', function (err, contents) {
//   console.log(contents);
// });

// // console.log('after calling readFile');

//Readline

const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Siapa nama anda? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Nama anda adalah : ${answer}`);

//   rl.close();
// });

// rl.question('Berapa nomor handphone anda? ', (jawab) => {
//   // TODO: Log the answer in a database
//   console.log(`nomor handphone anda adalah : ${jawab}`);

//   rl.close();
// });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//membuat folder data jika tidak ada
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', "utf-8");
}

const pertanyaan1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Masukkan nama anda : ', (nama) => {
      resolve(nama);
    })
  })
}

const pertanyaan2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Masukkan email anda : ', (email) => {
      resolve(email);
    })
  })
}


const main = async () => {
  const nama = await pertanyaan1();
  const email = await pertanyaan2();
}

const filestring = fs.readFileSync('data/contacts.json', "utf-8");
const contacts = JSON.parse(filestring); //parse merubah string menjadi json

contacts.push(contact);

fs.writeFileSync('data/contacts.json', JSON.stringify(contacts)); //stringifly merubah json mejadi string

console.log('Terima kasih sudah memasukkan data');
rl.close();



main();

// rl.question("Masukkan nama anda : ", (nama) => {
//   rl.question("Masukkan no HP anda : ", (noHP) => {

//     const contact = {
//       nama,
//       noHP,
//     };

//     const filestring = fs.readFileSync('data/contacts.json', "utf-8");
//     const contacts = JSON.parse(filestring); //parse merubah string menjadi json

//     contacts.push(contact);

//     fs.writeFileSync('data/contacts.json', JSON.stringify(contacts)); //stringifly merubah json mejadi string

//     console.log('Terima kasih sudah memasukkan data');
//     rl.close();
//   });
// });
