import elementFactory from './element-factory.js';

elementFactory.defineElements({
    app: {},
    breadcrumb: {},
    card: {
        img: {
            options: {
                css: true
            }
        },
        link: {},
        summary: {},
        text: {},
        title: {}
    },
    header: {
        link: {
            options: {
                css: true
            }
        }
    },
    main: {
        options: {
            css: true
        }
    }
});
