const quote = document.querySelector('.quote');
const author = document.querySelector('.auth');
 const btn = document.querySelector('.btn');
const getQuote = async() =>{
    const joke = await fetch('https://type.fit/api/quotes');
    const fjoke = await joke.json();
    const Cjoke = Math.round( Math.random()*fjoke.length);
    const quoteAuth = fjoke[Cjoke]
    const txt = quoteAuth.text;
    const Author = quoteAuth.author;
    quote.innerHTML = txt;
    author.innerHTML = Author;
}
btn.addEventListener('click',getQuote)



