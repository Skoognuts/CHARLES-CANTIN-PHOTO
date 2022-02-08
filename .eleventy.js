/* Configuration File */

module.exports = function(eleventyConfig) {

  eleventyConfig.addCollection("prestations", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/content/prestations/*.md");
  })

  eleventyConfig.addCollection("photographies", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/content/photographies/*.md");
  })

  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/assets");

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};