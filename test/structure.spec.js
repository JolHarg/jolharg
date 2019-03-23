import {Builder, By, until} from 'selenium-webdriver'
import fs from 'fs';
import {promisify} from 'util';

import serveHandler from 'serve-handler';
import {createServer} from 'http';

import {assert} from 'chai';

const config = JSON.parse(await readFile('test/config.json'));
const readFile = promisify(fs.readFile);

const driver = await new Builder().forBrowser('firefox').build();
const server = createServer((req, res) => serveHandler(req, res, {public: '.site'}));

describe('page structure', () => {
    before(async () => {
        server.listen(5000, () => console.log('Running at http://localhost:5000'));
        await driver.get('http://localhost:5000');
        await driver.wait(until.elementLocated(By.className('p-0')));
    });

    after(async () => {
        await driver.quit();
        server.close();
    });

    it('matches the recorded page structure', () => {
        const elements = await driver.findElements(By.css('*'));
        
        const pageData = Object.fromEntries(await Promise.all(config.resolutions.map(
            async ({name, width, height}) => {
                await driver.manage().window().setRect({width, height});
                return [
                    name,
                    (await Promise.all(elements.map(
                        async element => ({
                            id: await element.getId(),
                            tagName: await element.getTagName(),
                            rect: Object.fromEntries((Object.entries((await element.getRect()) || {}) || []).map(
                                ([k, v]) => ([k, Math.floor(v)])
                            ) || [])
                        })
                    ))).filter(el => el.rect && el.rect.x !== 0 && el.rect.y !== 0 && el.rect.height !== 0 && el.rect.width !== 0)
                ];
            }
        )));

        assert(pageData === )
    })
});