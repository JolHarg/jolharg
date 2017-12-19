import ElementAbstract from '../../element-abstract.js';

export default class Card extends ElementAbstract
{
    get dir() {
        return `/js/components/jh/card`;
    }

    get hascss() {
        return true;
    }
}
