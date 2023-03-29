const quoteList = document.querySelector('#quote-list');

function renderQuote(quote) {
  const li = document.createElement('li');
  li.className = 'quote-card';
  li.innerHTML = `
    <blockquote class="blockquote">
      <p class="mb-0">${quote.quote}</p>
      <footer class="blockquote-footer">${quote.author}</footer>
      <br>
      <button class="btn-success">Likes: <span>${quote.likes.length}</span></button>
      <button class="btn-danger">Delete</button>
    </blockquote>
  `;
  quoteList.appendChild(li);
}

fetch('http://localhost:3000/quotes?_embed=likes')
  .then(response => response.json())
  .then(quotes => {
    quotes.forEach(quote => renderQuote(quote));
  });