import ElementAbstract from '../../element-abstract.js';

export default class Pages extends ElementAbstract
{
    get dir() {
        return `/js/components/jh/pages`;
    }

    get hascss() {
        return true;
    }

    hashchange() {
        console.log(window.location.hash);;
        console.log(this.shadowRoot.querySelectorAll(`jh-page`));
        this.shadowRoot.querySelectorAll(`jh-page`).forEach((page) => page.removeAttribute(`data-active`));
        this.shadowRoot.querySelector(window.location.hash).setAttribute(`data-active`, true);
    }

    async afterAll() {
        addEventListener(`hashchange`, this.hashchange.bind(this));
        this.hashchange();
    }
}
