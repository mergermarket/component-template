const sveltePreprocess = require("svelte-preprocess");

const preProcessOptions = {};

module.exports = {
  preprocess: sveltePreprocess(preProcessOptions),
  preProcessOptions,
};
