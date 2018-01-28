import { readFile } from "fs";
import { sentences } from 'sbd';
import sample from 'lodash.sample';

class QuoteGrabber {
    getQuote() {
        return new Promise((resolve, reject) => {
            readFile('data/pnp.txt', 'utf-8', (err, data) => {
                if (err) { 
                    reject(err) 
                }

                const validSentences = sentences(data.replace(/\n/g, ' '))
                    .filter(sentence => sentence.length < 280);

                resolve(sample(validSentences));
            })
        });
    }
}

export default QuoteGrabber;
