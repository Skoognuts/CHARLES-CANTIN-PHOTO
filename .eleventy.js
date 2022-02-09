/* Configuration File */

module.exports = function(eleventyConfig) {

  eleventyConfig.addCollection("prestations", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/content/prestations/*.md");
  })

  eleventyConfig.addCollection("photoAll", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/content/photographies/*.md");
  })

  eleventyConfig.addCollection("photoBapteme", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/content/photographies/*.md").filter(photo => photo.data.photoCategory == "Baptême");
  })

  eleventyConfig.addCollection("photoBebe", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/content/photographies/*.md").filter(photo => photo.data.photoCategory == "Bébé");
  })

  eleventyConfig.addCollection("photoCouple", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/content/photographies/*.md").filter(photo => photo.data.photoCategory == "Couple");
  })

  eleventyConfig.addCollection("photoFamille", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/content/photographies/*.md").filter(photo => photo.data.photoCategory == "Famille");
  })

  eleventyConfig.addCollection("photoGrossesse", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/content/photographies/*.md").filter(photo => photo.data.photoCategory == "Grossesse");
  })

  eleventyConfig.addCollection("photoMariage", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/content/photographies/*.md").filter(photo => photo.data.photoCategory == "Mariage");
  })

  eleventyConfig.addCollection("photoPortrait", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/content/photographies/*.md").filter(photo => photo.data.photoCategory == "Portrait");
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