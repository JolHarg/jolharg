import { github } from '../../config.js';
import { fetchjson } from './ajax.js';

const qs = `per_page=100&sort=pushed&type=owner&direction=desc&access_token=${github.access_token}`;

export default async user => {
    const arrResponse = await fetchjson(
        `https://api.github.com/users/${user}/repos?${qs}`
    );

    if (arrResponse.message) {
        throw new Error(arrResponse.message);
    }

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
        licence: item.license && "Other" !== item.license.name ?
            `<br/><a href="https://spdx.org/licenses/${item.license.spdx_id}.html" target="_blank">${item.license.spdx_id}</a>`:
            ``,
        url: item.clone_url
    }));
};
