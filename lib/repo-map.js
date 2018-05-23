const languageURLs = require(`./language-urls`);

module.exports = item => ({
    picture: languageURLs[item.language] || languageURLs.Default,
    name: item.name,
    stars: item.stargazers_count ?
        ` (${item.stargazers_count}★)` :
        ``,
    fork: item.fork ?
        ` ⑂`:
        ``,
    description: item.description ?
        item.description :
        `(no description)`,
    licence: item.license && `Other` !== item.license.name ?
        `<br/><a href="https://spdx.org/licenses/${item.license.spdx_id}.html" target="_blank">${item.license.spdx_id}</a>`:
        ``,
    url: item.clone_url
});