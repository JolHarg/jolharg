export default class ElementAbstract extends HTMLElement
{
    get dir() {
        throw new Error(`Define dir`);
    }

    get hascss() {
        return false;
    }

    async afterAll() {
        // console.log(`Do stuff here`)
    }

    async connectedCallback()
    {
        try {
            const html = await (await fetch(`${this.dir}/index.html`)).text(),
                extcss = await (await fetch(`${this.dir}/external.css`)).text();

            let template = `${html}<style>${extcss}</style>`;
            if (this.hascss) {
                const css = await (await fetch(`${this.dir}/index.css`)).text();
                template += `<style>${css}</style>`;
            }

            this.attachShadow({mode: 'open'});
            
            this.shadowRoot.innerHTML = template;

            for (const strAttr of ["src", "href"]) {
                if (this.hasAttribute(strAttr)) {
                    this.shadowRoot.querySelector(`[${strAttr}]`).setAttribute(strAttr, this.getAttribute(strAttr));
                }
            }

            await this.afterAll();
        } catch (err) {
            console.log(err);
        }
    }
}
