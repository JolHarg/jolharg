const elementFactory = {
    definedIncludes: [],
    defineElements(definitions, prefix = 'jh')
    {
        for (const name in definitions) {
            const newName = `${prefix}-${name}`,
                location = newName.replace(/-/g, '/'),
                base = `js/components`,
                defaultFilename = `index`,
                filename = `${base}/${location}/${defaultFilename}`,
                htmlFile = `${filename}.html`,
                cssFile = `${filename}.css`,
                subDefinitions = definitions[name],
                options = subDefinitions.options || {};

            delete subDefinitions.options;

            customElements.define(newName, this._factory(htmlFile, cssFile, options));
            this.defineElements(subDefinitions, newName);
        }
    },

    _factory(htmlFile, cssFile, options)
    {
        return class extends HTMLElement
        {
            async connectedCallback()
            {
                // .attachShadow({mode: 'open'})
                // slotted needed for non-shadow slots
                const html = await (await fetch(htmlFile)).text(),
                    slotted = this.innerHTML;

                this.innerHTML = html;

                const slot = this.querySelector("slot")

                if (slot) {
                    slot.innerHTML = slotted;
                }

                const customHref = this.getAttribute("href"),
                    link = this.querySelector("a");
                if (link) {
                    link.setAttribute("href", customHref);
                }

                const customSrc = this.getAttribute("src"),
                    img = this.querySelector("img");
                if (img) {
                    img.setAttribute("src", customSrc);
                }

                if (this.parentNode) {
                    this.outerHTML = this.innerHTML;
                }

                if (options.css &&
                    !elementFactory.definedIncludes.includes(cssFile)) {
                    console.log(`including ${cssFile}`);
                    elementFactory.definedIncludes.push(cssFile);
                    const style = document.createElement('link');
                    style.href = cssFile;
                    style.type = "text/css";
                    style.rel = "stylesheet";
                    document.head.appendChild(style);
                }
            }
        };
    }
};
export default elementFactory;
