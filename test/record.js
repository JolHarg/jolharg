import {Builder, By, until} from 'selenium-webdriver'
import fs from 'fs';
import {promisify} from 'util';
import serveHandler from 'serve-handler';
import {createServer} from 'http';
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

(async () => {
    const config = JSON.parse(await readFile('test/config.json'));
    const driver = await new Builder().forBrowser('firefox').build();
    const server = createServer((req, res) => serveHandler(req, res, {public: '.site'}));

    try {
        server.listen(5000, () => console.log('Running at http://localhost:5000'));
        await driver.get('http://localhost:5000');
        await driver.wait(until.elementLocated(By.className('p-0')));

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
        await writeFile('test/page_data.json', JSON.stringify(pageData));
    } finally {
        await driver.quit();
        server.close();
    }
})();