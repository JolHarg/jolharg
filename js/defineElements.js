import App              from './components/jh/app/index.js';
import Breadcrumb       from './components/jh/breadcrumb/index.js';
import Card             from './components/jh/card/index.js';
import CardImg          from './components/jh/card/img/index.js';
import CardLink         from './components/jh/card/link/index.js';
import CardSummary      from './components/jh/card/summary/index.js';
import CardText         from './components/jh/card/text/index.js';
import CardTitle        from './components/jh/card/title/index.js';
import Header           from './components/jh/header/index.js';
import HeaderLink       from './components/jh/header/link/index.js';
import Page             from './components/jh/page/index.js';
import PagePortfolio    from './components/jh/page/portfolio/index.js';
import Pages            from './components/jh/pages/index.js';

const modules = [
    ['jh-app',               App],
    ['jh-breadcrumb',        Breadcrumb],
    ['jh-card',              Card],
    ['jh-card-img',          CardImg],
    ['jh-card-link',         CardLink],
    ['jh-card-summary',      CardSummary],
    ['jh-card-text',         CardText],
    ['jh-card-title',        CardTitle],
    ['jh-header',            Header],
    ['jh-header-link',       HeaderLink],
    ['jh-page',              Page],
    ['jh-page-portfolio',    PagePortfolio],
    ['jh-pages',             Pages]
];

modules.map(
    (opts) => customElements.define(...opts)
);

export default async () => Promise.all(
    modules.map(
        (opts) => customElements.whenDefined(opts[0])
    )
);
