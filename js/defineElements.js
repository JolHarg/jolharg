import App              from `./components/jh/app`;
import Breadcrumb       from `./components/jh/breadcrumb`;
import Card             from `./components/jh/card`;
import CardImg          from `./components/jh/card/img`;
import CardLink         from `./components/jh/card/link`;
import CardSummary      from `./components/jh/card/summary`;
import CardText         from `./components/jh/card/text`;
import CardTitle        from `./components/jh/card/title`;
import Header           from `./components/jh/header`;
import HeaderLink       from `./components/jh/header/link`;
import Page             from `./components/jh/page`;
import PagePortfolio    from `./components/jh/page/portfolio`;
import Pages            from `./components/jh/pages`;

export default async () => Promise.all([
    [`jh-breadcrumb`,        Breadcrumb],
    [`jh-card`,              Card],
    [`jh-card-img`,          CardImg],
    [`jh-card-link`,         CardLink],
    [`jh-card-summary`,      CardSummary],
    [`jh-card-text`,         CardText],
    [`jh-header`,            Header],
    [`jh-header-link`,       HeaderLink],
    [`jh-page`,              Page],
    [`jh-page-portfolio`,    PagePortfolio],
    [`jh-pages`,             Pages]
].map((opts)=>customElements.define(...opts)));
