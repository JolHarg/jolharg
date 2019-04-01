const languageURLs = require('./language-urls');

module.exports = item => ({
    ...item,
    picture: languageURLs[item.language] || languageURLs.Default,
    stars: item.stargazers_count,
    licence: item.license,
    source_url: item.clone_url,
    website_url: item.homepage
});