const saveImgs = require('./src/saveImgs'),
    scrapers = require('./src/scrapers'),
    CONFIG = require('./config');

const scraper = scrapers[CONFIG.SCRAPER];

scraper(CONFIG.QUERY, CONFIG.COUNT, CONFIG.OFFSET, images => {
    saveImgs(images, CONFIG.DIR, CONFIG.OFFSET);
});