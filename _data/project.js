/**
 * @file Exposes environment variables to templates
 * @author Brian Hinton <ask@mrbrianhinton.com]>
 */

/**
 * Uses Node.js’s `process.env` property 
 * @module _data/project
 * @see {@link https://www.11ty.dev/docs/data-js/#example-exposing-environment-variables Environment variables in 11ty}
 */
export default {
  environment: process.env.ELEVENTY_ENV
}
