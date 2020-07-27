const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

//Get Quote from Api
const getQuote = async () => {
	//Showing loader and removing quote container

	quoteContainer.style.display = 'none';
	loader.style.display = 'block';
	const apiUrl = 'http://quotes.stormconsultancy.co.uk/random.json';
	try {
		//Getting Data from api
		const response = await fetch(apiUrl);
		const data = await response.json();

		//Setting quote details in quote container
		if (data.quote.length > 120) {
			quoteText.classList.add('long-quote');
		} else {
			quoteText.classList.remove('long-quote');
		}
		quoteAuthor.textContent = data.author;
		quoteText.textContent = data.quote;

		//Removing loader and showing quote container
		loader.style.display = 'none';
		quoteContainer.style.display = 'block';
	} catch (err) {
		console.log(err);
	}
};

const tweetQuote = () => {
	const quote = quoteText.textContent;
	const author = quoteAuthor.textContent;
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
	window.open(twitterUrl, '_blank');
};

newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

getQuote();
