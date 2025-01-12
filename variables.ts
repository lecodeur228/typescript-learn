
const nom : string = "John";
const nbr : number = 10;
const isOpen : boolean =  true;
const genre :  string[] = ["Rock", "Pop", "Jazz"];
const livre  =  {title: "le livre", author: "le auteur", isVailable: true};

function printBookDetail(livre: {'title': string, 'author': string, 'isVailable': boolean}) {
    console.log('title : ' + livre.title);
    console.log('author : ' + livre.author);
    console.log('is available : ' + livre.isVailable);
 }

 console.log(nom);
 console.log(nbr);
 console.log(isOpen);
 console.log(genre);

 printBookDetail(livre);