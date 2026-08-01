// Loading IN Quotes
function loadQuotes(language) {
  const quotesFileNames = {
    en: 'quotesD_EN.json',
    nl: 'quotesD_NL.json',
    fr: 'quotesD_FR.json',
    pl: 'quotesD_PL.json',
  };

  const fileName = quotesFileNames[language] || 'quotesD_EN.json'; 

  fetch(`./tl/support/${fileName}`)
    .then(response => response.json())
    .then(data => {
      updateQuotes(data);
    })
    .catch(error => {
      console.error('Error fetching or parsing JSON file for quotes', error);
    });
}

// Updates Quotes
function updateQuotes(quotesData) {
  const quotesContainer = document.querySelector('.quotes');
  quotesContainer.innerHTML = '';

  quotesData.forEach(quote => {
    const quoteElement = document.createElement('p');
    quoteElement.textContent = quote.quote;
    quotesContainer.appendChild(quoteElement);
  });
}

// Change Language for Quotes
function changeQuotesLanguage(language) {
  loadQuotes(language);
}
