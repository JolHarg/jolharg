import danwdartJson from './github/danwdart.json';
import jolhargJson from './github/jolharg.json';

export default async user => {
    const arrResponse = `danwdart` === user ? danwdartJson : (
        `jolharg` === user ?
            jolhargJson:
            []
    );

    return arrResponse.map(item => ({
        picture: item.owner.avatar_url,
        name: item.name,
        stars: item.stargazers_count ?
            ` (${item.stargazers_count}&starf;)` :
            ``,
        fork: item.fork ?
            ` (fork)`:
            ``,
        description: item.description ?
            item.description :
            `(no description)`,
        licence: item.license && `Other` !== item.license.name ?
            `<br/><a href="https://spdx.org/licenses/${item.license.spdx_id}.html" target="_blank">${item.license.spdx_id}</a>`:
            ``,
        url: item.clone_url
    }));
};
