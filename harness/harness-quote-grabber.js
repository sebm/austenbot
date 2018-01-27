import QuoteGrabber from '../src/quote-grabber';

const qb = new QuoteGrabber();

qb.getQuote().then((quote) => {
    console.log(quote);
});
