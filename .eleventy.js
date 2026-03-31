const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function(eleventyConfig) {
  // Markdown with heading anchors (enables deep links)
  const md = markdownIt({ html: true })
    .use(markdownItAnchor, {
      slugify: s => s.trim().toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-")
    });
  eleventyConfig.setLibrary("md", md);

  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  
  // Copy CNAME for GitHub Pages custom domain
  eleventyConfig.addPassthroughCopy("CNAME");
  
  // Watch for changes in CSS
  eleventyConfig.addWatchTarget("src/css/");
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html", "liquid"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid"
  };
};
