export default () => {
    const hashchange = function() {
        Array.from(document.querySelectorAll(`.jh-page`)).forEach(
            page => page.removeAttribute(`data-active`)
        );
        const strHash = window.location.hash || `#portfolio`,
            currentHashElem = document.querySelector(strHash);
        if (currentHashElem) {
            currentHashElem.setAttribute(`data-active`, true);
        }
    }

    window.addEventListener(`hashchange`, hashchange);
    hashchange();
}