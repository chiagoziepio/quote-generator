const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const nxtBtn = document.querySelector(".nxtBtn");
const tweetBtn = document.querySelector(".tweet");



const theQuotes = async ()=>{
    const url = await fetch("https://api.quotable.io/random");
    const reponse = await url.json();
    quote.textContent = reponse.content;
    author.textContent = reponse.author
}

theQuotes();

nxtBtn.addEventListener("click",theQuotes);

tweetBtn.addEventListener("click", ()=>{
    window.open("https://twitter.com/intent/tweet?text=" + quote.textContent +"---- by " + author.textContent, "Tweet Window", "width=600,height=300");
})