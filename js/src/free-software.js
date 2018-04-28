import getGithubRepos from './lib/get-github-repos';

export default async () => {
    const html = (await Promise.all(
        [`jolharg`, `danwdart`].map(
            async user => await getGithubRepos(user)
        )
    )).map(
        result => result.map(
            item => `<div class="card col-md-4 text-center">
                <div class="card-body">
                    <img class="card-img-top" src="${item.picture}"/>
                    <h4 class="card-title">${item.name}${item.stars}${item.fork}</h4>
                    <p class="card-text">${item.description}${item.licence}</p>
                    <a href="${item.url}" target="_blank" class="btn btn-secondary">Visit</a>
                </div>
            </div>`
        ).join(``)
    ).join(``);
    document.getElementById(`inside`).innerHTML = html;
};