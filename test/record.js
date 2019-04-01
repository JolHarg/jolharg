import {Builder, By, until} from 'selenium-webdriver';
import fs from 'fs';
import {promisify} from 'util';
import serveHandler from 'serve-handler';
import {createServer} from 'http';

import inspectPageData from './lib/inspectPageData';

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

(async () => {
    console.log('Getting config');
    const config = JSON.parse(await readFile('test/config.json'));
    console.log('Building driver');
    const driver = await new Builder().forBrowser(config.browser).build();
    console.log('Creating server');
    const server = createServer((req, res) => serveHandler(req, res, {public: '.site'}));

    try {
        console.log('Listening on server');
        server.listen(5000, () => console.log('Running at http://localhost:5000'));
        console.log('Getting page');
        await driver.get('http://localhost:5000');
        console.log('Waiting for Elements');
        await driver.wait(until.elementLocated(By.className('p-0')));
        console.log('Getting Links');
        const links = await driver.findElements(By.css(config.links));
        console.log('Getting All Elements');
        const elements = await driver.findElements(By.css(config.checkSelector));    
        console.log(`Got ${elements.length} Elements. Getting Dimensions`);
        const pageData = await inspectPageData(config)(driver)(links)(elements);
        console.log('Got Data');
        await writeFile('test/page_data.json', JSON.stringify(pageData));
    } finally {
        await driver.quit();
        server.close();
    }
})();