// JavaScript-ified ./content/pages/archive.11ty.js
/**
 * @file Defines the chained layout for the archive page
 * @see {@link https://www.11ty.dev/docs/layouts/#layout-chaining Layout chaining in 11ty}
 */

/**
 * Acts as front matter in JavaScript templates
 * @see {@link https://www.11ty.dev/docs/languages/javascript/#optional-data-method Optional `data` in JavaScript templates in 11ty}
 */
export var data = {
  title: "A Blog for the Ages",
  navTitle: "Blog",
  tags: "nav",
  weight: 3,
  layout: "layouts/archive",
  templateEngineOverride: "11ty.js",
  pagination: {
    data: "collections.posts",
    size: 3,
    alias: "posts",
    reverse: true
  },
  eleventyComputed: {
    permalink: (data) => `${data.site[data.locale].postsArchive.url}/index.html`
  }
};

/**
 * The archive page content
 * @method
 * @name render()
 * @param {Object} data 11ty’s data object
 * @return {String} The rendered template
 */
export function render(data) {
  return `<!-- ${data.page.inputPath} -->
This is your blog landing page.

The content in <code>./content/pages/archive.md</code> (this file, if you’re reading it in a text editor) appears above the section of posts generated by <code>./_includes/layouts/archive.11ty.js</code>. In that layout, the contents of this Markdown file are represented by <code>$\{data.content\}</code>.

You can use this file to provide some context for your blog. Or you can delete the content below the closing <code>---</code> and just show a list of posts.`;
}
