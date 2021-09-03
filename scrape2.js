const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('post.csv');

writeStream.write(`Title, Paragraph \n`);

request('https://www.sitebuilderreport.com/inspiration/blog-examples', (error, response, html) => {
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);
        // $('.sticky-bar').each((i, el) => {
        //     const title = $(el).find('h2').text();
        //     console.log(title);
        // })
        // $('.wrapper').each((i, el) => {
        //     const paragraph = $(el).find('p').text();
        //     console.log(paragraph);
        // })
        $('.example-website').each((i, el) => {
            const title = $(el).find('.sticky-bar h2').text();
            const paragraph = $(el).find('.wrapper p').text();
            writeStream.write(`${title}, ${paragraph} \n`);
        });
        console.log('Scraping Done...');
    }
});