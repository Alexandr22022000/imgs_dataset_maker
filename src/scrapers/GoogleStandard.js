const Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
        headless: false,
    }
});

module.exports = (query, limit, offset, callback) => {
    console.log("Start searching for " + query);

    google.scrape(query, limit + offset).then(results => {
        results = results.slice(offset);
        results = results.map(item => item.url);
        callback(results);
    });
};