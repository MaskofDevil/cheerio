const request = require('request');
const cheerio = require('cheerio');

request('https://www.sitebuilderreport.com/inspiration/blog-examples', (error, response, html) => {
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);

        const title = $('.title');

        // console.log(title.html());
        // console.log(title.text());
        // const output = title.find('h1').text();
        // const output = title.children('h1').next().text();
        // console.log(output);

        $('.subheader a').each((i, el) => {
            const item = $(el).text();
            const link = $(el).attr('href');

            console.log(link);
        })
    }
})