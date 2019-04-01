import {lazyPromise, lazyAsync} from './lazyPromise';
import promiseSerial from './promiseSerial';

export default config => driver => links => async elements => await promiseSerial(
    config.resolutions.map(
        ({name, width, height}) => lazyAsync(async () => {
            console.log('Setting dimensions', {width, height});
            await driver.manage().window().setRect({width, height});
            return {
                [name]: await promiseSerial(links.map(
                    elementLink => lazyAsync(async () => {
                        const linkText = await elementLink.getText();
                        console.log('Clicking', linkText);
                        await elementLink.click();
                        console.log('Determining elements\' dimensions');
                        return {
                            [linkText]: {
                                elements: (await Promise.all(elements.map(
                                    async element => ({
                                        //id: await element.getId(),
                                        tagName: await element.getTagName(),
                                        rect: Object.fromEntries(
                                            (
                                                Object.entries(
                                                    (
                                                        await element.getRect()
                                                    ) || {}
                                                ) || []
                                            ).map(
                                                ([k, v]) => ([k, Math.floor(v)])
                                            ) || []
                                        )
                                    })
                                ))).filter(el =>
                                    'undefined' !== typeof el.rect &&
                                    'undefined' !== typeof el.rect.x &&
                                    0 !== el.rect.x &&
                                    'undefined' !== typeof el.rect.y &&
                                    0 !== el.rect.y &&
                                    'undefined' !== typeof el.rect.height &&
                                    0 !== el.rect.height &&
                                    'undefined' !== typeof el.rect.width &&
                                    0 !== el.rect.width &&
                                    (console.log(el) || true)
                                )
                            }
                        };
                    })()
                ))
            };
        })()
    )
);