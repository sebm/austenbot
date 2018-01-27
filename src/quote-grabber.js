import { readFile } from "fs";

class QuoteGrabber {
    getQuote() {
        return new Promise((resolve, reject) => {
            readFile('data/pnp.txt', 'utf-8', (err, data) => {
                if (err) { 
                    reject(err) 
                }

                resolve(data);
            })
        });
    }
}

export default QuoteGrabber;
