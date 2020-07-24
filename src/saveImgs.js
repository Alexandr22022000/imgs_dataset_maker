const fs = require('fs'),
    request = require('request');

module.exports = (images, dir, offset=0) => {
    return new Promise((resolve) => {
        let done = 0;

        images.forEach((img, i) => {
            let filename = `${dir}${i + offset}.jpg`;

            request(img).pipe(fs.createWriteStream(filename)).on('close', () => {
                console.log(`Image ${filename} saved!`);

                done++;
                if (done === img.length) resolve();
            });
        });
    });
};