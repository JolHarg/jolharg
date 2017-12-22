import ElementAbstract from '../../../element-abstract.js';

export default class PageFs extends ElementAbstract
{
    get dir() {
        return `/js/components/jh/page/fs`;
    }

    get hascss() {
        return true;
    }

    async afterAll() {
        const html = (await Promise.all(
                [`jolharg`, `danwdart`].map(
                    async user => await (await fetch(`https://api.github.com/users/${user}/repos?per_page=100&sort=pushed&type=owner&direction=desc&access_token=faa9dd56b85a209ceac853e8d4edeff36588c5b3`)).json()
                )
            )).map(result => result.map(
                item => `
                    <jh-card class="col-md-4">
                        <jh-card-img src="${item.owner.avatar_url}"></jh-card-img>
                        <jh-card-title>${item.name}${item.stargazers_count?" ("+item.stargazers_count+"&starf;)":""} ${item.fork?" (fork)":""}</jh-card-title>
                        <jh-card-text>${item.description?item.description:"(no description)"}${item.license&&"Other"!==item.license.name?('<br/><a href="https://spdx.org/licenses/'+item.license.spdx_id+'.html" target="_blank">'+item.license.spdx_id+'</a>'):''}</jh-card-text>
                        <jh-card-link href="${item.clone_url}"></jh-card-link>
                    </jh-card>
                `
            ).join(``)
        ).join(``);
        this.shadowRoot.getElementById(`inside`).innerHTML = html;
    }
}
