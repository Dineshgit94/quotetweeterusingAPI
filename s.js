

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
    const response = await fetch(url);
    const data = await response.json();
    if (quote && author) { 
        quote.innerHTML = data.content;
        author.innerHTML = data.author;
    }
}
function tweet()

{
    window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML} - ${author.innerHTML}`);
}
getQuote(api_url);
