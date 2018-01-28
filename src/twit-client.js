import Twit from 'twit';

import config from '../twitter-config';

class TwitClient {
    sendTweet(txt) {
        const T = new Twit(config);

        return new Promise((resolve, reject) => {
            T.post('statuses/update', { status: txt }, (err, response) => {
                if (err) {
                    reject(err);
                }

                resolve();
            });
        });
    }
}

export default TwitClient;
