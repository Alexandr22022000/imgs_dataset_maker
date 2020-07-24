const CONFIG = {
    QUERY: "car",
    SCRAPER: 'GoogleStandard',
    COUNT: 10,
    OFFSET: 0,
    DIR: './dataset/'
};

for (let key in process.env) {
    CONFIG[key] = process.env[key];
}

module.exports = CONFIG;