import {Builder, By, until} from 'selenium-webdriver';
import fs from 'fs';
import {promisify} from 'util';

import serveHandler from 'serve-handler';
import {createServer} from 'http';
import {assert} from 'chai';

import inspectPageData from './lib/inspectPageData';

const readFile = promisify(fs.readFile);

const server = createServer((req, res) => serveHandler(req, res, {public: '.site'}));

let config, driver, pageDataFromFile; 

describe('page structure', async function() {
    this.timeout(480000);

    before(async () => {
        server.listen(5000, () => {});
        config = JSON.parse(await readFile('test/config.json'));
        driver = await new Builder().forBrowser(config.browser).build();
        pageDataFromFile = JSON.parse(await readFile('test/page_data.json'));
        await driver.get('http://localhost:5000');
        await driver.wait(until.elementLocated(By.className('p-0')));
    });

    after(async () => {
        try {
            await driver.quit();
            server.close();
        } catch (err) {
            console.error(err);
        }
    });

    it('matches the recorded page structure', async () => {
        try {
            const elements = await driver.findElements(By.css(config.checkSelector));
            const links = await driver.findElements(By.css(config.links));
            const pageData = await inspectPageData(config)(driver)(links)(elements);
            
            assert.deepEqual(
                pageData,
                pageDataFromFile,
                'Page data does not equal the recorded page data.'
            );
        } catch (err) {
            throw new Error(err.message);
        }
    });
});