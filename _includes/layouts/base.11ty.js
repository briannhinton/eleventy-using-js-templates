/**
 * @file Defines the base template
 * @author Brian Hinton <ask@mrbrianhinton.com]>
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#function JavaScript functions as templates in 11ty}
 */

/**
 * Base JavaScript Template module
 * @module _includes/layouts/base
 * @param {Object} data 11ty’s data object
 * @return {String} The rendered template
 * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
 * @see {@link https://www.11ty.dev/docs/shortcodes/ Shortcodes in 11ty}
 */
export function render(data) {
  var l10n = data.site[data.locale];
  return `<!DOCTYPE html>
  <html lang="${data.locale ? l10n.locale : data.site.defaultLocale}">
  <link rel="stylesheet" href="/style.css"/>
    ${this.headTag(data)}
    <body>
      ${this.siteHeader(data)}
      ${this.nav(data.collections.nav, data.page, "", l10n.nav.primary)}
      <main>
        ${data.content}
      </main>
      ${this.siteFooter(data)}
    </body>
  </html>`;
}
