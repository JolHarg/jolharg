import elementFactory from './element-factory.js';

elementFactory.defineElements({
    app: {},
    breadcrumb: {},
    card: {
        options: {
            bsCSS: true
        },
        img: {
            options: {
                css: true
            }
        },
        link: {
            options: {
                bsCSS: true
            }
        },
        summary: {
        },
        text: {
            options: {
                bsCSS: true
            }
        },
        title: {
            options: {
                bsCSS: true
            }
        }
    },
    header: {
        options: {
            bsCSS: true
        },
        link: {
            options: {
                bsCSS: true,
                css: true
            }
        }
    },
    page: {
        options: {
            bsCSS: true
        },
        portfolio: {
            options: {
                bsCSS: true
            }
        }
    },
    pages: {
        options: {
            bsCSS: true,
            css: true
        }
    }
});

const hashchange = e => {
    console.log(window.location.hash);
};
addEventListener("hashchange", hashchange);
hashchange();
