const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const nxtBtn = document.querySelector(".nxtBtn");
const tweetBtn = document.querySelector(".tweet");

const theQuotes = async ()=>{
    const url = await fetch("https://api.quotable.io/random");
    const reponse = await url.json();
    console.log(reponse);
    quote.textContent = reponse.content;
    author.textContent = reponse.author
}

theQuotes();