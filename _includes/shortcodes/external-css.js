/**
 * @file Defines a shortcode for loading external stylesheets
 * @author Brian Hinton <ask@mrbrianhinton.com]>
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#javascript-template-functions JavaScript template functions in 11ty}
 */

/**
 * A JavaScript Template module for the external CSS `link`
 * @module _includes/shortcodes/external-css
 * @param {Object} eleventyConfig 11ty’s Config API
 */
export default (eleventyConfig) =>
  /**
   * Create one or more `link` references
   * @method
   * @name externalCSS
   * @param {Object} data 11ty’s data object
   * @return {String} The rendered shortcode
   * @example `${this.externalCSS(data)}`
   * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
   */
  eleventyConfig.addShortcode("externalCSS", (data) => {
    var files = [];
    var html = "";
    files.map(
      (file) =>
        (html += `<link href="/css/${file}.css" rel="stylesheet" media="screen">`)
    );
    return html;
  });
