var home = "This is my home"


var indexSecondStart = home.indexOf(' ');
console.log(indexSecondStart);
var indexSecondEnd = home.indexOf(' ',indexSecondStart+1)
var secondWord = home.substring(indexSecondStart+1,indexSecondEnd);

console.log(secondWord)

if (secondWord.indexOf('a')===-1)
{
    console.log("not contain a");
}
else
{console.log('contain a');
}


