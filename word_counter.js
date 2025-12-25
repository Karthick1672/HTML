// alert('hi')

const wordstextarea  = document.querySelector(".inputbox");
const button = document.querySelector(".button");

const wordcount = document.querySelector(".span");

const countWords = () =>
{
    let words = wordstextarea.value;
    // replace many extra whitespace into single space
    let wordtrim = words.replace(/\s+/g," ").trim();
    let splitWord = wordtrim.split(" ");
// split - string to array

    let numberOfWords = splitWord.length;

    if (splitWord[0] == "")
    {
        numberOfWords = 0;
    }
// span = wordcount
    wordcount.innerHTML = numberOfWords;
    // innnerHTML for output display
};
// syntax: elemnet.addEventListener("event",function,usecapture)
// usecapture => boolean values(true,false)
button.addEventListener("click", countWords)