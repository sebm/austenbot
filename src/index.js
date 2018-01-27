import QuoteGrabber from './quote-grabber';

function austenbot (req, res) {
    const qb = new QuoteGrabber();

    qb.getQuote().then(quote => {
        res.send(quote);
        res.end();
    }).catch(reason => {
        res.send(error);
        res.end();
    });
};

exports.austenbot = austenbot;
