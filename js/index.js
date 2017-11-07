import defineElements from './defineElements';

defineElements();

const hashchange = e => {
    console.log(window.location.hash);
};
addEventListener("hashchange", hashchange);
hashchange();
