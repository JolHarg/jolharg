import ElementAbstract from '../../../element-abstract.js';

export default class PageContact extends ElementAbstract
{
    get dir() {
        return `/js/components/jh/page/contact`;
    }

    get hascss() {
        return true;
    }

    async afterAll() {
    }
}
