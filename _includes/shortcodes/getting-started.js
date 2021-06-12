/**
 * @file Defines a shortcode for displaying a `section` about getting started
 * @author Brian Hinton <ask@mrbrianhinton.com]>
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#javascript-template-functions JavaScript template functions in 11ty}
 */

/**
 * A JavaScript Template module for the content “Getting Started” information
 * @module _includes/shortcodes/getting-started
 * @param {Object} eleventyConfig 11ty’s Config API
 */
export default function (eleventyConfig) {
  /**
   * “Getting Started” `section` markup
   * @method
   * @name gettingStarted
   * @param {Object} 11ty’s data object
   * @return {String} The rendered shortcode
   * @example `${this.gettingStarted(data)}`
   * @see {@link https://www.11ty.dev/docs/data/ Using data in 11ty}
   */
  eleventyConfig.addShortcode("gettingStarted", function (data) {
    return `<section>
      <h2>Get started!</h2>
      <ul>
        <li>Edit <code>./_data/site.json</code> with your site’s information</li>
        <li>(Optional) Edit <code>.eleventy.js</code> with your configuration preferences</li>
        <li>Delete this message from <code>./_includes/${
          data.layout
        }.11ty.js</code></li>
      </ul>
      <p>You could also <a href="https://app.netlify.com/start/deploy?repository=https://gitlab.com/reubenlillie/eleventy-dot-js-blog">${this.fileToString(
        "img/deploy-to-netlify-button.svg"
      )}</a></p>
      <p>More information on <a href="${data.pkg.homepage}">GitLab</a></p>
    </section>`;
  });
}
