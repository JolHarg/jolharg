import getGithubRepos from '../../../../lib/service/get-github-repos.js';
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
                async user => await getGithubRepos(user)
            )
        )).map(
            result => result.map(
                item => `
                    <jh-card class="col-md-4">
                        <jh-card-img src="${item.picture}"></jh-card-img>
                        <jh-card-title>${item.name}${item.stars}${item.fork}</jh-card-title>
                        <jh-card-text>${item.description}${item.licence}</jh-card-text>
                        <jh-card-link href="${item.url}"></jh-card-link>
                    </jh-card>`
            ).join(``)
        ).join(``);
        this.shadowRoot.getElementById(`inside`).innerHTML = html;
    }
}
