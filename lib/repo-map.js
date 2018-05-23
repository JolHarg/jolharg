const languageURLs = require(`./language-urls`);

module.exports = item => ({
    picture: languageURLs[item.language] || languageURLs.Default,
    name: item.name,
    stars: item.stargazers_count,
    fork: item.fork,
    description: item.description,
    licence: item.license,
    source_url: item.clone_url,
    website_url: item.homepage
});