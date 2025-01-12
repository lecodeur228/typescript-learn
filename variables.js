var nom = "John";
var nbr = 10;
var isOpen = true;
var genre = ["Rock", "Pop", "Jazz"];
var livre = { title: "le livre", author: "le auteur", isVailable: true };
function printBookDetail(livre) {
    console.log('title : ' + livre.title);
    console.log('author : ' + livre.author);
    console.log('is available : ' + livre.isVailable);
}
console.log(nom);
console.log(nbr);
console.log(isOpen);
console.log(genre);
printBookDetail(livre);
