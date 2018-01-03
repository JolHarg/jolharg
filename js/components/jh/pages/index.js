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
        this.shadowRoot.querySelectorAll(`jh-page`).forEach((page) => page.removeAttribute(`data-active`));
        const strHash = window.location.hash || `#portfolio`,
            currentHashElem = this.shadowRoot.querySelector(strHash);
        if (currentHashElem) {
            currentHashElem.setAttribute(`data-active`, true);
        }
    }

    async afterAll() {
        addEventListener(`hashchange`, this.hashchange.bind(this));
        this.hashchange();
    }
}
