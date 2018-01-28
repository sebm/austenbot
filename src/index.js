import QuoteGrabber from './quote-grabber';
import TwitClient from './twit-client';

function austenbot (req, res) {
    const qb = new QuoteGrabber();

    qb.getQuote().then(quote => {
        const T = new TwitClient();

        T.sendTweet(quote).then(() => {
            res.send(`successfully tweeted: ${quote}`);
            res.end();
        }).catch(err => {
            res.send(`error: ${err}`)
            res.end();
        });
    }).catch(reason => {
        res.send(reason);
        res.end();
    });
};

exports.austenbot = austenbot;
