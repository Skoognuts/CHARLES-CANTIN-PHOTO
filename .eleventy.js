/* Configuration File */

module.exports = function(eleventyConfig) {

  eleventyConfig.addCollection("prestations", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/content/prestations/*.md");
  })

  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/content");

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};